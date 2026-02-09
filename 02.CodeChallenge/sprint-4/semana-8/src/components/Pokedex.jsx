import React, { useState, useEffect } from 'react';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(res => {
        if (!res.ok) throw new Error('Error ' + res.status);
        return res.json();
      })
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        setPokemon(null);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pokemon || (Array.isArray(pokemon) && pokemon.length === 0)) return <p>No hay datos</p>;

  return <h1>{pokemon?.name}</h1>;
}
