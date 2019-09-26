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
class CartItem extends Component {
  state = {
    item: null
  };
  componentWillMount = () => {
    this.setState({ item: this.props.item });
  };
  render() {
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Thumbnail
            bordered
            source={{ uri: this.state.item.image }}
            style={styles.thumbnail}
          />
          <Text style={{ color: "black", marginLeft: 16 }}></Text>
          <Text note style={{ marginLeft: 16 }}>
            {this.state.item.price}
          </Text>
        </Left>
        <Body></Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.onDelete(this.state.item)}
          >
            <Icon name="trash" style={{ color: "blue", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
