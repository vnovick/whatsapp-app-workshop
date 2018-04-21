import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';

const AnimatedOpacityWrapper = createAnimatableComponent(TouchableOpacity)

export class ChatItem extends React.Component {
  
  animatedValue = new Animated.Value(0);

  componentDidMount(){
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 300,
      }
    ).start()
  }

  render() {
    const { navigate, item: { 
      id, avatar, title, description, date
    }} = this.props;
    const imageUrl = { uri: avatar };
    return (
      <AnimatedOpacityWrapper 
        style={[styles.chatItem, { 
          opacity: this.animatedValue,
          transform: [{ 
            translateX: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 0]
            })
          }] 
        }]}  
        onPress={() => navigate('chatView', { id, title })}
      >
        <View style={styles.avatarContainer} >
          <Image 
            resizeMethod="scale"
            style={styles.avatar} 
            source={imageUrl} 
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{ title }</Text>
          <Text style={styles.label}>{ description }</Text>
        </View>
        <View style={styles.navLabel}>
          <Text style={styles.label}>{ date }</Text>
          <Icon style={styles.arrow} name="chevron-right" size={20} />
        </View>
      </AnimatedOpacityWrapper>
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