import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

const LoginButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => authStore.login(navigation)}>
      <Text>
        {"Login"}
        <Icon
          type="FontAwesome"
          name="superpowers"
          style={{ color: "white", fontSize: 15 }}
        />
      </Text>
    </Button>
  );
};

export default withNavigation(observer(LoginButton));
