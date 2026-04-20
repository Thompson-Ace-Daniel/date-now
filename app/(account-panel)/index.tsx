import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const loc = "./(account-panel)/login";

  return (
    <CleanView>
      <View className="flex-1 items-center justify-center px-10">
        <Text
          style={{ color: colors.text, fontFamily: Fonts.rounded }}
          className="text-2xl font-black mb-8 tracking-tighter"
        >
          Welcome to Date Now
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push(loc)}
          style={{ backgroundColor: colors.tint }}
          className="w-full py-4 rounded-full items-center shadow-lg"
        >
          <Text
            style={{ fontFamily: Fonts.rounded }}
            className="text-white font-black text-lg tracking-tight"
          >
            GET STARTED
          </Text>
        </TouchableOpacity>

        <Text
          style={{ color: colors.icon }}
          className="mt-4 text-xs opacity-50"
        >
          Build ID: 1234sjfvjijviov
        </Text>
      </View>
    </CleanView>
  );
}
