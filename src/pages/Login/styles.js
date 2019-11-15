import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Icon } from 'native-base';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerKeyboard = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Presentation = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 16px;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
`;

export const Image = styled(Icon).attrs(props => ({
  type: props.type,
  name: props.name,
}))`
  font-size: 220px;
  color: #444;
`;

export const Form = styled.View`
  padding: 16px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.8)',
})`
  height: 54px;
  font-size: 18px;
  padding: 0 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.disabled ? '#aaa' : '#000080')};
  height: 54px;
  border-radius: 5px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
