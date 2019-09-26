import { decorate, observable } from "mobx";
import axios from "axios";

class CarStore {
  cars = null;
  loading = true;

  fetchAllCars = async () => {
    try {
      let res = await axios.get("http://muffinbase.com/products/list/");
      this.cars = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.response.data);
    }
  };
  getCarById = id => {
    return this.cars.find(car => cartItem.id == item.model);
  };
}
decorate(CarStore, {
  cars: observable,
  loading: observable
});

let carStore = new CarStore();
carStore.fetchAllCars();

export default carStore;
