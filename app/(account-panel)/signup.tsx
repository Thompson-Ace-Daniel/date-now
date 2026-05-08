import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { api } from "../../services/api";
const logo = require("../../assets/images/datenowLogo2.png");

const handleSignUp = async (
  phoneNumber: string,
  email: string,
  password: string,
) => {
  try {
    const response = await api.post("/user", {
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  } finally {
    router.replace("./phone");
  }
};

export default function SignUpScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CleanView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-8"
        style={{ backgroundColor: colors.tint }}
      >
        <View className="items-center mb-10">
          <Image source={logo} className="w-40 h-40 mb-10 flex" />
        </View>
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.background }}
          className="text-4xl font-black text-center mb-10 tracking-tighter"
        >
          Sign Up
        </Text>

        <View className="gap-y-4">
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              className="w-full border border-white/30 rounded-2xl p-5 text-white text-base"
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              className="w-full border border-white/30 rounded-2xl p-5 text-white text-base"
            />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.6)"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            className="w-full border border-white/30 rounded-2xl p-5 text-white text-base"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            handleSignUp(phone, email, password).catch((error) => {
              console.error("Error signing up:", error);
            })
          }
          className="bg-white py-5 rounded-full items-center mt-8 shadow-lg"
        >
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.tint }}
            className="font-black text-lg"
          >
            Create Account
          </Text>
        </TouchableOpacity>

        <Text className="text-white text-center mt-6 font-medium">
          Already have an account?{" "}
          <Text
            onPress={() => router.replace("./login")}
            className="underline font-bold"
          >
            Log In
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </CleanView>
  );
}
