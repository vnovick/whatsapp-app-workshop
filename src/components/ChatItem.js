import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ChatItem = ({ item }) => {
  const imageUrl = { uri: item.avatar };
  return (
    <View style={styles.chatItem}>
      <View style={styles.avatarContainer}>
        <Image 
          resizeMethod="scale"
          style={styles.avatar} 
          source={imageUrl} 
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.label}>Description</Text>
      </View>
      <View style={styles.navLabel}>
        <Text style={styles.label}>Yesterday</Text>
        <Icon style={styles.arrow} name="chevron-right" size={20} />
      </View>
    </View>
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