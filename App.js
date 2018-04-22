import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import { ChatsScreen, ChatViewScreen } from './src/screens'
import { initApi } from './src/services/api';


const RootNavigator = StackNavigator({
  chatsScreen: { screen: ChatsScreen },
  chatView: { screen: ChatViewScreen }
}, {
  mode: "card",
  initialRouteName: 'chatsScreen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#006655',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default class App extends React.Component {

  componentDidMount() {
    initApi()
  }
  
  render(){
    return (
      <View style={styles.app}>
        <StatusBar 
          backgroundColor="#006655" 
          barStyle="light-content" 
        /> 
        <RootNavigator/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  }
})