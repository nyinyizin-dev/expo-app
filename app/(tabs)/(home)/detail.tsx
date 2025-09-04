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
      <Link href='/detail?id=another007' push>Push Another Detail</Link>
      <Button title="Navigate Event" onPress={()=> router.navigate('/event')} />
      <Button title="Replace Home" onPress={()=> router.replace('/')} />
      <Button title="Push another Detail" onPress={()=> router.push({pathname:'/detail',params: {id:'another009'}})} />
      <Button title="Still Detail with Route" onPress={() => router.navigate({pathname: '/detail', params: {id: 'change-params'}})} />
      <Button title="Still Detail with setParams" onPress={() => router.setParams({id: 'change-value'})} />
    </View>
  );
}
