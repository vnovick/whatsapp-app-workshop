import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { Avatar } from './Avatar';

export class ChatItem extends React.Component {
  
  state = {
    animatedValue: new Animated.Value(0)
  }

  componentDidMount(){
    Animated.timing(
      this.state.animatedValue,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }
    ).start()
  }

  render() {
    const { navigate, item: { 
      id, avatar, title, description, date
    }} = this.props;
    const imageUrl = { uri: avatar };
    return (
      <Animated.View 
        style={{ 
          opacity: this.state.animatedValue,
          transform: [{ 
            translateX: this.state.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 0]
            })
          }] 
        }}  
      >
      <TouchableOpacity onPress={() => navigate('chatView', { id, title })} 
        style={styles.chatItem}>
        <Avatar src={imageUrl} />
        <View style={styles.content}>
          <Text style={styles.title}>{ title }</Text>
          <Text style={styles.label}>{ description }</Text>
        </View>
        <View style={styles.navLabel}>
          <Text style={styles.label}>{ date }</Text>
          <Icon style={styles.arrow} name="chevron-right" size={20} />
        </View>
        </TouchableOpacity>
      </Animated.View>
    )
  }
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