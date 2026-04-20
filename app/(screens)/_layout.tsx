import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="planner" />
      <Stack.Screen name="map" />
      <Stack.Screen name="chatEvent" />
      <Stack.Screen name="match" />
      <Stack.Screen name="confirmed" />
      <Stack.Screen name="setup-date" />
      <Stack.Screen name="proposal-request" />
      <Stack.Screen name="meetup-confirmed" />
    </Stack>
  );
}
