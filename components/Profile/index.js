import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Card, CardItem, Text, Button, Header, Spinner } from "native-base";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import cartStore from "../../stores/cartStore";

class Profile extends Component {
  componentWillMount = () => {
    if (authStore.user) {
      profileStore.fetchProfile();
      cartStore.updateCart();
    }
  };
  render() {
    if (!authStore.user) this.props.navigation.replace("Signup");
    if (profileStore.loading) return <Spinner />;
    return (
      <Card>
        <CardItem>
          <Text>
            Welcome {profileStore.profile.first_name}!{"\n"}
          </Text>
        </CardItem>
        <CardItem>
          <Button
            danger
            onPress={() => authStore.logout(this.props.navigation)}
          >
            <Text>Logout</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}
export default observer(Profile);
