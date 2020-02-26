import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import {Button, Screen, Text} from "../components"
import { color } from "../theme"
import {NavigationActions, NavigationScreenProps} from "react-navigation"
import { useStores } from "../models/root-store"

export interface ChatScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const ChatScreen: React.FunctionComponent<ChatScreenProps> = observer((props) => {
  const { home, navigationStore } = useStores()
  const back = () => {
    navigationStore.dispatch(NavigationActions.back())
  }
  return (
    <Screen style={ROOT} preset="fixed">
      {home.getData.map((item, index) => (
        <Text key={index} text={item.message} />
      ))}
      <Button onPress={back} text={'get back'} />
    </Screen>
  )
})
