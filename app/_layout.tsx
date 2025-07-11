import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#333" },
        headerTintColor: "#fff",
      }}
    />
  );
}
