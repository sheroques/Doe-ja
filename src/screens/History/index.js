import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import NavBar from '../../components/Navbar/index';

const donations = [
  { id: '1', project: 'Projeto Todas por Todos', date: '01/04/2024', amount: 'R$200,00' },
  { id: '2', project: 'Projeto Todas por Todos', date: '01/04/2024', amount: 'R$20,00' },
  { id: '3', project: 'Projeto Todas por Todos', date: '01/04/2024', amount: 'R$55,00' },
];

const History = ({ goToHome, goToHistory, goToProfile }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Histórico</Text>

      <Text style={styles.subHeader}>Suas últimas doações</Text>
      
      <FlatList
        data={donations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.project}>{item.project}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        )}
      />

      <NavBar 
        goToHome={goToHome}
        goToHistory={goToHistory}
        goToProfile={goToProfile}
      />
    </View>
  );
};

export default History;
