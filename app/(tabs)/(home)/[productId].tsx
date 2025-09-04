import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Product() {
  const { productId } = useLocalSearchParams();
  return (
    <View>
      <Text>User - {productId}</Text>
    </View>
  );
}
