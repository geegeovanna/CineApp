import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity onPress={() => router.push('/catalogo-filmes')}
        style={styles.button}>
          <Text style={styles.buttonText}>Catálogo</Text>
        </TouchableOpacity>
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
    height: 630,
    backgroundColor: '#000000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 70,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    maxWidth: 250,
    top: 25,
    left: 60,
  },
  image: {
    width: 210,
    height: 193,
    top: 90,
    left: 80,
  },
  button: {
    backgroundColor: '#D5FFDA',
    padding: 10,
    borderRadius: 5,
    marginTop: 180,
    width: 220,
    height: 50,
    left: 80,
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