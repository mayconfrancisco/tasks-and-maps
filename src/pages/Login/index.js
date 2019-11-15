import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerKeyboard,
  Presentation,
  Title,
  Image,
  Form,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';

export default function Login({ navigation }) {
  const [name, setName] = useState('');
  const submitDisabled = useMemo(() => /^\s*$|[A-Z]/.test(name), [name]);

  function onSubmit() {
    if (!submitDisabled) {
      navigation.navigate('Task');
    }
  }

  return (
    <Container>
      <Title>Tarefa fácil</Title>
      <ContainerKeyboard>
        <Presentation>
          <Image type="MaterialIcons" name="assignment" />
        </Presentation>
        <Form>
          <Input
            value={name}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setName}
            placeholder="Digite seu nome"
            returnKeyType="send"
            onSubmitEditing={onSubmit}
            testID="name-input"
          />

          <SubmitButton
            onPress={onSubmit}
            disabled={submitDisabled}
            testID="enter-button">
            <SubmitText>Entrar</SubmitText>
          </SubmitButton>
        </Form>
      </ContainerKeyboard>
    </Container>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
