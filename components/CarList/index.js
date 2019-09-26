import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Content } from "native-base";
import styles from "./styles";
import CarItem from "./CarItem";
import carStore from "../../stores/carStore";
import CartButton from "../Buttons/CartButton";
import LogoutButton from "../Buttons/LogoutButton";

class CarList extends Component {
  state = {
    items: null
  };
  componentWillMount = () => {
    this.setState({ items: carStore.cars });
  };
  static navigationOptions = ({ navigation }) => ({
    title: "Car List",
    headerLeft: null,
    headerRight: <CartButton />,
    headerLeft: <LogoutButton />
  });
  render() {
    let carList = this.state.items.map(item => (
      <CarItem item={item} key={item.id} />
    ));
    return (
      <Content>
        <List style={styles.textlist}>{carList}</List>
      </Content>
    );
  }
}

export default observer(CarList);
