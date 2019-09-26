import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.replace("Profile");
    return (
      <Form>
        <Item>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full onPress={() => authStore.login(this.state, navigation)}>
          <Text>Login</Text>
        </Button>
        <Text>Click here to signup </Text>
        <Button
          success
          full
          onPress={() => this.props.navigation.replace("Signup")}
        >
          <Text>Signup</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
