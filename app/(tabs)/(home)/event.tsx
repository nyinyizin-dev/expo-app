import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Event() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Event",
          headerStyle: { backgroundColor: "teal" },
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => <Button title="Icon" />,
        }}
      />
      <Text>Eevent Screen</Text>
    </View>
  );
}
