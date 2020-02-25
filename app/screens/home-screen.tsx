import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, FlatList } from "react-native"
import { Button, Screen, Text } from "../components"
import { useStores } from "../models/root-store"
import { color } from "../theme"

import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation"
import { disConnectSocket, listenSocket } from "../utils/socket-service"

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
    listenSocket("newmsg", home.getNewMessage)
  }, [])
  const getSMS = () => {
    home.getAllMessage()
  }
  const navigateTest = () => {
    disConnectSocket()
    props.navigation.navigate('chatScreen')
  }
  const renderItem = ({ item }) => {
    return (
      <Text text={item.message} />
    )
  }
  return (
    <Screen style={ROOT} preset="fixed">
      <Button onPress={getSMS} text={'get message'} />
      <Button onPress={navigateTest} text={'navigate '} />
      <FlatList
        extraData={home.getData.length}
        data={home.getData}
        keyExtractor={(item, index) => index + ''}
        renderItem={renderItem}/>
    </Screen>
  )
})
