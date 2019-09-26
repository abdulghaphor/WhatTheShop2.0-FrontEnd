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
  render() {
    const item = this.props.navigation.getParam("item");
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: item.image }} />
                <Body>
                  <Text style={styles.text}>
                    {item.manufacturer}
                    {"\n"}
                    {item.model}
                  </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 250, width: 400, flex: 1 }}
                />
                <Text>
                  {"\n"}This {item.year} {item.manufacturer} {item.model} comes
                  with a milage of {item.milage}.
                </Text>
                <Text style={styles.textlist}>
                  {"\n"}Color: {item.color}
                </Text>
                <Text style={styles.textlist}>Gear: {item.gear}</Text>
                <Text style={styles.textlist}>
                  Price: KD {item.price + "\n"}
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
                  onPress={() => cartStore.addItemToCart(item)}
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
