# Semana 7 — El test inquebrantable

Descripción
-----------
Este repositorio contiene el ejercicio "El test inquebrantable" (Semana 7, Sprint 4). El objetivo es practicar tests automatizados con React Testing Library y Vitest sobre un componente sencillo `Saludo`.

Estado del proyecto
-------------------
- Componente: `src/components/Saludo.jsx` (estado inicial "Hola Mundo" y botón que cambia a "Adiós").
- Tests: `src/components/Saludo.test.jsx` (mensaje inicial, interacción y existencia del botón).
- Configuración de tests: `vitest.config.js` y `src/setupTests.js`.

Requisitos
----------
- Node.js 16+ y npm

Instalación
-----------
Desde la carpeta `semana-7` ejecuta:

```powershell
npm install
```

Cómo ejecutar la aplicación en desarrollo
----------------------------------------
Inicia el servidor de desarrollo:

```powershell
npm start
```

Abre en el navegador: http://localhost:3000

Qué deberías ver
-----------------
- Un título con "Hola Mundo".
- Un botón con el texto "Cambiar saludo".
- Al hacer clic en el botón, el título cambia a "Adiós".

Tests
-----
Ejecuta los tests con Vitest (ejecución única):

```powershell
npm run test -- --run
```

Notas:
- Por defecto `npm run test` ejecuta Vitest en modo watch; `-- --run` fuerza una pasada única.
- Si prefieres el runner de Create React App usa `react-scripts test` cambiando el script `test` en `package.json`.

Estructura relevante
---------------------

- `src/components/Saludo.jsx` — Componente principal del reto.
- `src/components/Saludo.test.jsx` — Tests unitarios con React Testing Library.
- `src/setupTests.js` — Configuración para `@testing-library/jest-dom`.
- `vitest.config.js` — Configuración de Vitest (jsdom, globals, setupFiles).
- `package.json` — scripts y dependencias.

Entregables
-----------

- Componente `Saludo` implementado y funcionando en navegador.
- Tests automatizados que cubren el comportamiento solicitado.
- Instrucciones para instalar, ejecutar la app y ejecutar tests.

Siguientes pasos sugeridos (opcional)
------------------------------------

- Añadir `user-event` en los tests para simular interacciones más realistas.
- Añadir cobertura: `vitest --coverage` y configurar umbrales.
- Escribir más tests para componentes adicionales si amplías la app.

REFLEXION:
Escribe 2–3 frases:
- ¿qué ventaja viste en tests automatizados vs probar manualmente?
Los tests automatizados ahorran tiempo y detectan regresiones rápidamente, dando confianza para cambiar código sin probar todo manualmente.

- ¿Cómo te ayudarían los tests cuando trabajes en equipo?
En un equipo sirven como documentación viva del comportamiento esperado, facilitan refactors seguros y permiten integrar validaciones en CI para evitar que errores lleguen a producción.


Pasos para ejecutar los tests localmente:

1. Desde la carpeta `semana-7`, instala dependencias:

```powershell
npm install
```

2. Ejecuta los tests (Vitest):

```powershell
npm run test -- --run
```

Nota: por defecto `npm run test` inicia Vitest en modo interactivo/watch. Añadir `-- --run` fuerza una ejecución única.

Si prefieres usar el test runner de Create React App (`react-scripts test`), cambia el script `test` en `package.json` a `react-scripts test`.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

