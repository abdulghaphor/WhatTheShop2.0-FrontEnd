import { decorate, observable } from "mobx";
import axios from "axios";

class ProfileStore {
  profile = null;
  loading = true;

  fetchProfile = async () => {
    try {
      let res = await axios.get("http://muffinbase.com/accounts/");
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
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
