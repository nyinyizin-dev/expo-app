import { Stack } from "expo-router";

export default function RootLayout() {
  const isLoggedIn = true;

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ title: "Login" }} />
      </Stack.Protected>
    </Stack>
  );
}
