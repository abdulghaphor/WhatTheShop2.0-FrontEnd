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
    manufacturer: this.props.navigation.getParam("car", {}).manufacturer,
    model: this.props.navigation.getParam("car", {}).model,
    color: this.props.navigation.getParam("car", {}).color,
    gear: this.props.navigation.getParam("car", {}).gear,
    year: this.props.navigation.getParam("car", {}).year,
    milage: this.props.navigation.getParam("car", {}).milage,
    price: this.props.navigation.getParam("car", {}).price,
    image: this.props.navigation.getParam("car", {}).image,
    quantity: 1
  };
  handlePress = () => {
    this.props.navigation.navigate("CarDetail", {
      car: this.props.car
    });
  };
  handleAdd = () => {
    cartStore.addItemToCart(this.state);
  };

  render() {
    const { car } = this.props;
    return (
      <ListItem button onPress={this.handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: car.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.textlist}>{car.manufacturer}</Text>
              <Text note style={styles.textlist}>
                {car.model}
              </Text>
              <Text style={styles.textlist}>{car.color}</Text>
              <Text style={styles.textlist}>{car.year}</Text>
            </Left>
            <Right>
              {/* <Button small transparent onPress={() => this.handleAdd()}>
                <Text>Add To Cart</Text>
              </Button> */}
            </Right>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default withNavigation(CarItem);
