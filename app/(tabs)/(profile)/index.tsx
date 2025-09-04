import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Link href="/settings/David">Go to Share Setting</Link>
      <Link href={"/detail"}>Go to Home Detail</Link>
      <Link href={"/"}>Go to Home </Link>
    </View>
  );
}
