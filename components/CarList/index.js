import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import cars from "./data";

// Style
import styles from "./styles";

// Component
import CarItem from "./CarItem";
import carStore from "../../stores/carStore";

import CartButton from "../Buttons/CartButton";
import LogoutButton from "../Buttons/LogoutButton";

class CarList extends Component {
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
  static navigationOptions = ({ navigation }) => ({
    title: "Car List",
    headerLeft: null,
    headerRight: <CartButton />,
    headerLeft: <LogoutButton />
  });
  render() {
    // const cars = carStore.cars;
    console.log(cars);
    let carList = carStore.cars.map(car => <CarItem car={car} key={car.id} />);
    return (
      <Content>
        <List style={styles.textlist}>{carList}</List>
      </Content>
    );
  }
}

export default observer(CarList);
