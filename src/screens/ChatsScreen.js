import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getChats } from '../services/api';
import { ChatItem } from '../components/ChatItem';

export class ChatsScreen extends Component {

  static navigationOptions = {
    title: 'Chats'
  };

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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.chats}
          renderItem={({ item }) => (
            <ChatItem item={item} navigate={this.props.navigation.navigate} />)}
          keyExtractor={(item, index) => (`message-${index}`)}
          ItemSeparatorComponent={() => (
            <View style={styles.separator}/>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0, .1)"
  }
})