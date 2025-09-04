import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Link href="/settings/David">Go to Share Setting</Link>
      <Link href="/detail?id=normal-5">Go to Home detail</Link>
      <Button title="Go to Detail" onPress={() => router.navigate({pathname: '/detail', params: {id: 'Button-7'}})} />
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
