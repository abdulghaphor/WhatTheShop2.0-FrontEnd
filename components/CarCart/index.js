import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Spinner, ListItem } from "native-base";
import { withNavigation } from "react-navigation";

// Component
import CartItem from "./CartItem";

//Store
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CarCart extends Component {
  componentDidMount = () => {
    if (authStore.user && cartStore.loading === false) {
      cartStore.fetchCart();
    }
  };

  render() {
    const items = cartStore.cart;
    let cartItems;
    if (!cartStore.loading) {
      cartItems = items.map(item => <CartItem item={cart} key={item.id} />);
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => cartStore.checkoutCart()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(CarCart));
