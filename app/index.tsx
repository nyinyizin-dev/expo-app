import {  Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/about">Go to About</Link>
    </View>
  );
}


