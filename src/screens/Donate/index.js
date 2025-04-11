import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Label from '../../components/Label';
import styles from './styles';

export default function DoacaoScreen() {
  const handleConfirm = () => {
    // lógica para confirmação da doação
    console.log('Doação confirmada!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Sua doação transforma vidas! Contribua com qualquer valor e faça a diferença hoje mesmo.
        </Text>
      </View>

      <View style={styles.content}>
        {/* Projeto */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projeto beneficiado</Text>
          <View style={styles.projetoCard}>
            <Text style={styles.projetoTitulo}>Projeto Todas Por Todos</Text>
            <Text style={styles.projetoInfo}>Banco - 0002 1887 2532</Text>
          </View>
        </View>

        {/* Valor */}
        <View style={styles.section}>
          <Label text="Valor"/>
          <Input placeholder="R$" />
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Label text="Descrição" />
          <Input placeholder="Adicione uma mensagem ou comentário..." />
        </View>

        {/* Pagamento */}
        <View style={styles.section}>
          <Label text="Escolha o método de pagamento" />
          <View style={styles.paymentOptions}>
            <View style={styles.paymentCard}>
              <Text style={styles.paymentText}>PIX</Text>
            </View>
            <View style={[styles.paymentCard, styles.whiteCard]}>
              <Text style={styles.paymentText}>Boleto</Text>
            </View>
          </View>
        </View>

        {/* Documento */}
        <View style={styles.section}>
          <Label text="Documento" />
          <Input placeholder="CPF" />
          <Label text="Número do documento" />
          <Input placeholder="000.000.000-00" />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title="Confirmar" onPress={handleConfirm} />
        </View>
      </View>
    </ScrollView>
  );
}
