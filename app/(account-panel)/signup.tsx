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
import logo from "../../assets/images/datenowLogo2.png";

export default function SignUpScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [usePhone, setUsePhone] = useState(true);

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
          <View className="flex-row justify-center gap-x-4 mb-4">
            <TouchableOpacity
              onPress={() => setUsePhone(true)}
              style={{
                backgroundColor: usePhone ? colors.tint : "transparent",
              }}
              className="px-4 py-2 rounded-full border border-white/30"
            >
              <Text
                className={`font-bold ${usePhone ? "text-white" : "text-white/60"}`}
              >
                Phone
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setUsePhone(false)}
              style={{
                backgroundColor: !usePhone ? colors.tint : "transparent",
              }}
              className="px-4 py-2 rounded-full border border-white/30"
            >
              <Text
                className={`font-bold ${!usePhone ? "text-white" : "text-white/60"}`}
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>
          {usePhone ? (
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              className="w-full border border-white/30 rounded-2xl p-5 text-white text-base"
            />
          ) : (
            <TextInput
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.6)"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              className="w-full border border-white/30 rounded-2xl p-5 text-white text-base"
            />
          )}
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
            router.replace({
              pathname: "./otp",
              params: {
                contact: usePhone ? phone : email,
                type: usePhone ? "phone" : "email",
                password,
              },
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
