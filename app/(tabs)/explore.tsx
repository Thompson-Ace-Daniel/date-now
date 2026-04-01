import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import { Flame, User } from "lucide-react-native";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <CleanView>
      <View className="px-5 py-3">
        <View className="flex-row items-center">
          <Flame color={colors.tint} fill={colors.tint} size={30} />
          <Text
            style={{ fontFamily: Fonts.rounded, color: colors.text }}
            className="text-2xl font-black ml-1 tracking-tighter"
          >
            Date Now
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between mb-4 mt-2">
          <VibeCard
            title="Free Tonight"
            color="#6338AF"
            width="48%"
            height={180}
            image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
          />
          <VibeCard
            title="New friends"
            color="#B08D1E"
            width="48%"
            height={180}
            image="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=500"
          />
        </View>

        <VibeCard
          title="Get Photo Verified"
          color="#8B3A1F"
          width="100%"
          height={240}
          showTryNow
          userCount={38}
          image="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800"
        />

        <View className="mt-6 mb-4">
          <Text style={{ color: colors.text }} className="text-lg font-bold">
            Similar plans and lifestyles
          </Text>
          <Text style={{ color: colors.icon }} className="text-xs font-medium">
            Find people with similar life goals
          </Text>
        </View>

        <VibeCard
          title="Wants Kids"
          color="#1F8B66"
          width="100%"
          height={220}
          showTryNow
          userCount={14}
          image="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=800"
        />

        <View className="mt-8 mb-4">
          <Text style={{ color: colors.text }} className="text-lg font-bold">
            Goal-driven dating
          </Text>
          <Text style={{ color: colors.icon }} className="text-xs font-medium">
            Find people with similar relationship goals
          </Text>
        </View>

        <VibeCard
          title="Short-term fun"
          color="#8B1F3F"
          width="100%"
          height={240}
          userCount={14}
          image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800"
        />

        <View className="flex-row justify-between mt-4 mb-10">
          <VibeCard
            title="Long-term partner"
            color="#8B2A0A"
            width="48%"
            height={260}
            userCount={49}
            image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
          />
          <VibeCard
            title="Serious Daters"
            color="#8B3A1F"
            width="48%"
            height={260}
            userCount={26}
            image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
          />
        </View>
      </ScrollView>
    </CleanView>
  );
}

function VibeCard({
  title,
  color,
  width,
  height,
  showTryNow,
  userCount,
  image,
}: any) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ width, height }}
      className="rounded-3xl overflow-hidden mb-4"
    >
      <ImageBackground
        source={{ uri: image }}
        style={{ flex: 1 }}
        imageStyle={{ borderRadius: 24 }}
      >
        <View
          style={{ backgroundColor: color, opacity: 0.4 }}
          className="absolute inset-0"
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          className="absolute inset-0"
        />

        {userCount && (
          <View className="absolute top-3 right-3 bg-black/40 px-2 py-1 rounded-md flex-row items-center border border-white/10">
            <User color="white" size={10} fill="white" />
            <Text className="text-white text-[10px] font-bold ml-1">
              {userCount}
            </Text>
          </View>
        )}

        <View className="absolute bottom-5 left-5 right-5 flex-row items-end justify-between">
          <View className="flex-1 mr-2">
            <Text
              className="text-white text-2xl font-black leading-7"
              style={{ fontFamily: Fonts.rounded }}
            >
              {title}
            </Text>
          </View>

          {showTryNow && (
            <TouchableOpacity className="bg-white px-4 py-2 rounded-full">
              <Text className="text-black font-black text-[10px] uppercase tracking-tighter">
                Try Now
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
