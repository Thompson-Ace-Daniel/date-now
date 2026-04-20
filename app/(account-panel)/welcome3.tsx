import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router, useLocalSearchParams } from "expo-router";
import { X } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function WelcomeSuccessScreen() {
  const { userName } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 items-center justify-center px-8">
        <View
          style={{
            borderColor: colors.border,
            backgroundColor: colors.background,
          }}
          className="w-full border-2 rounded-[40px] p-8 shadow-2xl"
        >
          <TouchableOpacity
            onPress={() => router.push("./(account-panel)/birthmonth")}
            className="absolute right-6 top-6"
          >
            <X color={colors.icon} size={24} />
          </TouchableOpacity>

          <Text className="text-6xl text-center mb-6 mt-4">👋</Text>

          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.text }}
            className="text-3xl font-black text-center tracking-tighter mb-4"
          >
            Welcome, {userName}!
          </Text>

          <Text
            style={{ color: colors.icon }}
            className="text-center text-base font-medium leading-6 mb-8 opacity-80"
          >
            There&apos;s a lot out there to discover, but let&apos;s get your
            profile set up first.
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("./dob")}
            style={{ backgroundColor: colors.tint }}
            className="py-4 rounded-full items-center shadow-lg mb-4"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-lg"
            >
              Let&apos;s go
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} className="py-2">
            <Text
              style={{ color: colors.icon, fontFamily: Fonts.rounded }}
              className="text-center font-bold opacity-60"
            >
              Edit name
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
