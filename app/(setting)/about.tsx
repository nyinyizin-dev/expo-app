import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function About() {
  return (
    <View>
      <Text>About page</Text>
       <Link href="/">Go to Home Screen</Link>
       <Link href="/">Go to Setting Screen</Link>
    </View>
  )
}