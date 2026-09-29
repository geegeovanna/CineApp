import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import DetalheFilme from '../components/DetalheFilme';

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
    <DetalheFilme
      titulo={filme.titulo}
      duracao={filme.duracao}
      genero={filme.genero}
      sinopse={filme.sinopse}
      imagemDetalhe={filme.imagemDetalhe}
    />
  );
}