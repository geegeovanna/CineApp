import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SobreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Esta é a tela Sobre!</Text>
      {/* Voltar para a tela anterior */}
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});