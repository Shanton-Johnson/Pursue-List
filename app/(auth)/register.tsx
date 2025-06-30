import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { supabase } from "../../lib/supabase";
import { Link, useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    else {
      Alert.alert("Success", "Check your email for confirmation.");
      router.replace("/(auth)/login");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>
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
      <Button title="Register" onPress={handleRegister} />
      <Link href="/(auth)/login">
        <Text style={{ marginTop: 20, color: "blue" }}>
          Already have an account? Login
        </Text>
      </Link>
    </View>
  );
}
