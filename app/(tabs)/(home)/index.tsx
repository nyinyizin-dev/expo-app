import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <View>
      <Text style={{ fontSize: 32, marginBottom: 10 }}>Hello {text}</Text>
      <TextInput
        style={{ fontSize: 32, height: 40 }}
        placeholder="Type Here..."
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </View>
  );
}
