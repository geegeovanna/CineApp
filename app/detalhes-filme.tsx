import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SobreScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.buttonBack}
        >
          <Image source={require("../assets/images/voltar.png")} />
        </TouchableOpacity>
        
        <Image source={require("../assets/images/logo-positiva.png")} style={styles.imageLogo} />
      </View>
      <View>
        <Image source={require("../assets/images/piratas-detalhe.png")} style={styles.imageDetalhe} />

        <Text style={styles.textTitulo}>Piratas do caribe: o baú da morte</Text>

        <View style={styles.viewDescricao}>
          <View style={styles.viewDescricaoContent}>
            <Text style={styles.textDescricao}>DURAÇÃO</Text>
            <Text style={styles.textDescricaoTempo}>2h 40min</Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000000',
  },
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
  imageLogo: {
    marginTop: 20,
    right: 140,
  },  
  imageDetalhe: {
    alignContent: 'center',
    marginTop: 20,
    width: 350,
    height: 280,
    left: 20,
    elevation: 5,
    shadowColor: '#fe0d0dff',
  },
  textTitulo: {
    color: '#D5FFDA',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 20,
    left: 20,
  },
  viewDescricao: {
    marginTop: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.11)',
    width: 170,
    height: 50,
    borderRadius: 50,
  },
  viewDescricaoContent: {
    backgroundColor:'rgba(213, 255, 218, 0.21)',
    width: 90,
    height: 30,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  textDescricao: {
    color: '#D5FFDA',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  textDescricaoTempo: {
    color: '#ffffff',
    fontSize: 14, 
    marginTop: -20,
    left: 90,
  }
});