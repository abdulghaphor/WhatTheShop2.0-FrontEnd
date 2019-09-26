import React, { Component } from "react";
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
import styles from "./styles";
import { withNavigation } from "react-navigation";
import cartStore from "../../stores/cartStore";

class CarItem extends Component {
  handlePress = item => {
    this.props.navigation.navigate("CarDetail", {
      item: item
    });
  };

  render() {
    const item = this.props.item;
    return (
      <ListItem
        button
        onPress={() => this.handlePress(item)}
        style={styles.listitem}
      >
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: item.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.textlist}>{item.manufacturer}</Text>
              <Text note style={styles.textlist}>
                {item.model}
              </Text>
              <Text style={styles.textlist}>{item.color}</Text>
              <Text style={styles.textlist}>{item.year}</Text>
            </Left>
            <Right></Right>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

export default withNavigation(CarItem);
