import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function TextLink({ label, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{label}</Text>
    </TouchableOpacity>
  );
}
