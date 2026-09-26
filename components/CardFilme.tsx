import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CardFilmeProps {
  titulo: string;
  ano: string;
  genero: string;
  imagem: ImageSourcePropType;
  onPressDetalhes?: () => void;
}

export default function CardFilme({
  titulo,
  ano,
  genero,
  imagem,
  onPressDetalhes,
}: CardFilmeProps) {
  const [isFavorito, setIsFavorito] = useState(false);
  return (

    <Pressable
      style={styles.card}
    >
      <Image source={imagem} style={styles.capa} resizeMode="cover" />

      <View style={styles.infoContainer}>
        <Text style={styles.titulo} numberOfLines={2}>
          {titulo}
        </Text>

        <Text style={styles.texto}>
          <Text style={styles.label}>Ano de lançamento: </Text>
          {ano}
        </Text>

        <Text style={styles.texto}>
          <Text style={styles.label}>Gênero: </Text>
          {genero}
        </Text>

        <View style={styles.acoesContainer}>
          <TouchableOpacity 
            onPress={() => setIsFavorito(!isFavorito)} 
            activeOpacity={0.7}
          >
            <Ionicons 
              name={isFavorito ? "heart" : "heart-outline"} 
              size={32} 
              color="#D1FFD7" 
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoDetalhes}
            onPress={onPressDetalhes}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotao}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#000000', 
    overflow: 'hidden',
    marginVertical: 10,
    height: 180,
    width: 350,
  },
  cardHovered: {
    backgroundColor: '#2A2A2A', 
    borderColor: '#2A2A2A',     
  },
  capa: {
    width: 120,
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  titulo: {
    color: '#D1FFD7',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto: {
    color: '#FFF',
    fontSize: 14,
  },
  label: {
    fontWeight: 'bold',
  },
  acoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  botaoDetalhes: {
    backgroundColor: '#D1FFD7',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});