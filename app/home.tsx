import { View, Text, Button } from "react-native";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome Home!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
