import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ChatsScreen, ChatViewScreen } from './src/screens'

const AppNavigator = createStackNavigator({
  chatsScreen: {
    screen: ChatsScreen
  },
  chatView: { 
    screen: ChatViewScreen 
  }
},{
  initialRouteName: 'chatsScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#006655',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

const RootNavigator = createAppContainer(AppNavigator);


export default class App extends React.Component {
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