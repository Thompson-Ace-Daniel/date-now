import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { CheckCircle2 } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function VerifiedSuccessScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 items-center justify-center">
        {/* Success Icon and Background Glow */}
        <View
          style={{ backgroundColor: `${colors.tint}15` }} // 15% opacity tint
          className="w-48 h-48 rounded-full items-center justify-center mb-10"
        >
          <View
            style={{ backgroundColor: colors.tint }}
            className="w-32 h-32 rounded-full items-center justify-center shadow-xl shadow-orange-500/50"
          >
            <CheckCircle2 color="white" size={64} strokeWidth={2.5} />
          </View>
        </View>

        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black text-center tracking-tighter mb-4"
        >
          You&apos;re verified!
        </Text>

        <Text
          style={{ color: colors.icon }}
          className="text-center text-lg font-medium leading-6 opacity-80 px-6"
        >
          Your account is all set. Get ready to find some amazing matches.
        </Text>

        <View className="w-full mt-16">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.replace("../(tabs)")}
            style={{ backgroundColor: colors.tint }}
            className="py-5 rounded-full items-center shadow-lg"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-xl"
            >
              Start Dating
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
