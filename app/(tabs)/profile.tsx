import { useRouter } from "expo-router";
import { CleanView } from "@/components/clean-view";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import {
  Check,
  CheckCircle2,
  Flame,
  Image as ImageIcon,
  Lock,
  Pencil,
  Plus,
  Quote,
  Settings,
  ShieldCheck,
  Star,
  User,
  Zap,
} from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const isDark = colorScheme === "dark";

  return (
    <CleanView>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4">
          <View className="w-10" />
          <View className="flex-row gap-2 justify-center items-center">
            <Text
              style={{ fontFamily: Fonts.rounded, color: colors.text }}
              className="text-xl font-bold"
            >
              User Name
            </Text>
            <CheckCircle2
              size={18}
              color="#3b82f6"
              fill={isDark ? colors.background : "#fff"}
              className="ml-1"
            />
          </View>
          <TouchableOpacity>
            <Settings color={colors.icon} size={26} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* Profile Avatar */}
        <View className="items-center mt-4 mb-10">
          <View
            style={{
              backgroundColor: isDark ? "#26292B" : "#F3F4F6",
              borderColor: colors.border,
            }}
            className="w-36 h-36 rounded-full items-center justify-center border-4"
          >
            <User color={isDark ? "#4E5458" : "#9BA1A6"} size={80} />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: isDark ? "#fff" : "#1A1A1A",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 5,
            }}
            className="px-6 py-2.5 rounded-full flex-row items-center -mt-6"
          >
            <Pencil
              size={14}
              color={isDark ? "black" : "white"}
              strokeWidth={3}
            />
            <Text
              style={{ color: isDark ? "black" : "white" }}
              className="font-black text-[10px] ml-2 tracking-widest uppercase"
            >
              Edit profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Progress Section */}
        <View className="px-8 mb-10">
          <View className="flex-row items-center mb-3">
            <View
              style={{ backgroundColor: colors.border }}
              className="flex-1 h-1.5 rounded-full overflow-hidden"
            >
              <View
                style={{ backgroundColor: colors.tint }}
                className="h-full w-[34%]"
              />
            </View>
            <View
              style={{ backgroundColor: colors.tint }}
              className="rounded-full px-2 py-0.5 ml-3"
            >
              <Text className="text-[10px] text-white font-black">34%</Text>
            </View>
          </View>
          <Text
            style={{ color: colors.icon }}
            className="text-center text-xs font-semibold px-4 leading-5"
          >
            Complete your profile to be seen by more people!
          </Text>
        </View>

        {/* Action Items */}
        <View className="px-4 gap-y-3 mb-8">
          <ActionItem
            colors={colors}
            Icon={ImageIcon}
            title="Add at least 5 photos"
            subtitle="Get up to 2x more Likes with 6 pics."
            badge="+42%"
          />
          <ActionItem
            colors={colors}
            Icon={Quote}
            title="Add a prompt"
            subtitle="Show off your personality."
            badge="+10%"
          />
          <ActionItem
            colors={colors}
            Icon={ShieldCheck}
            title="Get verified"
            subtitle="Verify your profile to build trust."
            badge="+8%"
            onPress={() => router.push("../(account-panel)/verify-email")}
          />
        </View>

        {/* Features Grid */}
        <View className="flex-row px-4 justify-between mb-8">
          <FeatureCard
            colors={colors}
            Icon={Star}
            color="#32B6E1"
            label="Super Likes"
            subLabel="GET MORE"
          />
          <FeatureCard
            colors={colors}
            Icon={Zap}
            color="#A655FF"
            label="My Boosts"
            subLabel="GET MORE"
          />
          <FeatureCard
            colors={colors}
            Icon={Flame}
            color={colors.tint}
            label="Subscriptions"
            subLabel=""
          />
        </View>

        {/* Gold Card */}
        <View className="px-4 mb-10">
          <LinearGradient
            colors={isDark ? ["#1c1f21", "#111314"] : ["#FFFFFF", "#F9F9F9"]}
            style={{ borderColor: "#D4AF3740", borderWidth: 1 }}
            className="p-6"
          >
            <View className="flex-row justify-between items-start mb-6">
              <View className="flex-row items-center">
                <Flame color="#D4AF37" fill="#D4AF37" size={24} />
                <Text
                  style={{ color: colors.text }}
                  className="text-2xl font-black ml-2"
                >
                  Date Now
                </Text>
                <View className="bg-[#D4AF37] px-1.5 py-0.5 rounded ml-1">
                  <Text className="text-[10px] font-bold text-black">GOLD</Text>
                </View>
              </View>
              <TouchableOpacity className="bg-[#D4AF37] px-5 py-2 rounded-full">
                <Text className="font-bold text-black text-xs uppercase">
                  Upgrade
                </Text>
              </TouchableOpacity>
            </View>

            <View className="gap-y-7">
              <View
                style={{ borderBottomColor: colors.border }}
                className="flex-row justify-between border-b pb-2"
              >
                <Text
                  style={{ color: colors.text }}
                  className="font-bold text-sm"
                >
                  What&apos;s Included
                </Text>
                <View className="flex-row w-24 justify-between">
                  <Text
                    style={{ color: colors.icon }}
                    className="text-[10px] font-bold uppercase"
                  >
                    Free
                  </Text>
                  <Text className="text-[#D4AF37] text-[10px] font-bold uppercase">
                    Gold
                  </Text>
                </View>
              </View>
              <TableRow
                colors={colors}
                label="See Who Likes You"
                free={false}
                gold={true}
              />
              <TableRow
                colors={colors}
                label="Top Picks"
                free={false}
                gold={true}
              />
              <TableRow
                colors={colors}
                label="Free Super Likes"
                free={false}
                gold={true}
              />
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </CleanView>
  );
}

