# Pokedex Minimalista

## Descripción

Aplicación web desarrollada en React que muestra una lista de Pokémon consumiendo datos desde la [PokeAPI](https://pokeapi.co/). Este proyecto es parte del Sprint 1 - Semana 1, enfocado en el aprendizaje de consumo de datos y efectos en React.

## Objetivo de Aprendizaje

Comprender cómo se cargan datos de una API en React utilizando:
- `fetch` para realizar peticiones HTTP
- `useState` para gestionar el estado del componente
- `useEffect` para manejar efectos secundarios y el ciclo de vida

## Características

-  Carga de datos desde PokeAPI
-  Visualización de lista de Pokémon
-  Estado de carga mientras se obtienen los datos
-  Límite configurable de Pokémon a mostrar
-  Contador de Pokémon cargados

## Tecnologías Utilizadas

- **React** 19.2.3
- **React DOM** 19.2.3
- **React Scripts** 5.0.1
- **PokeAPI** (API pública)

## Estructura del Proyecto

```
sprint-1/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.jsx
│   │   │   └── App.css
│   │   └── Pokedex.jsx
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
└── README.md
```

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio o navega a la carpeta del proyecto:
```bash
cd sprint-1/sprint-1
```

2. Instala las dependencias:
```bash
npm install
```

### Ejecución

Para iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### Otros Comandos

```bash
# Ejecutar tests
npm test

# Crear build de producción
npm run build

# Exponer configuración de Create React App (irreversible)
npm run eject
```

## Conceptos Clave

### El flujo de datos

1. **Montaje del componente**: Al renderizarse por primera vez, el componente ejecuta el efecto
2. **Petición a la API**: `fetch` realiza la petición HTTP a PokeAPI
3. **Conversión de datos**: La respuesta se convierte a JSON
4. **Actualización del estado**: Los datos se guardan en el estado con `setPokemons`
5. **Re-renderizado**: React detecta el cambio y actualiza la interfaz
6. **Visualización**: Los Pokémon aparecen en pantalla

### Componente Pokedex

El componente principal acepta una prop opcional:

```jsx
<Pokedex limit={10} />
```

- **limit**: Número de Pokémon a cargar (por defecto: 10)

## Características del Código

### Estados Manejados

```jsx
const [pokemons, setPokemons] = useState([]);     // Lista de Pokémon
const [isLoading, setIsLoading] = useState(true); // Estado de carga
```

### Hook useEffect

```jsx
useEffect(() => {
  // Código que se ejecuta al montar el componente
  // y cuando cambia el valor de 'limit'
}, [limit]);
```

### Renderizado Condicional

La aplicación muestra:
- Mensaje "Cargando..." mientras se obtienen los datos
- Lista de Pokémon una vez completada la carga
- Contador del total de Pokémon cargados

## Recursos de Aprendizaje

- [Documentación de React](https://react.dev/)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [React Hooks](https://react.dev/reference/react)

## 🔍 API Utilizada

**Endpoint**: `https://pokeapi.co/api/v2/pokemon?limit={limit}`

**Respuesta** (estructura relevante):
```json
{
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    }
    // ...
  ]
}
```

## Preguntas de Reflexión

Después de completar el proyecto, reflexiona sobre las siguientes preguntas:

1. **Dependencias**: ¿Por qué el array de dependencias de `useEffect` está vacío o contiene `[limit]`?

- Respuesta: `useEffect([])` se utiliza para ejecutar el efecto solo una vez al montar el componente. Si pones `[pokemons]`, el efecto se ejecutará cada vez que cambie `pokemons` (y si el efecto actualiza `pokemons` puede crear un bucle). Si no pones el array de dependencias, el efecto se ejecuta después de cada render, provocando llamadas repetidas y comportamiento inesperado.

2. **Asincronía**: ¿Por qué no colocamos `fetch` directamente en la función del componente, sin `useEffect`?

- Respuesta: El cuerpo del componente debe ser puro y puede ejecutarse muchas veces. Llamar a `fetch` ahí lanzaría peticiones en cada render (posible sobrecarga, duplicados o bucles). `useEffect` permite ejecutar la petición como efecto secundario controlado (por ejemplo, solo al montar) y así separar lógica de efectos del renderizado.

3. **Orden de ejecución**: ¿En qué orden ocurren estos eventos?

- Respuesta (orden):
  1) El componente se renderiza por primera vez.
  2) `fetch` comienza su petición (desde `useEffect`).
  3) El servidor responde con datos.
  4) Se actualiza el estado (`setPokemons`).
  5) El componente se renderiza nuevamente con los datos.

4. **El `response.json()`**: ¿Por qué necesitamos llamar a `.json()` en la respuesta? ¿Qué devuelve?

- Respuesta: `response.json()` parsea el cuerpo de la respuesta HTTP y devuelve una promesa que resuelve en un objeto JavaScript (los datos JSON). Sin llamarlo, tendrías un objeto `Response` con el flujo de bytes, no los datos ya parseados.

5. **Keys en `.map()`**: Si usaras el índice del array (`index`) como `key` en lugar del nombre del Pokémon, ¿qué podría salir mal si luego ordenas o filtras la lista?

- Respuesta: Usar el `index` como `key` es problemático cuando reordenas o filtras: los índices cambian y React puede reasignar elementos DOM a datos distintos, provocando errores visuales o pérdida de estado en componentes hijos. Es mejor usar una clave estable y única (por ejemplo `pokemon.name` o un `id`).


## Notas Adicionales

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) y forma parte de un programa de aprendizaje estructurado de React.

---

**Sprint 1 - Semana 1**: Consumo de datos y efectos  
**Proyecto**: La Pokedex Minimalista

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
