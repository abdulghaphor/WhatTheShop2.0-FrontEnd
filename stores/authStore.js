import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://192.168.100.186:80/accounts/"
  // baseURL: "http://localhost:80/accounts/"
});
class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      await this.setUser(user.token);
      navigation.replace("Profile");
    } catch (err) {
      console.error(err);
    }
  };

  logout = async navigation => {
    await this.setUser();
    navigation.replace("Login");
  };

  signup = async (userData, navigation) => {
    try {
      console.log(userData);
      const res = await instance.post("register/", userData);
      console.log(res);

      const data = res.data;
      console.log(data);
      await this.setUser(data.token);
      navigation.replace("Profile");
    } catch (err) {
      console.error(err);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
