import { decorate, observable, action } from "mobx";
import axios from "axios";
import carStore from "../stores/carStore";
class CartStore {
  items = [];
  loading = true;

  updateCart = async () => {
    try {
      const res = await axios.get("http://muffinbase.com/cart/");
      let hello = res.data;
      this.items = [];
      hello.cart_items.map(item =>
        this.items.push(carStore.getCarById(item.product))
      );
      this.loading = false;
    } catch (err) {
      console.error(err.stack);
    }
  };

  addItemToCart = async item => {
    try {
      const res = await axios.post("http://muffinbase.com/cart/", {
        product: item.id
      });
      this.items.push(item);
      this.loading = false;
    } catch (err) {
      console.error(err.response.data);
    }
  };

  removeItemFromCart = async deletedItem => {
    try {
      const res = await axios.delete("http://muffinbase.com/cart/", {
        data: {
          product: deletedItem.id
        }
      });
      this.items = this.items.filter(item => item.id !== deletedItem.id);
    } catch (err) {
      console.error(err.stack);
    }
  };
  checkoutCart = async () => {
    try {
      const res = await axios.get("http://muffinbase.com/cart/checkout/");
      this.loading = false;
      this.items = [];
      return true;
    } catch (err) {
      console.error(err.stack);
    }
  };
}

decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  loading: observable
});

export default new CartStore();
