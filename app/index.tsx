import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
 
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      <Image source={require("../assets/images/logo-solo.png")} style={styles.logoSolo} />
      <View style={styles.quadrado}>
        <Text style={styles.title}>Descobre, explora e guarda os melhores títulos do cinema!</Text>
        <Image source={require("../assets/images/amico.png")} style={styles.image} />
        <Pressable 
          onPress={() => router.push('/catalogo-filmes')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressionado
          ]}
        >
          <Text style={styles.buttonText}>Catálogo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5FFDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quadrado: {
    width: '100%',
    height: 660,
    backgroundColor: '#000000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 70,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    maxWidth: 250,
    top: 25,
  },
  image: {
    width: 210,
    height: 193,
    top: 90,
  },
  button: {
    backgroundColor: '#D5FFDA',
    padding: 10,
    borderRadius: 5,
    marginTop: 180,
    width: 220,
    height: 50,
  },
  buttonPressionado: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
  },
  logo: {
    top: 20
  },
  logoSolo: {
    top: -50,
    left: 150
  }
});