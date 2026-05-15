import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { MapPin } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function LocationScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 items-center justify-center">
        <View
          style={{ backgroundColor: colors.border }}
          className="w-40 h-40 rounded-full items-center justify-center mb-10"
        >
          <MapPin color={colors.text} size={80} strokeWidth={1.5} />
        </View>

        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-3xl font-black text-center tracking-tighter mb-4"
        >
          So, are you from around here?
        </Text>

        <Text
          style={{ color: colors.text }}
          className="text-center text-md font-medium leading-6 mb-12 opacity-80 px-4"
        >
          Set your device location to see who&apos;s in your neighborhood or
          beyond. You won&apos;t be able to match with people otherwise.
        </Text>

        <View className="w-full gap-y-6">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.replace("./get-location")}
            style={{ backgroundColor: colors.tint }}
            className="py-5 rounded-full items-center shadow-lg"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-lg"
            >
              Allow Location
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{ color: colors.text, fontFamily: Fonts.rounded }}
              className="text-center font-bold opacity-60 underline"
            >
              How is my location used?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
