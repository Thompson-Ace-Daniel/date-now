import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router, useLocalSearchParams } from "expo-router";
import { Heart, MessageSquareText, Users } from "lucide-react-native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("screen");

export default function MatchedScreen() {
  const { matchName, matchPhoto } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 items-center justify-center">
        <View className="flex-row items-center gap-x-3 mb-12">
          <Heart color={colors.tint} size={32} fill={colors.tint} />
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.tint }}
            className="text-5xl font-black tracking-tighter"
          >
            It&apos;s a Match!
          </Text>
        </View>

        <View className="flex-row items-center gap-x-[-20px] mb-16">
          <View
            style={{ width: width * 0.4 }}
            className="h-40 rounded-full bg-slate-200 border-4 justify-center items-center border-white shadow-xl overflow-hidden"
          >
            <Users color="#ccc" size={60} className="m-auto" />
          </View>
          <View
            style={{ width: width * 0.4 }}
            className="h-40 rounded-full bg-slate-300 border-4 border-white shadow-2xl overflow-hidden"
          >
            <Image
              source={{
                uri: (matchPhoto as string) || "https://picsum.photos/400",
              }}
              className="w-full h-full"
            />
          </View>
        </View>

        <Text
          style={{ color: colors.text }}
          className="text-center text-xl font-medium leading-7 px-4 mb-16 opacity-90"
        >
          You and <Text className="font-bold">{matchName || "Sophia"}</Text>{" "}
          liked each other. Don&apos;t keep them waiting!
        </Text>

        <View className="w-full gap-y-5">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("../(tabs)/chat")}
            style={{ backgroundColor: colors.tint }}
            className="flex-row py-5 rounded-full items-center justify-center shadow-lg"
          >
            <MessageSquareText color="white" size={24} />
            <View className="ml-3 items-center">
              <Text
                style={{ fontFamily: Fonts.rounded }}
                className="text-white font-black text-xl"
              >
                💬 Chat
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("./planner")}
            className="bg-red-500 py-5 rounded-full items-center justify-center shadow-lg"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-xl"
            >
              🔥 DATE NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
