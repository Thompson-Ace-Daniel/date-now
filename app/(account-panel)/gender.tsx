import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Checkbox } from "expo-checkbox";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function GenderScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [selected, setSelected] = useState<string | null>(null);
  const [showGender, setShowGender] = useState(false);

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
          What&apos;s your gender?
        </Text>

        <View className="gap-y-4">
          {["Male", "Female"].map((gender) => (
            <TouchableOpacity
              key={gender}
              activeOpacity={0.7}
              onPress={() => setSelected(gender)}
              style={{
                borderColor: selected === gender ? colors.tint : colors.border,
                borderWidth: 2,
              }}
              className="py-4 rounded-full items-center"
            >
              <Text
                style={{
                  fontFamily: Fonts.rounded,
                  color: selected === gender ? colors.text : colors.icon,
                }}
                className="text-lg font-bold capitalize"
              >
                {gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setShowGender(!showGender)}
          className="flex-row items-center justify-center mt-12 gap-x-3"
        >
          <Checkbox
            value={showGender}
            onValueChange={setShowGender}
            color={showGender ? colors.tint : colors.icon}
            style={{ borderRadius: 4, width: 20, height: 20 }}
          />
          <Text
            style={{ color: colors.icon, fontFamily: Fonts.rounded }}
            className="text-sm font-semibold opacity-80"
          >
            Show my gender on my profile
          </Text>
        </TouchableOpacity>

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isValid}
            onPress={() => router.push("./distance")}
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
