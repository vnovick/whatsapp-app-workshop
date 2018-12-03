import React, { Component } from 'react'
import { 
  Text, View, ImageBackground, FlatList, StyleSheet, KeyboardAvoidingView, Platform, LayoutAnimation
} from 'react-native'
import { getMessagesById, postMessage } from '../services/api';
import Compose from '../components/Compose'
import Message from '../components/Message'
import Icon from 'react-native-vector-icons/MaterialIcons';

export class ChatViewScreen extends Component {
    
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
      headerLeft: (<Icon name="chevron-left" size={40} color="#ffffff" onPress={() => navigation.goBack() } />)
    }
  }

  // componentWillUpdate() {
  //   LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  // }

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


  keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0

  render() {
    return (
      <ImageBackground 
        source={require('../assets/imgs/background.png')}
        style={styles.container}
      >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={this.keyboardVerticalOffset}
        style={styles.container}>
          <FlatList
                style={styles.container}
                data={this.state.messages}
                renderItem={Message}
                keyExtractor={(item, index) => (`message-${index}`)}
          />
          <Compose submit={postMessage} />
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})