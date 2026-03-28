import { Tabs } from "expo-router";
import {
  Compass,
  Flame,
  Heart,
  MessageCircle,
  User,
} from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === "ios" ? 88 : 70,
          paddingTop: 12,
        },
        tabBarLabelStyle: {
          fontFamily: Fonts.rounded,
          fontSize: 11,
          fontWeight: "600",
          letterSpacing: 0.5,
          marginBottom: Platform.OS === "ios" ? 0 : 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Swipe",
          tabBarIcon: ({ color, focused }) => (
            <Flame
              size={26}
              strokeWidth={focused ? 2.5 : 2}
              color={color}
              fill={focused ? color : "transparent"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <Compass
              size={26}
              strokeWidth={focused ? 2.5 : 2}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          title: "Likes",
          tabBarIcon: ({ color, focused }) => (
            <Heart
              size={26}
              strokeWidth={focused ? 2.5 : 2}
              color={color}
              fill={focused ? color : "transparent"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <MessageCircle
              size={26}
              strokeWidth={focused ? 2.5 : 2}
              color={color}
              fill={focused ? color : "transparent"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <User
              size={26}
              strokeWidth={focused ? 2.5 : 2}
              color={color}
              fill={focused ? color : "transparent"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
