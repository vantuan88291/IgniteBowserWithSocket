import { createStackNavigator } from "react-navigation-stack"
import { PrimaryNavigator } from "./primary-navigator"
import {
  HomeScreen,
  ChatScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    chatScreen: { screen: ChatScreen },
    homeScreen: { screen: HomeScreen },
    primaryStack: { screen: PrimaryNavigator },
  },
  {
    initialRouteName: 'homeScreen',
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
