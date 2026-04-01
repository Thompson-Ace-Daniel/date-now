// app/_layout.tsx
import "../global.css"; 
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This ensures the (tabs) group is handled as the main entry */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
    </Stack>
  );
}