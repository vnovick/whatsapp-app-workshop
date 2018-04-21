import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View
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
      <View style={styles.container}>
        { this.renderScreen() }
        <View>
          <Button title="Switch Screen" onPress={() => {
              this.setState({
                isChatsScreen: !this.state.isChatsScreen
              })
            }} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});
