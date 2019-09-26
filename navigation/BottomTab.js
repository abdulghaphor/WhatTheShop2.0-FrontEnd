import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import ProfileStack from "./ProfileStack";
import CarStack from "./CarStack";
import CarDetail from "../components/CarDetail";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,
    CarTab: CarStack
    // DetailTab: CarDetail
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName, iconType;
        if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName === "CarTab") {
          iconName = "menu";
        }
        // } else if (routeName === "DetailTab") {
        //   iconName = "smiley";
        // }

        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
