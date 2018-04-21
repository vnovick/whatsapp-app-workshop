import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getChats } from '../services/api';

export class ChatsScreen extends Component {

  state = {
    chats: []
  }

  componentDidMount() {
    getChats().then((chats) => {
      this.setState({
        chats
      })
    });
  }

  getChatItem(item){
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <ImageBackground source={require('../assets/imgs/background.png')} style={styles.container}>
        <FlatList
          style={styles.container}
          data={this.state.chats}
          renderItem={({ item }) => this.getChatItem(item)}
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
  }
})