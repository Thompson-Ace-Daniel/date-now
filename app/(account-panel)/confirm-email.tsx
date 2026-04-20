import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ConfirmVerificationScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [code, setCode] = useState("");

  const isValid = code.length === 6;

  return (
    <CleanView>
      <View className="px-5 py-3">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft color={colors.icon} size={32} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-8 pt-5 items-center">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black self-start"
        >
          Enter code
        </Text>
        <Text
          style={{ color: colors.icon }}
          className="mt-2 self-start text-base opacity-80"
        >
          We sent a 6-digit code to your email.
        </Text>

        <TextInput
          value={code}
          onChangeText={setCode}
          placeholder="000000"
          placeholderTextColor={colors.border}
          keyboardType="number-pad"
          maxLength={6}
          style={{
            fontFamily: Fonts.rounded,
            color: colors.text,
            borderColor: colors.border,
          }}
          className="text-5xl tracking-[20px] text-center mt-12 w-full p-4 border-2 rounded-2xl"
          autoFocus
        />

        <View className="flex-1 w-full justify-end pb-10">
          <TouchableOpacity
            disabled={!isValid}
            onPress={() => router.replace("./verified-success")}
            style={{ backgroundColor: isValid ? colors.tint : colors.border }}
            className="py-4 rounded-full items-center"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-lg"
            >
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
