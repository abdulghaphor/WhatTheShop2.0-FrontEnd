import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Thumbnail
} from "native-base";
import styles from "../CarList/styles";
import cartStore from "../../stores/cartStore";

class CartItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Thumbnail
            bordered
            source={{ uri: item.image }}
            style={styles.thumbnail}
          />
          <Text style={{ color: "black", marginLeft: 16 }}></Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.price}
          </Text>
        </Left>
        <Body></Body>
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
