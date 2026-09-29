import { View, StyleSheet, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DetalheFilmeProps {
  titulo: string;
  duracao: string;
  genero: string;
  sinopse: string;
  imagemDetalhe: ImageSourcePropType;
}

export default function DetalheFilme({
  titulo,
  duracao,
  genero,
  sinopse,
  imagemDetalhe,
}: DetalheFilmeProps) {
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
        <Image source={imagemDetalhe} style={styles.imageDetalhe} />

        <Text style={styles.textTitulo}>{titulo}</Text>

        <View style={{ flexDirection: 'row', marginTop: 10, gap: 10, marginLeft: -7 }}>
          <View style={styles.viewDescricao}>
            <View style={styles.viewDescricaoContent}>
              <Text style={styles.textDescricao}>DURAÇÃO</Text>
              <Text style={styles.textDescricaoTempo}>{duracao}</Text>
            </View>
          </View>

          <View style={styles.viewDescricaoGenero}>
            <View style={styles.viewDescricaoContentGenero}>
              <Text style={styles.textDescricao}>GÊNERO</Text>
              <Text style={styles.textDescricaoGenero}>{genero}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.textSinopse}>Sinopse</Text>
          <Text style={styles.textDescricaoSinopse}>{sinopse}</Text>
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
    width: 180,
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
    left: 100,
  },
  viewDescricaoContentGenero: {
    backgroundColor:'rgba(213, 255, 218, 0.21)',
    width: 80,
    height: 30,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  viewDescricaoGenero: {
    marginTop: 20,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.11)',
    width: 170,
    height: 50,
    borderRadius: 50,
  },
  textDescricaoGenero: {
    color: '#ffffff',
    fontSize: 14, 
    marginTop: -20,
    left: 90,
  },
  textSinopse: {
    color: '#D5FFDA',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    left: 20,
  },
  textDescricaoSinopse: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'normal',
    marginHorizontal: 20,
  }
});