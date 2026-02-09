import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Saludo from './Saludo';

test('muestra el mensaje inicial', () => {
  render(<Saludo />);
  const texto = screen.getByText('Hola Mundo');
  expect(texto).toBeInTheDocument();
});

test('cambia el mensaje al hacer clic en el botón', () => {
  render(<Saludo />);
  const boton = screen.getByText('Cambiar saludo');
  fireEvent.click(boton);
  const nuevoTexto = screen.getByText('Adiós');
  expect(nuevoTexto).toBeInTheDocument();
});

test('el botón existe en el documento', () => {
  render(<Saludo />);
  const boton = screen.getByRole('button', { name: /cambiar saludo/i });
  expect(boton).toBeInTheDocument();
});
