import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  return (
    <>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Task')}>
        <Text>Click to Task</Text>
      </TouchableOpacity>
    </>
  );
}
