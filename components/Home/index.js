import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Title,
  Body,
  Container,
  Card,
  CardItem,
  Content,
  Header
} from "native-base";

// Store
import authStore from "../../stores/authStore";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Sign Up"
  });
  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.replace("Profile");
    return (
      <Container>
        {/* <Header>Welcome to the Cool Carz App</Header> */}
        <Header />
        <Content>
          <Card>
            <Title>THIS IS A LANDING PAGE</Title>
            <CardItem>
              <Text>THIS IS A LANDING PAGE</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default observer(Home);
