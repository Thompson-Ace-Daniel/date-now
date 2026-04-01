import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="planner" />
      <Stack.Screen name="map" />
      <Stack.Screen name="chat" />
    </Stack>
  );
}