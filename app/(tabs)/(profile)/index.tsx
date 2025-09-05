import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useCounter } from "@/providers/countContext";

export default function Profile() {
  const { count, increase, decrease } = useCounter();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Link href="/settings/David">Go to Share Setting</Link>
      <Link href={"/detail"}>Go to Home Detail</Link>
      <Link href={"/"}>Go to Home </Link>
      <Text style={{ fontSize: 32, marginTop: 10 }}>Count : {count}</Text>
      <Button title="Increase + " onPress={increase} />
      <Button title="Decrease + " onPress={decrease} />
    </View>
  );
}
