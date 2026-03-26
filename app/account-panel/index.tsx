import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const loc = "(tabs)";
  return (
    <SafeAreaView>
      <Text className="text-white">1234sjfvjijviov</Text>
      <TouchableOpacity className="bg-orange-500" onPress={() => router.push(loc)}>
        <Text className="text-white">ROUTE TO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
