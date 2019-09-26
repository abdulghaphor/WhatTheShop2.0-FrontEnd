import { decorate, observable, action } from "mobx";
import axios from "axios";

class CartStore {
  items = [];
  loading = true;

  updateCart = async () => {
    try {
      const res = await axios.get("http://muffinbase.com/cart/");
      this.cart = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.response.data);
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

  removeItemFromCart = itemToDelete =>
    (this.items = this.items.filter(cartItem => cartItem !== itemToDelete));

  checkoutCart = () => {
    this.items = [];
  };
  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  loading: observable
});

export default new CartStore();
