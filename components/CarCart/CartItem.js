import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import cartStore from "../../stores/cartStore";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {" "}
            {cartStore.cart.product}{" "}
          </Text>
          <Text note style={{ marginLeft: 16 }}>
            {cartStore.cart.unit_price}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black" }}>
            Quantity : {cartStore.cart.quantity}
          </Text>
        </Body>
        <Body>
          <Text style={{ color: "black" }}>
            Quantity : {cartStore.cart.sub_total}
          </Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => cartStore.removeItemFromCart(item)}
          >
            <Icon name="trash" style={{ color: "blue", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
