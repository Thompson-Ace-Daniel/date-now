import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowUp,
  CheckCircle2,
  HandMetal,
  Heart,
  MapPin,
  X,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

const PROFILES_DATA = [
  {
    id: "1",
    name: "Matilda",
    age: 24,
    distance: "1 mile away",
    bio: "Pretty face, warm heart, good energy ✨ Let's see where this goes 💫",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Sophia",
    age: 22,
    distance: "3 miles away",
    bio: "Coffee enthusiast and amateur photographer. Looking for someone to explore the city with. ☕️📸",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Chloe",
    age: 26,
    distance: "5 miles away",
    bio: "Software Engineer by day, hiker by weekend. 🏔️ Let's build something cool.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Isabella",
    age: 23,
    distance: "2 miles away",
    bio: "Music is my love language. Favorite band? Ask me. 🎸",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Mia",
    age: 25,
    distance: "10 miles away",
    bio: "I make a mean lasagna. Change my mind. 🍝",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SwipeScreen() {
  const [profiles, setProfiles] = useState(PROFILES_DATA);
  const [showGuide, setShowGuide] = useState(true);

  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe("left");
        } else {
          resetPosition();
        }
      },
    }),
  ).current;

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const forceSwipe = (direction: "right" | "left") => {
    const x = direction === "right" ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction: string) => {
    setProfiles((prev) => prev.slice(1));
    position.setValue({ x: 0, y: 0 });
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-30deg", "0deg", "30deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const renderCards = () => {
    if (profiles.length === 0) {
      return (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-lg font-bold">
            No more profiles!
          </Text>
        </View>
      );
    }

    return profiles
      .map((item, i) => {
        if (i === 0) {
          return (
            <Animated.View
              key={item.id}
              style={[
                getCardStyle(),
                { zIndex: 10, width: SCREEN_WIDTH, height: "100%" },
              ]}
              {...panResponder.panHandlers}
              className="absolute"
            >
              <CardContent user={item} />
            </Animated.View>
          );
        }
        return (
          <View
            key={item.id}
            style={{ zIndex: 5, width: SCREEN_WIDTH, height: "100%" }}
            className="absolute"
          >
            <CardContent user={item} />
          </View>
        );
      })
      .reverse();
  };

  return (
    <CleanView>
      <View className="flex-1 bg-black">
        {renderCards()}

        {showGuide && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setShowGuide(false)}
            className="absolute inset-0 z-[100] flex-row"
          >
            <View className="flex-1 items-center justify-center bg-black/40 border-r border-white/20 border-dashed">
              <HandMetal color="white" size={40} className="rotate-180 mb-2" />
              <Text
                style={{ fontFamily: Fonts.rounded }}
                className="text-white font-black text-center uppercase"
              >
                Last
              </Text>
            </View>
            <View className="flex-1 items-center justify-center bg-black/40">
              <HandMetal color="white" size={40} className="mb-2" />
              <Text
                style={{ fontFamily: Fonts.rounded }}
                className="text-white font-black text-center uppercase"
              >
                Next
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </CleanView>
  );
}

function CardContent({ user }: any) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  return (
    <ImageBackground
      source={{ uri: user.image }}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-row px-2 pt-4 gap-x-1">
        {[...Array(6)].map((_, i) => (
          <View
            key={i}
            className={`h-1 flex-1 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </View>

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        className="absolute bottom-0 left-0 right-0 pt-20 pb-10 px-5"
      >
        <View className="bg-[#1DB963] self-start px-2 py-1 rounded-md flex-row items-center mb-3">
          <MapPin size={12} color="white" />
          <Text className="text-white text-[10px] font-bold ml-1">Nearby</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2 flex-1">
            <Text className="text-white text-3xl font-bold">
              {user.name} {user.age}
            </Text>
            <CheckCircle2
              size={20}
              color={colors.background}
              fill="#3b82f6"
              strokeWidth={1}
            />
          </View>
          <TouchableOpacity className="bg-white/20 p-2 rounded-full">
            <ArrowUp color="white" size={20} />
          </TouchableOpacity>
        </View>

        <View className="mt-2">
          <View className="flex-row items-center mb-2">
            <MapPin size={14} color="white" />
            <Text className="text-white/90 ml-1 text-sm font-semibold">
              {user.distance}
            </Text>
          </View>
          <Text className="text-white/80 leading-5 text-sm" numberOfLines={3}>
            {user.bio}
          </Text>
        </View>

        <View className="flex-row justify-center items-center mt-8 gap-x-6">
          <View className="w-14 h-14 bg-gray-900/80 rounded-full items-center justify-center border border-white/10">
            <X color="#FF4458" size={30} strokeWidth={3} />
          </View>
          <View className="w-16 h-16 bg-gray-900/80 rounded-full items-center justify-center border border-white/10">
            <Heart color="#24E081" fill="#24E081" size={32} />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
