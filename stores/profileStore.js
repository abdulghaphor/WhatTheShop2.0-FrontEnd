import { decorate, observable } from "mobx";
import axios from "axios";

class ProfileStore {
  profile = null;
  loading = true;

  fetchProfile = async () => {
    try {
      let res = await axios.get("http://muffinbase.com/accounts/");
      // let res = await axios.get("http://localhost:80/accounts/");
      console.log("AFTER AXIOS");

      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.log("ERRORRR");
      console.error(err);
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();

export default profileStore;
