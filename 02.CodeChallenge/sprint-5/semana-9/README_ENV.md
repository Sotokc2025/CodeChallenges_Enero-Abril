# Variables de entorno — App Camaleón

Instrucciones rápidas:

1. Crear/editar `.env` en la raíz del proyecto (junto a `package.json`).
2. Reiniciar el servidor después de cambios en `.env`.

Variables ejemplo (usadas en este proyecto):
```
VITE_API_URL=https://api-dev.ejemplo.com
VITE_MI_SECRETO=HolaDesdeDesarrollo
VITE_MODO=development
```

Archivos útiles:
- `.env` — valores por defecto (desarrollo)
- `.env.production` — valores para `npm run build`
- `.gitignore` — incluye `.env` para no subir secretos a Git

Verifica valores en la app con `import.meta.env` o `console.log(import.meta.env)`.

## Opcional

- `useEnv()` hook: creado en `src/hooks/useEnv.js`. Lee variables desde `import.meta.env` (Vite) y `process.env.REACT_APP_*` (CRA), devuelve `{ apiUrl, secreto, modo, modeRuntime, missing }`.
- Validación: `App.jsx` muestra un aviso claro si faltan variables críticas (`API_URL`, `MI_SECRETO`, `MODO`).
- Banner de desarrollo: cuando el modo es `development` se muestra un banner azul indicando que estás en desarrollo.
- Compatibilidad CRA/ Vite:se añaden las variables `REACT_APP_*` a `.env.production` para que los builds con CRA también funcionen.

Cómo probar los opcionales:

1. Reinicia el servidor (`npm start` para CRA). Si se cambia a `.env`, deténlo y vuelve a iniciar.
2. Abre la app y verifica:
  - Si falta alguna variable se verá un mensaje de error con la lista de claves faltantes.
  - En modo `development` se verá el banner azul.
3. Para producción con CRA, `REACT_APP_*` debe estar presente en `.env.production` antes de `npm run build`.

REFLEXION:
Escribe 2–3 frases: 
-¿qué ventaja viste en usar variables de entorno vs valores hardcodeados?
Usar variables de entorno permite separar la configuración del código, cambiar valores entre entornos sin tocar ni recompilar la app y mantener claves/URLs fuera del repositorio.

-¿Por qué es importante NO subir `.env` a GitHub?
No subir el archivo .env a GitHub es crucial porque suele contener secretos (API keys, credenciales) que, si se exponen, comprometen la seguridad y pueden generar accesos o costes no deseados; añádelo a .gitignore y comparte secretos por canales seguros.

