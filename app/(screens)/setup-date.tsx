import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router, useLocalSearchParams } from "expo-router";
import { CalendarCheck2, MapPin, Check } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SetupDateScreen() {
  const { location, time } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 pt-10 items-center">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-3xl font-black mb-12"
        >
          Confirm details
        </Text>

        <View
          style={{ backgroundColor: colors.background }}
          className="w-full border-2 border-slate-100 rounded-3xl p-6 gap-y-6"
        >
          <View className="flex-row items-center">
            <View
              style={{ backgroundColor: `${colors.tint}15` }}
              className="p-3 rounded-xl mr-4"
            >
              <MapPin color={colors.tint} size={24} />
            </View>
            <View>
              <Text className="opacity-60 text-xs">LOCATION</Text>
              <Text className="text-lg font-bold">{location || "Not set"}</Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <View
              style={{ backgroundColor: `${colors.tint}15` }}
              className="p-3 rounded-xl mr-4"
            >
              <CalendarCheck2 color={colors.tint} size={24} />
            </View>
            <View>
              <Text className="opacity-60 text-xs">TIME</Text>
              <Text className="text-lg font-bold">{time || "Not set"}</Text>
            </View>
          </View>
        </View>

        <Text className="mt-8 text-center px-4 opacity-70">
          Your date proposal will be sent immediately. They will be notified via
          push notification.
        </Text>

        <View className="flex-1 w-full justify-end pb-10">
          <TouchableOpacity
            onPress={() => router.replace("./confirmed")}
            style={{ backgroundColor: colors.tint }}
            className="py-5 rounded-full flex-row justify-center items-center"
          >
            <Check color="white" size={24} className="mr-2" />
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-xl"
            >
              Confirm & Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
