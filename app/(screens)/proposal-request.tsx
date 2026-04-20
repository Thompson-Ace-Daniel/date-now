import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { CalendarCheck2, MapPin } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

export default function ReceivedProposalScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 pt-10 items-center">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-3xl font-black mb-8"
        >
          New Date Proposal
        </Text>

        <View className="items-center mb-10">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-xl font-bold">Sophia wants to meet!</Text>
        </View>

        <View
          style={{ backgroundColor: colors.background }}
          className="w-full border-2 border-slate-100 rounded-3xl p-6 gap-y-6 shadow-sm"
        >
          <View className="flex-row items-center">
            <MapPin color={colors.tint} size={24} className="mr-4" />
            <View>
              <Text className="opacity-60 text-xs font-bold uppercase">
                Location
              </Text>
              <Text className="text-lg font-semibold">
                The Daily Grind Coffee Shop
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <CalendarCheck2 color={colors.tint} size={24} className="mr-4" />
            <View>
              <Text className="opacity-60 text-xs font-bold uppercase">
                Time
              </Text>
              <Text className="text-lg font-semibold">
                Friday, Oct 27 @ 7:30 PM
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row w-full gap-x-4 mt-12">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-1 py-5 rounded-full bg-slate-100 items-center"
          >
            <Text className="font-bold text-lg">Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("./meetup-confirmed")}
            style={{ backgroundColor: colors.tint }}
            className="flex-1 py-5 rounded-full items-center shadow-lg"
          >
            <Text className="text-white font-bold text-lg">Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
