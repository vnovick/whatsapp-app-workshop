import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView
} from 'react-native';

import { ChatsScreen, ChatViewScreen } from './src/screens'


export default class App extends Component {

  state = {
    isChatsScreen: true
  }

  renderScreen() {
    return this.state.isChatsScreen ? <ChatsScreen /> : <ChatViewScreen />
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        { this.renderScreen() }
        <View>
          <Button title="Switch Screen" onPress={() => {
              this.setState({
                isChatsScreen: !this.state.isChatsScreen
              })
            }} 
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width: '80%'
  },
  instructions: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  workshopInstructions: {
    alignItems: 'flex-start'
  }
});