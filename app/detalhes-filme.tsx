import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

const dadosFilmes = {
  '1': {
    titulo: 'Piratas do caribe: o baú da morte',
    duracao: '2h 31min',
    genero: 'Aventura',
    sinopse: 'Will e Elizabeth estão prestes a se casar quando o lendário pirata Davy Jones, comandante de um invencível navio assombrado, aparece para cobrar uma dívida do capitão Jack Sparrow, amigo do casal. Agora, a única chance de Sparrow se livrar de uma maldição de Jones é encontrando o baú da morte.',
    imagemDetalhe: require('../assets/images/piratas-detalhe.png'),
  },
  '2': {
    titulo: 'Harry Potter e a Pedra Filosofal',
    duracao: '2h 32min',
    genero: 'Fantasia',
    sinopse: 'Harry Potter é um garoto órfão que descobre ser bruxo ao ser convidado para estudar em Hogwarts. Ao lado dos amigos Rony e Hermione, ele entra em um mundo mágico repleto de aventuras.',
    imagemDetalhe: require('../assets/images/hp.jpg'),
  },
  '3': {
    titulo: 'O Senhor dos Anéis: as Duas Torres',
    duracao: '2h 59min',
    genero: 'Fantasia',
    sinopse: 'Após a captura de Merry e Pippin pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Théoden foi vítima de uma maldição mortal de Saruman.',
    imagemDetalhe: require('../assets/images/senhor.jpg'),
  },
  '4': {
    titulo: 'Avatar',
    duracao: '2h 42min',
    genero: 'Ação',
    sinopse: "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar por meio de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora.",
    imagemDetalhe: require('../assets/images/av.jpg'),
  },
  '5': {
    titulo: 'Donzela',
    duracao: '1h 50min',
    genero: 'Aventura',
    sinopse: 'Uma jovem concorda em se casar com um belo príncipe, apenas para descobrir que tudo não passou de uma armadilha. Ela é jogada em uma caverna com um dragão cuspidor de fogo e deve confiar apenas em sua inteligência e vontade para sobreviver.',
    imagemDetalhe: require('../assets/images/donz.jpg'),
  },
  '6': {
    titulo: 'Wicked',
    duracao: '2h 40min',
    genero: 'Fantasia',
    sinopse: 'Wicked: A História Não Contada das Bruxas de Oz é um musical composto por Stephen Schwartz com libreto de Winnie Holzman. A obra é baseada no romance de 1995 de Gregory Maguire, Wicked: The Life and Times of the Wicked Witch of the West, por sua vez baseado no livro de L.',
    imagemDetalhe: require('../assets/images/wi.jpg'),
  },
};

export default function TelaDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filme = dadosFilmes[id as keyof typeof dadosFilmes] || dadosFilmes['1'];

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View>
        <Image source={filme.imagemDetalhe} style={styles.imageDetalhe} />

        <Text style={styles.textTitulo}>{filme.titulo}</Text>

        <View style={{ flexDirection: 'row', marginTop: 10, gap: 10, marginLeft: -7 }}>
          <View style={styles.viewDescricao}>
            <View style={styles.viewDescricaoContent}>
              <Text style={styles.textDescricao}>DURAÇÃO</Text>
              <Text style={styles.textDescricaoTempo}>{filme.duracao}</Text>
            </View>
          </View>

          <View style={styles.viewDescricaoGenero}>
            <View style={styles.viewDescricaoContentGenero}>
              <Text style={styles.textDescricao}>GÊNERO</Text>
              <Text style={styles.textDescricaoGenero}>{filme.genero}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.textSinopse}>Sinopse</Text>
          <Text style={styles.textDescricaoSinopse}>{filme.sinopse}</Text>
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