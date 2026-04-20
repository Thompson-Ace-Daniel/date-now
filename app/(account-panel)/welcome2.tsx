import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FirstNameScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [name, setName] = useState("");

  const isValid = name.trim().length > 0;

  const handleNext = () => {
    if (!isValid) return;
    router.push({
      pathname: "./welcome3",
      params: { userName: name.trim() },
    });
  };

  return (
    <CleanView>
      <View className="flex-1 px-8 pt-12">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black tracking-tighter mb-10"
        >
          What&apos;s your first name?
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="First name"
          placeholderTextColor={colors.icon}
          style={{
            fontFamily: Fonts.rounded,
            color: colors.text,
            borderBottomColor: name ? colors.tint : colors.border,
          }}
          className="text-2xl pb-3 border-b-2"
          autoFocus
        />

        <Text
          style={{ color: colors.icon, fontFamily: Fonts.rounded }}
          className="mt-6 text-sm font-medium opacity-70 leading-5"
        >
          This is how it&apos;ll appear on your profile.{"\n"}
          You cannot change it later.
        </Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-end pb-10"
        >
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isValid}
            onPress={handleNext}
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
