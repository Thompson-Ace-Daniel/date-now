import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

const INTERESTS = [
  "🎨 Art",
  "📸 Photography",
  "🍿 Movies",
  "🎸 Music",
  "🍕 Cooking",
  "🍷 Wine",
  "🏋️‍♂️ Fitness",
  "⚽ Sports",
  "🎮 Gaming",
  "✈️ Travel",
  "📚 Reading",
  "🐾 Pets",
  "🧗‍♂️ Hiking",
  "☕ Coffee",
  "💃 Dancing",
  "🎤 Karaoke",
];

INTERESTS.sort(() => 0.5 - Math.random());

export default function InterestsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter((i) => i !== interest));
    } else if (selected.length < 5) {
      setSelected([...selected, interest]);
    }
  };

  return (
    <CleanView>
      <View className="px-5 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft color={colors.icon} size={32} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-8 pt-5">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black tracking-tighter"
        >
          Your interests
        </Text>
        <Text
          style={{ color: colors.icon }}
          className="mt-2 text-base opacity-70"
        >
          Pick up to 5 things you love. It helps us find better matches.
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-10"
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {INTERESTS.map((interest) => {
            const isSelected = selected.includes(interest);
            return (
              <TouchableOpacity
                key={interest}
                onPress={() => toggleInterest(interest)}
                style={{
                  backgroundColor: isSelected ? colors.tint : "transparent",
                  borderColor: isSelected ? colors.tint : colors.border,
                }}
                className="px-4 py-3 rounded-full border-2"
              >
                <Text
                  style={{
                    fontFamily: Fonts.rounded,
                    color: isSelected ? "white" : colors.text,
                  }}
                  className="text-base font-normal"
                >
                  {interest}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View className="pb-10 pt-5">
          <TouchableOpacity
            disabled={selected.length === 0}
            onPress={() => router.push("../(account-panel)/get-location")}
            style={{
              backgroundColor:
                selected.length > 0 ? colors.tint : colors.border,
            }}
            className="py-5 rounded-full items-center shadow-lg"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-xl"
            >
              Continue {selected.length > 0 ? `(${selected.length}/5)` : ""}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
