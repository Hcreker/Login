import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Inicio Daora</Text>
      <Text style={styles.header}>Notícias Daoras</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Simulação de dados de notícias
const newsData = [
  { id: '1', title: 'Últimas Notícias sobre Tecnologia', description: 'Novidades e avanços no mundo da tecnologia.' },
  { id: '2', title: 'Mercado Financeiro em Alta', description: 'Análise do desempenho do mercado financeiro.' },
  { id: '3', title: 'Dicas de Viagem para o Verão', description: 'Melhores destinos e dicas para suas férias.' },
  { id: '4', title: 'Nova Atualização de Software Disponível', description: 'Detalhes sobre a mais recente versão do software.' },
  { id: '5', title: 'Receitas Deliciosas para o Fim de Semana', description: 'Ideias de pratos saborosos para você preparar.' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3EF', 
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  texto: {
    color: '#6D4C41', 
    fontSize: 18,
    marginBottom: 10,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#A88B73', 
    borderColor: '#6D4C41',     
    borderWidth: 3,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',    
    color: '#FFFFFF',
  },

  newsItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BCAAA4', 
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E342E', 
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    color: '#6D4C41', 
  },
});