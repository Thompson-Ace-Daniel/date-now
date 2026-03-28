import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function CleanView({children}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  return (
    <SafeAreaView className="flex-1 m-0 p-0" style={{backgroundColor: colors.background}}>
      {children}
    </SafeAreaView>
  );
}
