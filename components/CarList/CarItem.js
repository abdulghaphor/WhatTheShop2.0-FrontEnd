import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Text,
  Left,
  Right
} from "native-base";

// Style
import styles from "./styles";

// Navigation
import { withNavigation } from "react-navigation";
import cartStore from "../../stores/cartStore";

class CarItem extends Component {
  state = {
    item: null
  };
  componentWillMount = () => {
    this.setState({ item: this.props.item });
  };
  handlePress = () => {
    this.props.navigation.navigate("CarDetail", {
      item: this.state.item
    });
  };
  handleAdd = () => {
    cartStore.addItemToCart(this.state);
  };

  render() {
    return (
      <ListItem button onPress={this.handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: this.state.item.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.textlist}>
                {this.state.item.manufacturer}
              </Text>
              <Text note style={styles.textlist}>
                {this.state.item.model}
              </Text>
              <Text style={styles.textlist}>{this.state.item.color}</Text>
              <Text style={styles.textlist}>{this.state.item.year}</Text>
            </Left>
            <Right></Right>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default withNavigation(CarItem);
