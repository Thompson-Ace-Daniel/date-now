import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router, useLocalSearchParams } from "expo-router";
import { CalendarCheck2, MapPin, Sparkles, X } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ConfirmedDateScreen() {
  const { datePartner, dateTime, dateLocation } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="px-5 py-3 items-end">
        <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
          <X color={colors.icon} size={28} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-8 pt-5 items-center justify-center -mt-16">
        <View
          style={{ backgroundColor: `${colors.tint}15` }}
          className="w-44 h-44 rounded-full items-center justify-center mb-12 shadow-inner"
        >
          <View
            style={{ backgroundColor: colors.tint }}
            className="w-32 h-32 rounded-full items-center justify-center shadow-2xl shadow-orange-500/50"
          >
            <CalendarCheck2 color="white" size={60} strokeWidth={2} />
          </View>
        </View>

        <View className="flex-row gap-x-2 mb-6">
          <Sparkles color={colors.tint} size={28} />
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.text }}
            className="text-4xl font-black text-center tracking-tighter"
          >
            It&apos;s a Date!
          </Text>
        </View>

        <Text
          style={{ color: colors.icon }}
          className="text-center text-lg font-medium leading-7 opacity-80 px-4 mb-16"
        >
          Your meeting with{" "}
          <Text className="font-bold text-orange-500">
            {datePartner || "Sophia"}
          </Text>{" "}
          is confirmed. We&apos;re excited for you!
        </Text>

        <View
          style={{
            borderColor: colors.border,
            backgroundColor: `${colors.background}`,
          }}
          className="w-full border-2 rounded-3xl p-6 gap-y-4 mb-20 shadow-md"
        >
          <View className="flex-row items-center">
            <CalendarCheck2
              color={colors.icon}
              size={20}
              className="mr-3 opacity-60"
            />
            <View className={"ml-3 items-center"}>
              <Text
                style={{ color: colors.text }}
                className="text-base font-semibold"
              >
                {dateTime || "Friday, Oct 27 @ 7:30 PM"}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <MapPin color={colors.icon} size={20} className="mr-3 opacity-60" />
            <View className={"ml-3 items-center"}>
              <Text
                style={{ color: colors.text }}
                className="text-base font-semibold"
              >
                {dateLocation || "The Daily Grind Coffee Shop"}
              </Text>
            </View>
          </View>
        </View>

        <View className="w-full">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.replace("./planner")}
            style={{ backgroundColor: colors.tint }}
            className="py-5 rounded-full items-center shadow-lg"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-xl"
            >
              Add to Calendar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
