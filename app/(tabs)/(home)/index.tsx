import { View, Text, TextInput,Button } from "react-native";
import React, { useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { useCounter } from "@/providers/countContext";

export default function HomeScreen() {
  const [text, setText] = useState(""); 
  const {count, increase, decrease} = useCounter();

  const saveToSecureStore = async () => {
    await SecureStore.setItemAsync('name',text)
  }
  const deleteFromSecureStore = async () => {
    await SecureStore.deleteItemAsync('name')
  }

  return (
    <View>
      <Text style={{ fontSize: 32, marginBottom: 10 }}>Hello {text}</Text>
      <TextInput
        style={{ fontSize: 32, height: 40 }}
        placeholder="Type Here..."
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Button title="Save to secure store" onPress={saveToSecureStore} />
      <Button title="Delete name from secure store" onPress={deleteFromSecureStore} />
      <Text style={{ fontSize: 32, marginTop: 10}}>Count : {count}</Text>
      <Button title="Increase + " onPress={increase} />
      <Button title="Decrease + " onPress={decrease} />
    </View>
  );
}
