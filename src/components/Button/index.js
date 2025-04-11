import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Button({ title, onPress, variant = 'filled', size = 'default' }) {
  const getButtonStyle = () => {
    const base = [];

    // Aplica o estilo de tamanho
    if (size === 'small') {
      base.push(styles.small);
    } else {
      base.push(styles.base);
    }

    // Aplica o estilo visual (filled ou outline)
    if (variant === 'filled') base.push(styles.filled);
    if (variant === 'outline') base.push(styles.outline);

    return base;
  };

  const getTextStyle = () => {
    if (size === 'small') {
      return variant === 'outline' ? styles.textOutline : styles.textSmall;
    }
    return variant === 'outline' ? styles.textOutline : styles.textFilled;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}
