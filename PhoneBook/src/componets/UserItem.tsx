import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    user:any
}

const UserItem = (props: Props) => {
  return (
    <View style={mystyles.container}>
      <Image style={mystyles.avatar} source={{ uri: props.user.avatar }} />
      <View>
        <Text style={mystyles.name}>{props.user.name}</Text>
        <Text>{props.user.phone}</Text>
    </View>
    </View>
  )
}

export default UserItem

const mystyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'#F5F5F5',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
})