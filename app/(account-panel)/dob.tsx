import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function BirthdayScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [date, setDate] = useState("");

  const formatDate = (text: string) => {

    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 4) {
      cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    } else if (cleaned.length > 2) {
      cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }

    setDate(cleaned);
  };

  const isValid = date.length === 10;

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
          className="text-4xl font-black tracking-tighter"
        >
          Your b-day?
        </Text>

        <TextInput
          style={{
            fontFamily: Fonts.rounded,
            color: colors.text,
            borderBottomColor: colors.border,
          }}
          className="text-3xl mt-12 pb-2 border-b-2 tracking-widest"
          placeholder="DD/MM/YYYY"
          placeholderTextColor={colors.tabIconDefault}
          keyboardType="numeric"
          maxLength={10}
          value={date}
          onChangeText={formatDate}
          autoFocus
        />

        <Text
          style={{ color: colors.icon }}
          className="mt-6 text-sm font-medium leading-5 opacity-80"
        >
          Your profile shows your age, not your birth date.
        </Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-end pb-10"
        >
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isValid}
            onPress={() => router.replace("./gender")}
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
        </KeyboardAvoidingView>
      </View>
    </CleanView>
  );
}
