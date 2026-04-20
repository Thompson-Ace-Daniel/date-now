import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import logo from "../../assets/images/datenowlogo3.png";

const RULES = [
  {
    title: "Be yourself",
    desc: "Make sure your photos, age, and bio are true to who you are.",
  },
  {
    title: "Stay safe",
    desc: "Don't be too quick to give out your personal information.",
  },
  {
    title: "Play it cool",
    desc: "Respect others and treat them as you would like to be treated.",
  },
  { title: "Be proactive", desc: "Always report bad behavior." },
];

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="px-5 py-3">
        <TouchableOpacity
          onPress={() => router.replace("./welcome2")}
          className="w-10 h-10 items-start justify-center"
        >
          <X color={colors.icon} size={28} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-8 pt-2">
        <Image source={logo} className="w-20 h-20 mb-4" resizeMode="contain" />

        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black tracking-tighter"
        >
          Welcome to Date Now.
        </Text>

        <Text
          style={{ color: colors.icon }}
          className="mt-2 text-lg font-medium"
        >
          Please follow these House Rules.
        </Text>

        <View className="mt-8 gap-y-6">
          {RULES.map((rule, index) => (
            <View key={index}>
              <Text
                style={{ fontFamily: Fonts.rounded, color: colors.text }}
                className="text-xl font-bold"
              >
                {rule.title}
              </Text>
              <Text
                style={{ color: colors.icon }}
                className="text-base mt-1 opacity-80 leading-5"
              >
                {rule.desc}
              </Text>
            </View>
          ))}
        </View>

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.replace("./welcome2")}
            style={{ backgroundColor: colors.tint }}
            className="py-4 rounded-full items-center shadow-lg"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-lg"
            >
              I Agree
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
