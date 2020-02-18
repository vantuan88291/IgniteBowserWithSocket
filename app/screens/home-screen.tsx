import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { useStores } from "../models/root-store"
import { color } from "../theme"

import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation"
import { emitSocket, listenSocket } from "../utils/socket-service"

export interface HomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = observer((props) => {
  const { home } = useStores()
  React.useEffect(() => {
    listenSocket("allData", home.setDataChat)
  }, [])
  const getSMS = () => {
    home.getAllMessage()
  }
  const navigateTest = () => props.navigation.navigate('chatScreen')
  return (
    <Screen style={ROOT} preset="fixed">
      <Button onPress={getSMS} text={'get message'} />
      <Button onPress={navigateTest} text={'navigate '} />
      {home.getData.map(item => (
        <Text text={item.name} />
      ))}
    </Screen>
  )
})
