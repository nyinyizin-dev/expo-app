import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Setting() {
  return (
    <View>
      <Text>Setting Page</Text>
      <Link href='/about'>Go to About</Link>
      <Link href='/'>Go to Home Screen</Link>
    </View>
  )
}