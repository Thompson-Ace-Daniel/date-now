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

export default function PhoneNumberScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [phone, setPhone] = useState("");

  const isValid = phone.replace(/\D/g, "").length >= 10;

  const handleNext = () => {
    if (!isValid) return;
    router.push({
      pathname: "./otp",
      params: { phoneNumber: phone.trim() },
    });
  };

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
          My number is
        </Text>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="0000 000 0000"
          placeholderTextColor={colors.tabIconDefault}
          maxLength={11}
          style={{
            fontFamily: Fonts.rounded,
            color: colors.text,
            borderBottomColor: colors.border,
          }}
          className="text-3xl mt-12 pb-2 border-b-2 tracking-widest"
          autoFocus
        />

        <Text
          style={{ color: colors.icon }}
          className="mt-6 text-sm font-medium leading-5 opacity-80"
        >
          We&apos;ll text you a code to verify you&apos;re really you. Message
          and data rates may apply.
        </Text>

        <TouchableOpacity className="mt-2">
          <Text
            style={{ color: colors.tint, fontFamily: Fonts.rounded }}
            className="font-bold underline"
          >
            What happens if your number changes?
          </Text>
        </TouchableOpacity>

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
