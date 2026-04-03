import { CleanView } from "@/components/clean-view";
import { useRouter } from "expo-router";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Flame, MessageSquare, Search, Shield } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ChatScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const router = useRouter();

  return (
    <CleanView>
      <View className="flex-row justify-between items-center px-5 py-3">
        <View className="flex-row items-center">
          <Flame color={colors.tint} fill={colors.tint} size={30} />
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.text }}
            className="text-2xl font-black ml-1 tracking-tighter"
          >
            Date Now
          </Text>
        </View>
        <View className="flex-row gap-x-5">
          <TouchableOpacity className="bg-gray-800/20 p-2 rounded-full">
            <Shield color={colors.icon} size={24} />
          </TouchableOpacity>
          <View className="relative">
            <TouchableOpacity onPress={() => router.push("/screens/chatEvent")} className="bg-gray-800/20 p-2 rounded-full">
              <MessageSquare color={colors.icon} size={24} />
            </TouchableOpacity>
            <View className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4458] rounded-full border-2 border-[#0F1112]" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-5">
        <View
          style={{ borderBottomColor: colors.border }}
          className="flex-row items-center py-4 border-b"
        >
          <Search color={colors.icon} size={20} />
          <TextInput
            placeholder="Search 0 Matches"
            placeholderTextColor={colors.tabIconDefault}
            className="flex-1 ml-3 text-white font-semibold text-lg"
            style={{ fontFamily: Fonts.rounded }}
          />
        </View>

        <View className="flex-1 items-center justify-center mt-24">
          <View className="relative w-40 h-56 items-center justify-center">
            <View
              style={{ borderColor: colors.border }}
              className="absolute w-32 h-44 border-4 rounded-[20px] bg-[#1C1F21] top-4 left-2"
            />
            <View
              style={{ borderColor: colors.border }}
              className="absolute w-32 h-44 border-4 rounded-[20px] bg-[#1C1F21] rotate-[-5deg]"
            />
            <View
              style={{ borderColor: "#24E081" }}
              className="w-32 h-44 border-4 rounded-[20px] bg-[#1C1F21] rotate-[15deg] items-center justify-center"
            >
              <View className="border-2 border-[#24E081] rounded px-1 rotate-[-10deg]">
                <Text className="text-[#24E081] font-black text-[10px] uppercase">
                  Like
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-10 items-center px-10">
            <Text
              style={{ color: colors.text, fontFamily: Fonts.rounded }}
              className="text-xl font-bold mb-3"
            >
              Get Swiping
            </Text>
            <Text
              style={{ color: colors.icon }}
              className="text-center leading-5 font-medium"
            >
              When you match with other users they&apos;ll appear here where you
              can send them a message
            </Text>
          </View>
        </View>
      </ScrollView>
    </CleanView>
  );
}
