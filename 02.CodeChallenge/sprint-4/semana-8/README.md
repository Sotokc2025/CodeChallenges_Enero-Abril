# Semana 8 — Simulador de fallos (mocks)

Proyecto de práctica para aprender a mockear peticiones de red y probar el manejo de errores en componentes React.

**Resumen**
- Objetivo: probar el manejo de errores y respuestas distintas de una API usando mocks en los tests.
- Librerías: React, Testing Library y Vitest (configuración incluida).

**Archivos clave**
- Componente: [src/components/Pokedex.jsx](src/components/Pokedex.jsx) — componente que carga un Pokémon, maneja estados `loading` y `error`, y muestra "No hay datos" cuando la respuesta está vacía.
- Tests: [src/components/Pokedex.test.jsx](src/components/Pokedex.test.jsx) — tests que mockean `fetch` para simular:
  - rechazo de la promesa (error de red)
  - respuesta exitosa
  - respuesta vacía
  - error HTTP (ej. 404)
  - simulación de retraso (promesa controlada) para verificar `loading`
- Configuración de tests: `vitest.config.js` (usa `jsdom`, `globals` y carga `src/setupTests.js`).
- Script añadido: `test:vitest` en `package.json`.

**Instalación**
```bash
cd 02.CodeChallenge/sprint-4/semana-8
npm install
```

**Comandos útiles**
- Ejecutar tests con Vitest:
```bash
npm run test:vitest
```

- (Opcional) Ejecutar el CRA dev server:
```bash
npm start
```

**Notas sobre los tests**
- Los tests usan `vi.spyOn(window, 'fetch')` junto con `mockResolvedValue` / `mockRejectedValue` para controlar las respuestas de `fetch`.
- Cada test restaura el mock con `mockRestore()` para evitar interferencias entre tests.
- El entorno de tests es `jsdom` para permitir renderizar componentes React en Vitest.

**Extensiones sugeridas**
- Usar MSW (Mock Service Worker) para mocks más realistas a nivel de red.
- Añadir tests adicionales para estados de `loading` con `vi.useFakeTimers()` si se quiere probar timeouts.
- Mockear `localStorage` para pruebas de persistencia.


**Estructura relevante**
- [src/components/Pokedex.jsx](src/components/Pokedex.jsx)
- [src/components/Pokedex.test.jsx](src/components/Pokedex.test.jsx)
- [vitest.config.js](vitest.config.js)
- `package.json` (script `test:vitest`)

REFLEXION:
 Escribe 2–3 frases: ¿qué ventaja viste en mockear fetch vs hacer peticiones reales en tests?
Mockear fetch hace los tests rápidos, deterministas y aislados porque evitas depender de la red o servicios externos. Los mocks permiten forzar respuestas concretas (por ejemplo con mockResolvedValue o mockRejectedValue) para verificar que el componente maneja datos, errores y estados de carga correctamente.


- ¿Cómo te ayudan los mocks a probar casos extremos (errores, respuestas lentas)?
Ayudan porque puedes simular latencias o timeouts para probar casos extremos (respuestas lentas, reintentos, mensajes de error) sin flakiness.
