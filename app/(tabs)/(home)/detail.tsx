import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();
 const router = useRouter()

  return (
    <View>
      <Text>Detail page - {id}</Text>
      <Link href='/event'>Navigate Event</Link>
      <Link href='/event' replace>Replace Event</Link>
      <Button title="Navigate Event" onPress={()=> router.navigate('/event')} />
      <Button title="Replace Home" onPress={()=> router.replace('/')} />
    </View>
  );
}
