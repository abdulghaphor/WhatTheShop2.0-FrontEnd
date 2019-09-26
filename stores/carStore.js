import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:80/products/"
});

class CarStore {
  cars = null;
  car = null;
  loading = true;

  fetchAllCars = async () => {
    console.log("BEFORE");
    try {
      let res = await instance.get("list/");
      console.log("AFTER AXIOS");
      let cars = res.data;
      this.cars = cars;
      console.log(this.cars);
      this.loading = false;
    } catch (err) {
      console.log("ERRORRR");
      console.error(err);
    }
  };
}

decorate(CarStore, {
  cars: observable,
  loading: observable
});

let carStore = new CarStore();
carStore.fetchAllCars();

export default carStore;
