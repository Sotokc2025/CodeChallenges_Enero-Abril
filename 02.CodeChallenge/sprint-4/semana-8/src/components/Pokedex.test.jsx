import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import Pokedex from './Pokedex';

test('muestra mensaje de error cuando fetch falla', async () => {
  const mockFetch = vi.spyOn(window, 'fetch').mockRejectedValue(new Error('Error de red'));

  render(<Pokedex />);

  const errorMsg = await screen.findByText(/Error: Error de red/i);
  expect(errorMsg).toBeInTheDocument();

  mockFetch.mockRestore();
});

test('muestra el pokemon cuando fetch tiene éxito', async () => {
  const mockFetch = vi.spyOn(window, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ name: 'pikachu' })
  });

  render(<Pokedex />);

  const pokemonName = await screen.findByText(/pikachu/i);
  expect(pokemonName).toBeInTheDocument();

  mockFetch.mockRestore();
});

test('muestra No hay datos cuando la respuesta está vacía', async () => {
  const mockFetch = vi.spyOn(window, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => []
  });

  render(<Pokedex />);

  const emptyMsg = await screen.findByText(/No hay datos/i);
  expect(emptyMsg).toBeInTheDocument();

  mockFetch.mockRestore();
});

test('muestra mensaje de error para 404', async () => {
  const mockFetch = vi.spyOn(window, 'fetch').mockResolvedValue({
    ok: false,
    status: 404
  });

  render(<Pokedex />);

  const errorMsg = await screen.findByText(/Error: Error 404/i);
  expect(errorMsg).toBeInTheDocument();

  mockFetch.mockRestore();
});

test('muestra loading antes de la respuesta (simulación de retraso)', async () => {
  let resolveFetch;
  const fetchPromise = new Promise((res) => { resolveFetch = res; });

  const mockFetch = vi.spyOn(window, 'fetch').mockImplementation(() => fetchPromise);

  render(<Pokedex />);

  expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();

  // resolver la promesa del fetch para simular llegada de datos
  resolveFetch({ ok: true, json: async () => ({ name: 'bulbasaur' }) });

  const name = await screen.findByText(/bulbasaur/i);
  expect(name).toBeInTheDocument();

  mockFetch.mockRestore();
});
