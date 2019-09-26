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
    item: null
  };
  componentWillMount = () => {
    this.setState({ item: this.props.navigation.getParam("item") });
  };

  handleAdd = () => {
    cartStore.addItemToCart(this.state.item);
  };

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: this.state.item.image }} />
                <Body>
                  <Text style={styles.text}>
                    {this.state.item.manufacturer}
                    {"\n"}
                    {this.state.item.model}
                  </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: this.state.item.image }}
                  style={{ height: 250, width: 400, flex: 1 }}
                />
                <Text>
                  {"\n"}This {this.state.item.year} {this.state.item.maker}{" "}
                  {this.state.item.model} comes with a milage of{" "}
                  {this.state.item.milage}.
                </Text>
                <Text style={styles.textlist}>
                  {"\n"}Color: {this.state.item.color}
                </Text>
                <Text style={styles.textlist}>
                  Gear: {this.state.item.gear}
                </Text>
                <Text style={styles.textlist}>
                  Price: KD {this.state.item.price + "\n"}
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
                  onPress={() => cartStore.addItemToCart(this.state.item)}
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
