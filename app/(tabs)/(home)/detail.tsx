import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Detail page - {id}</Text>
    </View>
  );
}
