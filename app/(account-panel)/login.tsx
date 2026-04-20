import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import { Home, Phone } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import logo from "../../assets/images/datenowlogo4.png";

export default function LoginScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="flex-1 px-8 items-center justify-center">
        <Image source={logo} className="w-40 h-40 mb-10" />

        <View className="px-4 mb-12">
          <Text
            style={{ fontFamily: Fonts.rounded, color: "white" }}
            className="text-center text-[12px] leading-5 font-medium opacity-90"
          >
            By tapping &apos;Continue&apos; you agree to our{" "}
            <Text className="font-bold underline">Terms</Text>. Learn how we
            process your data in our{" "}
            <Text className="font-bold underline">Privacy Policy</Text> and{" "}
            <Text className="font-bold underline">Cookies Policy</Text>.
          </Text>
        </View>

        <View className="w-full gap-y-4">
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row bg-white py-4 rounded-full items-center justify-center shadow-lg"
            onPress={() => {
              /* Handle Google Auth */
            }}
          >
            <Home color={colors.tint} size={22} />
            <View className="ml-3 items-center">
              <Text
                style={{ fontFamily: Fonts.rounded, color: colors.tint }}
                className="font-black text-base"
              >
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("./phone")}
            className="flex-row bg-white py-4 rounded-full items-center justify-center shadow-lg"
          >
            <Phone color={colors.tint} size={22} />
            <View className="ml-3 items-center">
              <Text
                style={{ fontFamily: Fonts.rounded, color: colors.tint }}
                className="font-black text-base"
              >
                Continue With Phone
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="mt-10"
          onPress={() => router.push("./signup")}
        >
          <Text
            style={{ fontFamily: Fonts.rounded }}
            className="text-white text-center font-bold text-base"
          >
            Already have an account? <Text className="underline">Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </CleanView>
  );
}
