import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 33}}>Login Screen</Text>
         <Link href={'/'}>Go to Home</Link>
    </View>
  );
}
