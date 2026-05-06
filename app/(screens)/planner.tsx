import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { Clock, MapPin } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PlannerScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [dateType, setDateType] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const dateTypes = ["Coffee", "Drinks", "Dinner", "Activity"];

  const isValid = dateType && location && time;

  return (
    <CleanView>
      <View className="flex-1 px-8 pt-10">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black mb-10"
        >
          Plan your date
        </Text>

        <View className="gap-y-6">
          <View>
            <Text
              style={{ color: colors.icon }}
              className="mb-2 font-bold uppercase text-[12px] tracking-widest"
            >
              DATE TYPE
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {dateTypes.map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => setDateType(type)}
                  style={{
                    backgroundColor:
                      dateType === type ? colors.tint : "transparent",
                    borderColor:
                      dateType === type ? colors.tint : colors.border,
                  }}
                  className="border rounded-full px-4 py-2"
                >
                  <Text
                    style={{ color: dateType === type ? "white" : colors.text }}
                    className="font-semibold"
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <Text
              style={{ color: colors.icon }}
              className="mb-2 font-bold uppercase text-[12px] tracking-widest"
            >
              WHERE
            </Text>
            <View className="flex-row items-center bg-slate-100 p-4 rounded-2xl">
              <MapPin color={colors.tint} size={20} className="mr-3" />
              <TextInput
                placeholder="Pick a spot..."
                value={location}
                onChangeText={setLocation}
                className="flex-1 text-lg"
              />
            </View>
          </View>

          <View>
            <Text
              style={{ color: colors.icon }}
              className="mb-2 font-bold uppercase text-[12px] tracking-widest"
            >
              WHEN
            </Text>
            <View className="flex-row items-center bg-slate-100 p-4 rounded-2xl">
              <Clock color={colors.tint} size={20} className="mr-3" />
              <TextInput
                placeholder="Choose a time..."
                value={time}
                onChangeText={setTime}
                className="flex-1 text-lg"
              />
            </View>
          </View>
        </View>

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            disabled={!isValid}
            onPress={() =>
              router.push({
                pathname: "./setup-date",
                params: { dateType, location, time },
              })
            }
            style={{ backgroundColor: isValid ? colors.tint : colors.border }}
            className="py-5 rounded-full items-center"
          >
            <Text
              style={{ fontFamily: Fonts.rounded }}
              className="text-white font-black text-xl"
            >
              Send Proposal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CleanView>
  );
}
