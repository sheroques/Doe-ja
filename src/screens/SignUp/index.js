import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';
import ImageGroup from '../../assets/signupimage.png';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import TextLink from '../../components/TextLink';

export default function Signup({ goBack, goToLogin, goToHome }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Image source={ImageGroup} style={styles.image} />
        <Text style={styles.title}>Crie uma conta</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Label>Nome</Label>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.formGroup}>
          <Label>Email</Label>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Label>Senha</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        </View>

        <View style={styles.formGroup}>
          <Label>Confirme sua senha</Label>
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirme sua senha"
            secureTextEntry
          />
        </View>
      </View>

      <Button title="Cadastrar" onPress={goToLogin} />

      <TextLink
        label="Já tem uma conta? Entrar"
        onPress={goBack}
        style={styles.loginText}
      />
    </ScrollView>
  );
}
