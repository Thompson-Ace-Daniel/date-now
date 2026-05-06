import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AccountPanelLayout() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="distance" />
        <Stack.Screen name="dob" />
        <Stack.Screen name="gender" />
        <Stack.Screen name="get-location" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="personalization" />
        <Stack.Screen name="setup-loc" />
        <Stack.Screen name="verify-email" />
        <Stack.Screen name="confirm-email" />
        <Stack.Screen name="verified-success" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="welcome2" />
        <Stack.Screen name="welcome3" />
      </Stack>
    </>
  );
}
