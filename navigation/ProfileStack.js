import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";

const ProfileStack = createStackNavigator(
  {
    // Welcome: WelcomeScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      title: "User Profile Page"
    }
  }
);

export default ProfileStack;
