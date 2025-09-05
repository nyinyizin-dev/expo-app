import { View, Text, TextInput,Button } from "react-native";
import React, { useState } from "react";
import { useCounter } from "@/providers/countContext";

export default function HomeScreen() {
  const [text, setText] = useState("");
  
 const {count, increase, decrease} = useCounter();

  return (
    <View>
      <Text style={{ fontSize: 32, marginBottom: 10 }}>Hello {text}</Text>
      <TextInput
        style={{ fontSize: 32, height: 40 }}
        placeholder="Type Here..."
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={{ fontSize: 32, marginTop: 10}}>Count : {count}</Text>
      <Button title="Increase + " onPress={increase} />
      <Button title="Decrease + " onPress={decrease} />
    </View>
  );
}
