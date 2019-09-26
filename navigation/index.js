import { createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStack";
import BottomTab from "./BottomTab";

const AppContainer = createAppContainer(BottomTab);
export default AppContainer;
