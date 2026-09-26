import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="catalogo-filmes" />
      <Stack.Screen name="detalhes-filmes" />
      <Stack.Screen name="sobre" />
    </Stack>
  );
}