function ActionItem({ colors, Icon, title, subtitle, badge, onPress }: any) {
  return (
    <TouchableOpacity
      style={{ backgroundColor: colors.background, borderColor: colors.border }}
      className="p-4 rounded-2xl flex-row items-center border"
      onPress={onPress}
    >
      <View className="relative mr-4">
        <View
          style={{ backgroundColor: colors.tint + "15" }}
          className="w-12 h-12 rounded-xl items-center justify-center"
        >
          <Icon color={colors.tint} size={24} />
        </View>
        <View
          style={{
            backgroundColor: colors.tint,
            borderColor: colors.background,
          }}
          className="absolute -bottom-1 left-2 rounded-full px-1 border-2"
        >
          <Text className="text-[8px] text-white font-black">{badge}</Text>
        </View>
      </View>
      <View className="flex-1">
        <Text style={{ color: colors.text }} className="font-bold text-sm">
          {title}
        </Text>
        <Text
          style={{ color: colors.icon }}
          className="text-[11px]"
          numberOfLines={1}
        >
          {subtitle}
        </Text>
      </View>
      <View
        style={{ borderColor: colors.border }}
        className="w-7 h-7 rounded-full border-2 border-dashed items-center justify-center"
      >
        <Plus color={colors.tabIconDefault} size={16} />
      </View>
    </TouchableOpacity>
  );
}

function FeatureCard({ colors, Icon, color, label, subLabel }: any) {
  return (
    <TouchableOpacity
      style={{ backgroundColor: colors.background, borderColor: colors.border }}
      className="w-[31%] p-4 rounded-2xl items-center border"
    >
      <View
        style={{ backgroundColor: colors.border }}
        className="absolute -top-2 -right-2 rounded-full p-1"
      >
        <Plus color={colors.text} size={10} />
      </View>
      <Icon color={color} fill={color} size={26} className="mb-3" />
      <Text
        style={{ color: colors.icon }}
        className="text-[9px] font-bold text-center uppercase mb-1"
      >
        {label}
      </Text>
      {subLabel && (
        <Text
          style={{ color }}
          className="text-[9px] font-black tracking-widest"
        >
          {subLabel}
        </Text>
      )}
    </TouchableOpacity>
  );
}

function TableRow({ colors, label, free, gold }: any) {
  return (
    <View className="flex-row justify-between items-center">
      <Text
        style={{ color: colors.text }}
        className="text-xs font-medium opacity-80"
      >
        {label}
      </Text>
      <View className="flex-row w-24 justify-between items-center">
        <View className="w-10 items-center">
          {!free ? (
            <Lock color={colors.tabIconDefault} size={14} />
          ) : (
            <Check color={colors.tabIconDefault} size={14} />
          )}
        </View>
        <View className="w-10 items-center">
          {gold && <Check color="#D4AF37" size={18} strokeWidth={3} />}
        </View>
      </View>
    </View>
  );
}
