import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import TextLink from '../../components/TextLink';

export default function Login({ goBack, goToSignup, goToHome }) {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/loginimage.png')} style={styles.image} />

      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <View style={styles.formGroup}>
        <Label>Email</Label>
        <Input
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formGroup}>
        <Label>Senha</Label>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>

      <Button title="Entrar" onPress={goToHome} />


      <TextLink label="Não tem uma conta? Cadastre-se" onPress={goToSignup} />

      <TextLink label="Voltar" onPress={goBack} style={styles.backText} />
    </View>
  );
}
