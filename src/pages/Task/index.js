import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function Task({ navigation }) {
  return (
    <>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sponsor')}>
        <Text>Click to Sponsor</Text>
      </TouchableOpacity>
    </>
  );
}
