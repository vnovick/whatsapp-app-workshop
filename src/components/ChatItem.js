import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from './Avatar';

export const ChatItem = ({ navigate, item: { 
  id, avatar, title, description, date
}}) => {
  const imageUrl = { uri: avatar };
  return (
    <TouchableOpacity 
      style={styles.chatItem}  
      onPress={() => navigate('chatView', { id, title })}
    >
      <Avatar src={imageUrl}/>
      <View style={styles.content}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.label}>{ description }</Text>
      </View>
      <View style={styles.navLabel}>
        <Text style={styles.label}>{ date }</Text>
        <Icon style={styles.arrow} name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  chatItem: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 24
  },
  avatarContainer: {
    justifyContent: 'center',
    flex: 2
  },
  avatar: {
    resizeMode: 'stretch',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  content: {
    flex: 5
  },
  navLabel: {
    flex: 2,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold'
  },
  label: {
    color: "rgba(0,0,0,.5)"
  },
  arrow: {
   color: 'rgba(0,0,0,.5)' 
  }
})