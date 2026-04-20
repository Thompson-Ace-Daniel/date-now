import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ArrowLeft, MapPin } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DateMapScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="absolute top-12 left-5 z-10 flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-white/90 p-3 rounded-full shadow-lg"
        >
          <ArrowLeft color={colors.icon} size={24} />
        </TouchableOpacity>
        <View className="ml-4 bg-white/90 px-5 py-3 rounded-full shadow-lg">
          <Text style={{ fontFamily: Fonts.rounded }} className="font-black">
            12 mins away
          </Text>
        </View>
      </View>

      <View
        style={{ flex: 1, backgroundColor: "#e5e7eb" }}
        className="items-center justify-center"
      >
        <Text className="text-slate-400 font-medium">Map view loading...</Text>
      </View>

      <View
        style={{ backgroundColor: colors.background }}
        className="p-6 rounded-t-[40px] shadow-2xl border-t border-slate-100"
      >
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <Text
              style={{ color: colors.icon }}
              className="uppercase text-[10px] tracking-widest font-bold"
            >
              MEETING WITH
            </Text>
            <Text
              style={{ color: colors.text, fontFamily: Fonts.rounded }}
              className="text-2xl font-black"
            >
              Sophia
            </Text>
          </View>
          <View className="w-14 h-14 rounded-full bg-slate-200" />
        </View>

        <View className="flex-row items-center gap-x-3 mb-6">
          <MapPin color={colors.tint} size={24} />
          <Text
            style={{ color: colors.text }}
            className="text-base font-medium"
          >
            The Daily Grind Coffee Shop
          </Text>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: colors.tint }}
          className="py-5 rounded-full items-center"
        >
          <Text
            style={{ fontFamily: Fonts.rounded }}
            className="text-white text-lg font-black"
          >
            Navigate
          </Text>
        </TouchableOpacity>
      </View>
    </CleanView>
  );
}
