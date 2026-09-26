import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardFilme from '../components/CardFilme';

const filmes = [
  {
    id: '1',
    titulo: 'Piratas do Caribe: O Baú da Morte',    
    ano: '2006',
    genero: 'Aventura/Ação',
    imagem: require('../assets/images/piratas.png'),
  },
  {
    id: '2',
    titulo: 'Harry Potter e a Pedra Filosofal',    
    ano: '2001',
    genero: 'Infantil/Fantasia',
    imagem: require('../assets/images/harry-potter.png'),
  },
  {
    id: '3',
    titulo: 'O Senhor dos Anéis: as Duas Torres',    
    ano: '2003',
    genero: 'Aventura/Fantasia',
    imagem: require('../assets/images/senhos-aneis.png'),
  },
  {
    id: '4',
    titulo: 'Avatar',    
    ano: '2009',
    genero: 'Ficção científica/Ação',
    imagem: require('../assets/images/Avatar.png'),
  },
  {
    id: '5',
    titulo: 'Donzela',    
    ano: '2024',
    genero: 'Ação/Aventura',
    imagem: require('../assets/images/Donzela.png'),
  },
  {
    id: '6',
    titulo: 'Wicked',    
    ano: '2024',
    genero: 'Musical/Fantasia',
    imagem: require('../assets/images/Wicked.png'),
  },
];

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

      <View style={styles.titleContainer}>
        <Image source={require("../assets/images/camera.png")} style={styles.imageCamera} />
        <Text style={styles.text}>Catálogo</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {filmes.map((filme) => (
          <CardFilme
            key={filme.id}
            titulo={filme.titulo}
            ano={filme.ano}
            genero={filme.genero}
            imagem={filme.imagem}
            onPressDetalhes={() => router.push({ pathname: '/detalhes-filme', params: { id: filme.id } })}
          />
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Image source={require("../assets/images/logo-solo-positivo.png")} style={styles.logo} />

        <TouchableOpacity 
          onPress={() => router.push('/sobre')}
          style={styles.button}
        >
          <Image source={require("../assets/images/sobre.png")} style={styles.imageSobre} />
        </TouchableOpacity>
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
  titleContainer: {
    flexDirection: 'row',      
    alignItems: 'center',      
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 15,          
    gap: 10,                  
  },
  imageCamera: { 
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scroll: { 
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  logo: {
    width: 40,
    height: 40,
  },
  button: {
    backgroundColor: '#D5FFDA',
    width: 56,
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSobre: {
    width: 30,
    height: 30,
  },
  imageLogo: {
    marginTop: 20,
    right: 140,
  },  
});