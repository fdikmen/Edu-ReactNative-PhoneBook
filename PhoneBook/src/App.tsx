import { Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import User from './componets/User'

type Props = {}

const App = (props: Props) => {
  return (
    <SafeAreaView>
      <Text style={mystyles.headerText}
      >Phone Book App</Text>
      <User />
    </SafeAreaView>
  )
}
const mystyles = StyleSheet.create({
  headerText: { fontSize: 30, fontWeight: 'bold', textAlign: 'center' }
})
export default App