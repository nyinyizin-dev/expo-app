import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Link href="/20">Go to ProductId Screen</Link>
      <Link href="/settings/David">Go to Settings User</Link>
      <Link href="/detail?id=5">Go to Home detail</Link>
      <Button title="Go to Detail" onPress={() => router.navigate({pathname: '/detail', params: {id: 7}})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
