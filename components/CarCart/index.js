import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, List, Button, Spinner, ListItem } from "native-base";
import { withNavigation } from "react-navigation";
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CarCart extends Component {
  state = {
    items: []
  };
  handleDelete = deletedItem => {
    cartStore.removeItemFromCart(deletedItem);
    const items = this.state.items.filter(item => item.id !== deletedItem.id);
    this.setState({ items: items });
  };
  handleCheckout = async () => {
    console.log("handlecheckout");
    let xxx = await cartStore.checkoutCart();
    if (xxx) {
      this.setState({ items: [] });
    }
  };
  componentWillMount = () => {
    if (authStore.user && cartStore.loading === false) {
      this.setState({ items: cartStore.items });
    }
  };
  render() {
    cartItems = this.state.items.map(item => (
      <CartItem item={item} key={item.id} onDelete={this.handleDelete} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => this.handleCheckout()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(CarCart));
