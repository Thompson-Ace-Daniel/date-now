import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { router } from "expo-router";
import { ChevronLeft, Plus } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PersonalizationScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const [photos, setPhotos] = useState<string[]>([]);
  const [bio, setBio] = useState("");

  const addPhoto = () => {
    // Placeholder for photo picker
    const placeholder = "https://picsum.photos/200";
    if (photos.length < 2) {
      setPhotos([...photos, placeholder]);
    }
  };

  const isValid = photos.length >= 2 && bio.trim().length > 0;

  return (
    <CleanView>
      <View className="px-5 py-3">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 items-start justify-center"
        >
          <ChevronLeft color={"white"} size={32} />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-8 pt-5">
        <Text
          style={{ fontFamily: Fonts.rounded, color: colors.text }}
          className="text-4xl font-black tracking-tighter mb-10"
        >
          Add your photos & bio
        </Text>

        <View className="mb-8">
          <Text
            className="mb-4 font-bold uppercase text-xl tracking-widest text-white"
          >
            Photos (2 required)
          </Text>
          <View className="flex-row gap-x-4">
            {photos.map((photo, index) => (
              <View
                key={index}
                className="w-20 h-20 rounded-xl overflow-hidden"
              >
                <Image source={{ uri: photo }} className="w-full h-full" />
              </View>
            ))}
            {photos.length < 2 && (
              <TouchableOpacity
                onPress={addPhoto}
                className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-400 items-center justify-center"
              >
                <Plus color={"white"} size={24} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View className="mb-8">
          <Text
            className="mb-4 font-bold uppercase text-sm tracking-widest text-white text-xl"
          >
            Bio
          </Text>
          <TextInput
            placeholder="Tell us about yourself..."
            placeholderTextColor={"#ddd"}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            className="border border-gray-300 rounded-xl p-4 text-base"
            style={{ color: colors.text }}
          />
        </View>

        <View className="flex-1 justify-end pb-10">
          <TouchableOpacity
            disabled={!isValid}
            onPress={() => router.push("./setup-loc")}
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
        </View>
      </View>
    </CleanView>
  );
}
