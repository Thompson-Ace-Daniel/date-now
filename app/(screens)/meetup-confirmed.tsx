import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ArrowRight, CalendarDays, Heart } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function MeetupConfirmedScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 items-center justify-center">
        <View
          style={{ backgroundColor: `${colors.tint}20` }}
          className="p-8 rounded-full mb-8"
        >
          <Heart color={colors.tint} size={80} fill={colors.tint} />
        </View>

        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black text-center mb-4"
        >
          It&apos;s a date!
        </Text>
        <Text
          style={{ color: colors.icon }}
          className="text-center text-lg px-6 mb-12"
        >
          Sophia has been notified that you accepted. Get ready for a great
          time.
        </Text>

        <TouchableOpacity
          onPress={() => router.replace("./map")}
          style={{ backgroundColor: colors.background }}
          className="w-full p-5 rounded-2xl flex-row items-center justify-between border-2 border-slate-100"
        >
          <View className="flex-row items-center">
            <CalendarDays color={colors.tint} size={24} className="mr-4" />
            <Text className="font-bold text-lg">View Date Map</Text>
          </View>
          <ArrowRight color={colors.icon} size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.replace("/(tabs)/chat")}
          className="mt-8"
        >
          <Text className="text-slate-400 font-bold underline">
            Back to messages
          </Text>
        </TouchableOpacity>
      </View>
    </CleanView>
  );
}
