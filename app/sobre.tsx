import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

export default function SobreScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardHeader}>
          <View style={styles.contentItem}>
            <Image source={require("../assets/images/logo-solo-positivo.png")} style={styles.imageLogoSolo} />
          </View>
          <View style={styles.cardHeaderTexts}>
            <Text style={styles.textSobre}>SOBRE O APP</Text>
            <Text style={styles.textOrbis}>ORBIS</Text>
          </View>
        </View>

        <View style={styles.infoTitleContainer}>
          <Image source={require("../assets/images/info.png")} style={styles.imageInfo} />
          <Text style={styles.info}>Informações</Text>
        </View>
        
        <Text style={styles.textInfo}>
          O ORBIS é um aplicativo de catálogo de filmes desenvolvido como projeto da disciplina de Programação para dispositivos móveis. Veja abaixo os detalhes do app.
        </Text>

        <View style={styles.descriptionCard}>
          <View style={styles.row}>
            <Text style={styles.title}>NOME</Text>
            <Text style={styles.textValue}>ORBIS</Text>
          </View>

          <View style={styles.linhaHorizontal} />

          <View style={styles.row}>
            <Text style={styles.title}>FINALIDADE</Text>
            <Text style={[styles.textValue, styles.textDisciplina]}>Catálogo e interação com filmes</Text>
          </View> 

          <View style={styles.linhaHorizontal} />

          <View style={styles.row}>
            <Text style={styles.title}>VERSÃO</Text>
            <Text style={styles.textValue}>1.0.0</Text>
          </View>

          <View style={styles.linhaHorizontal} />

          <View style={styles.row}>
            <Text style={styles.title}>DISCIPLINA</Text>
            <Text style={[styles.textValue, styles.textDisciplina]}>
              Programação para dispositivos móveis
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 16,
    marginTop: 15,
    elevation: 8,
    shadowColor: '#D5FFDA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  contentItem: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(213, 255, 218, 0.3)',
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  imageLogoSolo: {
    width: 30,
    height: 30,
  },
  cardHeaderTexts: {
    marginLeft: 16,
  },
  textSobre: {
    color: '#D5FFDA',
    fontSize: 14,
  },
  textOrbis: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  infoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    gap: 10,
  },
  imageInfo: {
    width: 26,
    height: 26,
  },
  info: {
    color: '#FFFFFF',
    fontSize: 20, 
    fontWeight: 'bold',
  },
  textInfo: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 30,
  },
  descriptionCard: {
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
    marginTop: 50,
    elevation: 8,
    shadowColor: '#D5FFDA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  linhaHorizontal: {
    borderBottomColor: 'rgba(213, 255, 218, 0.15)',
    borderBottomWidth: 1, 
    height: 1,
    width: '100%',
  },
  title: {
    color: '#D5FFDA',
    fontSize: 15, 
    fontWeight: 'bold',
  },
  textValue: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'right',
  },
  textDisciplina: {
    maxWidth: 180, 
  },
});