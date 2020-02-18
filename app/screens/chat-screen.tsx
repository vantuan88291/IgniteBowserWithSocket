import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
// import { useStores } from "../models/root-store"
import { color } from "../theme"
import { NavigationScreenProps } from "react-navigation"
import { useStores } from "../models/root-store"

export interface ChatScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const ChatScreen: React.FunctionComponent<ChatScreenProps> = observer((props) => {
  const { home } = useStores()
  return (
    <Screen style={ROOT} preset="fixed">
      {home.getData.map(item => (
        <Text text={item.name} />
      ))}
    </Screen>
  )
})
