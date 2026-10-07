import React from 'react';
import { View, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => router.back()}
        style={({ pressed }) => [
          styles.buttonBack,
          pressed && styles.buttonBackPressionado,
        ]}
      >
        <Image source={require('../assets/images/voltar.png')} />
      </Pressable>

      <Image
        source={require('../assets/images/logo-positiva.png')}
        style={styles.imageLogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  buttonBack: {
    padding: 5,
  },

  buttonBackPressionado: {
    opacity: 0.6,
  },

  imageLogo: {
    marginTop: 20,
    right: 140,
  },
});