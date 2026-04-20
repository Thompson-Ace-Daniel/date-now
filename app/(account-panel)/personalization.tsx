import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

const options = [
  "Long-term partner",
  "Long-term, open to short",
  "Short-term, open to long",
  "Short-term fun",
  "New friends",
  "Still figuring it out",
];

export default function LookingForScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [selected, setSelected] = useState<string | null>(null);

  const isValid = selected !== null;

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
          className="text-4xl font-black tracking-tighter mb-10"
        >
          What are you looking for?
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {options.map((item) => (
            <Pressable
              key={item}
              onPress={() => setSelected(item)}
              style={{
                borderColor: selected === item ? colors.tint : colors.border,
                backgroundColor:
                  selected === item ? `${colors.tint}10` : "transparent",
              }}
              className="w-[48%] h-32 border-2 rounded-3xl justify-center items-center mb-4 p-2"
            >
              <Text
                style={{
                  fontFamily: Fonts.rounded,
                  color: selected === item ? colors.text : colors.icon,
                }}
                className="text-center font-bold"
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            disabled={!isValid}
            onPress={() => router.push("./setup-loc")}
            style={{
              backgroundColor: isValid ? colors.tint : colors.border,
              opacity: isValid ? 1 : 0.5,
            }}
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
