import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack>
      <Stack.Screen name="setting" options={{ headerShown: false }}/>
      <Stack.Screen name="about" options={{ headerShown: false }} />
    </Stack>
  );
}
