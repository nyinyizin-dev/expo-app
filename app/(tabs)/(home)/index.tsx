import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCounter } from "@/providers/countContext";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const { count, increase, decrease } = useCounter();

  const saveToSecureStore = async () => {
    await SecureStore.setItemAsync("name", text);
  };
  const deleteFromSecureStore = async () => {
    await SecureStore.deleteItemAsync("name");
  };

  const saveToAsyncStore = async () => {
    try {
      await AsyncStorage.setItem("name", text);
    } catch (e) {
      console.log("AsyncStorage Error ", e);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Hello {text}</Text>
      <TextInput
        style={{ fontSize: 32, height: 40, borderBlockColor: 'gray', borderWidth: 1 }}
        placeholder="Type Here..."
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Button title="Save to Async store" onPress={saveToAsyncStore} />
      <Button title="Save to secure store" onPress={saveToSecureStore} />
      <Button
        title="Delete name from secure store"
        onPress={deleteFromSecureStore}
      />
      <Text style={{ fontSize: 30, marginTop: 10 }}>Count : {count}</Text>
      <Button title="Increase + " onPress={increase} />
      <Button title="Decrease + " onPress={decrease} />
    </View>
  );
}
