import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import { Flame, Heart } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function LikesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [activeTab, setActiveTab] = useState("likes");

  const goldGradient = ["#F5D372", "#E5A024"] as const;

  return (
    <CleanView>
      <View className="px-5 py-3">
        <View className="flex-row items-center">
          <Flame color={colors.tint} fill={colors.tint} size={30} />
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.text }}
            className="text-2xl font-black ml-1 tracking-tighter"
          >
            Date Now
          </Text>
        </View>
      </View>

      <View className="flex-row border-b border-gray-800/50">
        <TouchableOpacity
          onPress={() => setActiveTab("likes")}
          className="flex-1 items-center py-4"
        >
          <Text
            style={{
              color: activeTab === "likes" ? colors.text : colors.icon,
              fontFamily: Fonts.rounded,
            }}
            className="text-sm font-bold"
          >
            0 Likes
          </Text>
          {activeTab === "likes" && (
            <View className="absolute bottom-0 w-full h-[2px] bg-[#FF4458]" />
          )}
        </TouchableOpacity>

        <View className="w-[1px] h-6 bg-gray-800 self-center" />

        <TouchableOpacity
          onPress={() => setActiveTab("top-picks")}
          className="flex-1 items-center py-4 relative"
        >
          <View className="flex-row items-center">
            <Text
              style={{
                color: activeTab === "top-picks" ? colors.text : colors.icon,
                fontFamily: Fonts.rounded,
              }}
              className="text-sm font-bold"
            >
              Top Picks
            </Text>
            <View className="w-2 h-2 bg-[#FF4458] rounded-full ml-1" />
          </View>
          {activeTab === "top-picks" && (
            <View className="absolute bottom-0 w-full h-[2px] bg-[#FF4458]" />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="py-8 px-10">
          <Text
            style={{ color: colors.text }}
            className="text-center text-sm font-semibold leading-5 opacity-90"
          >
            Upgrade to Gold to see people who have already liked you.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center -mt-20">
          <View className="flex-row items-center">
            <View className="mr-2 gap-y-1.5 items-end">
              <View className="w-6 h-1.5 bg-[#E5A024] rounded-full opacity-60" />
              <View className="w-8 h-1.5 bg-[#F5D372] rounded-full" />
              <View className="w-5 h-1.5 bg-[#E5A024] rounded-full opacity-40" />
            </View>
            <Heart color="#E5A024" fill="#F5D372" size={70} strokeWidth={1} />
          </View>

          <Text
            style={{ color: colors.text }}
            className="mt-10 text-lg font-bold tracking-tight"
          >
            See people who liked you with Date Now Gold™
          </Text>
        </View>

        <View className="px-10 pb-12">
          <TouchableOpacity activeOpacity={0.9}>
            <LinearGradient
              colors={goldGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-5 rounded-full items-center shadow-lg"
            >
              <Text
                style={{ fontFamily: Fonts.rounded }}
                className="text-black font-black text-lg tracking-tight"
              >
                See Who Likes You
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </CleanView>
  );
}
