import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Card,
  Container,
  Header,
  Content,
  CardItem,
  Icon
} from "native-base";
import { Image } from "react-native";

// Style
import styles from "./styles";

//Store
import cartStore from "../../stores/cartStore";
import CartButton from "../Buttons/CartButton";

// Components

class CarDetail extends Component {
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

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  handleAdd = () => {
    cartStore.addItemToCart(this.state);
  };

  render() {
    const car = this.props.navigation.getParam("car", {});
    console.log("[CarDetail.js] car: ", car);
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: car.image }} />
                <Body>
                  <Text style={styles.text}>
                    {car.manufacturer}
                    {"\n"}
                    {car.model}
                  </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: car.image }}
                  style={{ height: 250, width: 400, flex: 1 }}
                />
                <Text>
                  {"\n"}This {car.year} {car.maker} {car.model} comes with a
                  milage of {car.milage}.
                </Text>
                <Text style={styles.textlist}>
                  {"\n"}Color: {car.color}
                </Text>
                <Text style={styles.textlist}>Gear: {car.gear}</Text>
                <Text style={styles.textlist}>Seats: {car.seats}</Text>
                <Text style={styles.textlist}>
                  Price: KD {car.price + "\n"}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon name="star" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
              <Right>
                <Button
                  full
                  danger
                  onPress={() => cartStore.addItemToCart(this.state)}
                >
                  <Text>Add To Cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CarDetail.navigationOptions = ({ navigation }) => ({
  // title: navigation.getParam("shop", {})
  title: "Car Detail Page",
  headerRight: <CartButton />
});

export default observer(CarDetail);
