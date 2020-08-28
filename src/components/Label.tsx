import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  isRequired?: boolean;
  style?: object | object[];
}

export default function Label(props: Props) {
  return (
    <Text style={styles.asterik}>
      {props.isRequired ? '*' : ''}
      <Text style={[styles.label, props.style]}>{props.text}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  asterik: {
    color: 'red',
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
