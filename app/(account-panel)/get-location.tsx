import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { Locate, X } from "lucide-react-native";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function LocationLoadingScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CleanView>
      <View className="px-5 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
        >
          <X color={colors.icon} size={28} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center -mt-20">
        <View
          style={{ backgroundColor: colors.tint }}
          className="w-32 h-32 rounded-[35px] items-center justify-center shadow-lg"
        >
          <Locate color="white" size={60} strokeWidth={2} />
        </View>

        <View className="mt-16 items-center">
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.text }}
            className="text-3xl font-black tracking-tighter"
          >
            Searching...
          </Text>
          <Text
            style={{ color: colors.icon }}
            className="mt-3 text-base font-medium opacity-70 text-center px-10"
          >
            Adjusting the radar to find the perfect matches for you
          </Text>
        </View>
      </View>
    </CleanView>
  );
}
