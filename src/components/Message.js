import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { USER_ID } from '../services/api';

const Message = ({ item }) => {
const incoming = item.userId !== USER_ID
 return (
   <Animatable.View 
      duration={100}
      animation={incoming ? "slideInLeft" : "slideInRight" } style={[
        styles.message, incoming &&
        styles.incomingMessage
      ]}>
      <Text>{item.message}</Text>
    </Animatable.View>
 )
}

const styles = {
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
}

export default Message;