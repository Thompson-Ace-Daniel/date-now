import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function VerifyEmailScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [email, setEmail] = useState("");

  const isValid = email.includes("@") && email.includes(".");

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
          Verify your email
        </Text>
        <Text
          style={{ color: colors.icon }}
          className="mt-4 text-base opacity-80"
        >
          Enter your email address to receive a verification code.
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="name@email.com"
          placeholderTextColor={colors.icon}
          keyboardType="email-address"
          autoCapitalize="none"
          style={{
            fontFamily: Fonts.rounded,
            color: colors.text,
            borderBottomColor: isValid ? colors.tint : colors.border,
          }}
          className="text-2xl mt-12 pb-2 border-b-2"
        />

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            disabled={!isValid}
            onPress={() => router.push("./confirm-email")}
            style={{ backgroundColor: isValid ? colors.tint : colors.border }}
            className="py-4 rounded-full items-center"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-lg"
            >
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
