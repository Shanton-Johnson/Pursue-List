import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../../lib/supabase";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    else router.replace("/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Link href="/(auth)/register">
        <Text style={{ marginTop: 20, color: "blue" }}>
          Don't have an account? Register
        </Text>
      </Link>
    </View>
  );
}
