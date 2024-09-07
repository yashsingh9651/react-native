import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.card2]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.card3]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:4,
    padding:4
  },card:{
    width: 100,
    height: 100,
    borderRadius: 4,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },card1:{
    backgroundColor: 'red',
  },card2:{
    backgroundColor: 'blue',
  },card3:{
    backgroundColor: 'green',
  }
})