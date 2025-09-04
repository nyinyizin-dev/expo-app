import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type StaffProps = { name: string; age?: number };

const Staff = ({ name, age }: StaffProps) => {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      <Text style={{ textDecorationLine: isDelete ? "line-through" : "none" }}>
        {name}
        {age ? " - " + age : ""}
      </Text>
      <Button
        title={isDelete ? "undo" : "delete"}
        onPress={() => setIsDelete(!isDelete)}
      />
    </>
  );
};
export default function HomeScreen() {
  const greeting = "Hello Mobile Developer";

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Link href="/detail">Go to detail</Link>
      <Link href="/profile/setting">Go to Profile Setting</Link>
      <Link href="/profile">Go to Profile</Link>
      <Staff name="koko" age={25} />
      <Staff name="nyi nyi" />
      <Staff name="ma ma" />
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
