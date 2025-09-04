import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";

export default function Setting() {
  const { username } = useLocalSearchParams();
//   const navigation = useNavigation();

//   useEffect(() => {
//     navigation.setOptions({
//       title: username as string,
//     });
//   }, [navigation]);

    const router = useRouter()

  return (
    <View>
      <Stack.Screen options={{title: username as string }} />
      <Text>User - {username}</Text>
      <Button title="Update title" onPress={() => router.setParams({username: 'Updated name'})}/>
    </View>
  );
}
