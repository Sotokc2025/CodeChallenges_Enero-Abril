import { useState, useEffect } from 'react';

const Pokedex = ({ limit = 10 }) => {
    // Paso 1: Define el estado para guardar la lista de Pokémon
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para mostrar el mensaje de carga

    // Paso 2: usar useEffect para ejecutar código al inicio
    useEffect(() => {
        console.log('El componente se montó');
        setIsLoading(true); // Activa el estado de carga

        // Paso 3: Llama a la API de Pokémon con el límite dinámico
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then(response => response.json()) // Convierte la respuesta a JSON
            .then(data => {
                console.log(data); // Observa la estructura de los datos
                setPokemons(data.results); // Paso 4: Guarda los datos en el estado
                setIsLoading(false); // Desactiva el estado de carga
            });
    }, [limit]); // El efecto se ejecuta cuando cambia el límite

    // Paso 5: Renderiza los datos en pantalla
    return (
        <div>
            <h1>Pokedex</h1>
            {isLoading ? (
                <p>Cargando...</p> // Muestra el mensaje de carga
            ) : (
                <>
                    <p>Total de Pokémon cargados: {pokemons.length}</p>
                    <ul>
                        {pokemons.map((pokemon, index) => (
                            <li key={index}>{pokemon.name}</li> // Usa el nombre como contenido
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Pokedex;

