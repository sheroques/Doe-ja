import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import Button from '../../components/Button';
import TextLink from '../../components/TextLink';

export default function Onboarding({ goToLogin, goToSignup }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/onboradingimage.png')} style={styles.image} />

      <Text style={styles.title}>Crie sua conta DoeJá!</Text>

      <Text style={styles.subtitle}>
        Junte-se a nós e apoie causas que fazem a diferença. Doe, conecte-se com ONGs e ajude a mudar vidas de forma simples e segura.
      </Text>

      <Text style={styles.terms}>
        Ao utilizar nosso aplicativo, você concorda com nossos{' '}
        <TextLink label="Termos e Condições" onPress={() => {}} style={styles.link} />{' '}
        e a{' '}
        <TextLink label="Política de Privacidade" onPress={() => {}} style={styles.link} />.
      </Text>


      <Button title="Cadastre-se" onPress={goToSignup} />

      <Button title="Entrar" onPress={goToLogin} variant="outline" />

    </View>
  );
}

