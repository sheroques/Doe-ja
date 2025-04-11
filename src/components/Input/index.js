import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function Input({ placeholder, secureTextEntry, keyboardType, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#A0AEC0"
    />
  );
}
