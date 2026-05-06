import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OTPScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const { contact, type } = useLocalSearchParams();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (key: string, index: number) => {
    if (key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const finalCode = code.join("");
  const isValid = finalCode.length === 6;

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
          Enter your code
        </Text>
        <Text
          style={{ color: colors.icon }}
          className="mt-2 text-base font-medium"
        >
          Code sent to: {contact}
        </Text>

        <View className="flex-row justify-between mt-12 mb-8">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref!)}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={({ nativeEvent }) =>
                handleBackspace(nativeEvent.key, index)
              }
              keyboardType="number-pad"
              maxLength={1}
              style={{
                fontFamily: Fonts.rounded,
                color: colors.text,
                borderBottomColor: digit ? colors.tint : colors.border,
              }}
              className="w-12 h-16 border-b-2 text-center text-2xl font-bold"
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity onPress={() => router.replace("../")}>
          <Text
            style={{ color: colors.tint, fontFamily: Fonts.rounded }}
            className="font-bold underline"
          >
            Didn&apos;t get the code? Resend
          </Text>
        </TouchableOpacity>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-end pb-10"
        >
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={!isValid}
            onPress={() => router.push("./personalization")}
            style={{ backgroundColor: isValid ? colors.tint : colors.border }}
            className="py-4 rounded-full items-center"
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
