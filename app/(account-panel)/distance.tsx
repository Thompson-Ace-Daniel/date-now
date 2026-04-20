import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DistanceScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [distance, setDistance] = useState(50);

  return (
    <CleanView>
      <View className="px-5 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-start justify-center"
        >
          <ChevronLeft color={colors.icon} size={32} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-8 pt-5">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black tracking-tighter mb-2"
        >
          Distance preference
        </Text>

        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.tint }}
          className="text-2xl font-bold mb-10"
        >
          {Math.round(distance)} Mi
        </Text>

        <Slider
          minimumValue={1}
          maximumValue={100}
          value={distance}
          onValueChange={(val) => setDistance(val)}
          minimumTrackTintColor={colors.tint}
          maximumTrackTintColor={colors.border}
          thumbTintColor={colors.tint}
        />

        <Text
          style={{ color: colors.icon }}
          className="mt-6 text-sm font-medium opacity-80"
        >
          You can change these preferences later in your settings.
        </Text>

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("./personalization")}
            style={{ backgroundColor: colors.tint }}
            className="py-4 rounded-full items-center shadow-md"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-lg"
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
