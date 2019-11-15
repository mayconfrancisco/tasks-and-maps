import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Login from '~/pages/Login';

const mavigationProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Login', () => {
  let renderRef = {};
  beforeEach(() => {
    renderRef = render(<Login {...mavigationProps} />);
  });

  it('should exists name field', () => {
    const nameInput = renderRef.getByTestId('name-input');
    expect(nameInput).toBeTruthy();
  });

  it('should be possible to add the name', () => {
    const name = 'maycon';
    const nameInput = renderRef.getByTestId('name-input');

    fireEvent.changeText(nameInput, name);
    expect(nameInput).toHaveProp('value', name);
  });

  it('should exists enter button', () => {
    expect(renderRef.getByTestId('enter-button')).toBeTruthy();
  });

  it('it should be disabled if empty', () => {
    fireEvent.changeText(renderRef.getByTestId('name-input'), '');
    expect(renderRef.getByTestId('enter-button')).toBeDisabled();
  });

  it('it should be disabled if capitalized', () => {
    fireEvent.changeText(renderRef.getByTestId('name-input'), 'MaYcOn');
    expect(renderRef.getByTestId('enter-button')).toBeDisabled();
  });

  it('should enable only if filled with lowercase letters', () => {
    fireEvent.changeText(renderRef.getByTestId('name-input'), 'maycon');
    expect(renderRef.getByTestId('enter-button')).toBeEnabled();
  });
});
