import React, { Component } from 'react'
import { Text, View, ImageBackground, FlatList, StyleSheet } from 'react-native'
import { getMessagesById } from '../services/api';

export class ChatViewScreen extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    getMessagesById().then((messages) => {
      this.setState({
        messages
      })
    });
  }

  getMessageItem(item){
    return (
      <View style={[
        styles.message, item.incoming ?
            styles.incomingMessage :
            styles.outgoingMessage
      ]}>
          <Text>{item.message}</Text>
      </View>
    )
  }


  render() {
    return (
      <ImageBackground 
        source={require('../assets/imgs/background.png')} 
        style={styles.container}
      >
        <FlatList
          style={styles.container}
          data={this.state.messages}
          renderItem={({ item }) => this.getMessageItem(item)}
          keyExtractor={(item, index) => (`message-${index}`)}
        />
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
    borderRadius: 10
  },
  incomingMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF'
  } 
})