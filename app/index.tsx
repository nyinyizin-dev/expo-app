import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 33}}>Home Screen</Text>
      <Link href={'/login'}>Go to Login</Link>
    </View>
  );
}
