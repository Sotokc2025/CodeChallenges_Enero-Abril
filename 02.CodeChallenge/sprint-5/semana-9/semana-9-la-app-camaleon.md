# Sprint 5 — Deploy

## Semana 9 – La app camaleón

📌 Antes de empezar
- ¡Respira! Las variables de entorno son más simples de lo que parecen: archivos con pares clave=valor. 🔐
- Orden recomendado: Concepto → Esquema → Pasos 1–5 → Recursos.
- Clave: `.env` NO se sube a GitHub. Contiene secretos (API keys, URLs).
- Consejo: trabaja en bloques pequeños (15–20 min), reinicia el servidor después de cada cambio. 🔍

🎯 Objetivo + Concepto (por qué + analogía)
- Objetivo: Usar **variables de entorno** para configurar tu app sin modificar código según el entorno (dev/prod). 🚀
- La metáfora del archivo secreto (la nota en la nevera):
  - Código = receta de cocina ("Usar X huevos").
  - `.env` = nota en la nevera que dice "X=3".
  - Para cocinar más, cambias la nota a "X=500" sin reescribir la receta.
  - Desarrollo vs Producción = diferentes notas para diferentes ocasiones.
  - `import.meta.env` = lees la nota desde el código.
  - `.gitignore` = la nota no se comparte (secretos privados).
- Resultado: misma app, configuración diferente según entorno. ✨

📋 Esquema de código (estructura incompleta)
- Plantilla con huecos para completar —sin soluciones completas—.

```bash
# filepath: .env (en la raíz del proyecto, NO en src/)
# Todas las variables en Vite deben empezar con VITE_
VITE_API_URL=https://api-dev.ejemplo.com
VITE_MI_SECRETO=HolaDesdeDesarrollo
VITE_MODO=development
```

```bash
# filepath: .env.production (opcional, para producción)
VITE_API_URL=https://api-prod.ejemplo.com
VITE_MI_SECRETO=HolaDesdeProd
VITE_MODO=production
```

```jsx
// filepath: src/App.jsx (estructura incompleta)
export default function App() {
  // Tarea: lee las variables de entorno con import.meta.env
  const apiUrl = import.meta.env.VITE_API_URL;
  const secreto = import.meta.env.VITE_MI_SECRETO;
  const modo = import.meta.env.VITE_MODO;

  return (
    <div>
      <h1>App Camaleón 🦎</h1>
      <p>Conectando a: {/* muestra apiUrl */}</p>
      <p>Secreto: {/* muestra secreto */}</p>
      <p>Modo: {/* muestra modo */}</p>
    </div>
  );
}
```

```gitignore
# filepath: .gitignore (asegúrate de que incluya)
.env
.env.local
.env.*.local
```

👇 Tu viaje — Pasos 1–5 (cada paso: concepto, tarea, verificación, tiempo)

Paso 1: Crea el archivo .env en la raíz
⏱️ Tiempo estimado: 10 min
Conceptos clave:
- `.env` va al lado de `package.json`, NO dentro de `src/`.
- Variables en Vite DEBEN empezar con `VITE_` (prefijo obligatorio).
Tarea:
- Crea archivo `.env` en la raíz del proyecto.
- Añade: `VITE_MI_SECRETO=HolaDesdeDesarrollo`.
- Añade: `VITE_API_URL=https://api-dev.ejemplo.com`.
Verificación:
- ¿El archivo está al lado de `package.json`, no dentro de carpetas?
- Abre `.gitignore`. ¿Incluye `.env`? Si no, añádelo.
Pista:
- Si el archivo está mal ubicado, Vite no lo detectará.

Paso 2: Lee las variables en tu componente
⏱️ Tiempo estimado: 10 min
Conceptos clave:
- `import.meta.env` = objeto que contiene todas las variables de entorno.
- Solo accesibles las que empiezan con `VITE_`.
Tarea:
- En `App.jsx`, lee: `const secreto = import.meta.env.VITE_MI_SECRETO`.
- Muéstralo en un `<p>{secreto}</p>`.
Verificación:
- ¿Ves "HolaDesdeDesarrollo" en la pantalla?
- Si ves `undefined`, verifica el prefijo `VITE_` y que reiniciaste el servidor.
Pista:
- Usa `console.log(import.meta.env)` para ver todas las variables disponibles.

Paso 3: Reinicia el servidor para aplicar cambios
⏱️ Tiempo estimado: 5 min
Conceptos clave:
- Variables de entorno se leen al iniciar el servidor, NO en tiempo real.
- Hot reload NO detecta cambios en `.env`.
Tarea:
- Detén el servidor (Ctrl+C).
- Ejecuta `npm run dev` de nuevo.
- Verifica que el valor se muestra correctamente.
Verificación:
- ¿Aparece el valor de la variable?
- Cambia el valor en `.env` SIN reiniciar. ¿Sigue mostrando el valor viejo?
Pista:
- Siempre reinicia después de editar `.env`.

Paso 4: Cambia valores y verifica el comportamiento
⏱️ Tiempo estimado: 10 min
Conceptos clave:
- Mismo código, diferentes valores = comportamiento diferente.
Tarea:
- Cambia `VITE_MI_SECRETO=NuevoValor` en `.env`.
- Reinicia el servidor.
- Verifica que el nuevo valor aparece.
Verificación:
- ¿El texto en pantalla cambió a "NuevoValor" sin tocar el código JSX?
Pista:
- Esto demuestra el poder de las variables de entorno: configuración sin código.

Paso 5: Crea diferentes archivos para entornos
⏱️ Tiempo estimado: 15 min
Conceptos clave:
- `.env.development` = solo para desarrollo.
- `.env.production` = solo para producción.
- `.env` = valores por defecto.
Tarea:
- Crea `.env.production` con valores diferentes.
- Añade `VITE_API_URL=https://api-produccion.ejemplo.com`.
- Ejecuta `npm run build` (usa `.env.production`) vs `npm run dev` (usa `.env`).
Verificación:
- En desarrollo: ¿usa la URL de dev?
- Después del build: inspecciona el archivo generado. ¿Contiene la URL de producción?
Pista:
- Vite automáticamente usa el archivo correcto según el comando.

🎓 Después de terminar (reflexión)
- Escribe 2–3 frases: ¿qué ventaja viste en usar variables de entorno vs valores hardcodeados?
- ¿Por qué es importante NO subir `.env` a GitHub?

🚀 Si quieres ir más allá (opcional)
- Usa variables de entorno para API keys reales (ej: OpenAI, Firebase).
- Crea un hook personalizado `useEnv()` que valide que las variables existen.
- Añade validación: si falta una variable crítica, muestra error en desarrollo.
- Usa `.env.local` para sobrescribir valores localmente sin afectar el equipo.
- Implementa diferentes URLs de backend según entorno (dev/staging/prod).
- Lee `import.meta.env.MODE` para mostrar un banner "DESARROLLO" en modo dev.

📚 Recursos útiles
- Vite docs: Env Variables and Modes
- Create React App: Adding Custom Environment Variables (si usas CRA)
- MDN: Environment variables
- Twelve-Factor App: Config (mejores prácticas)

✅ Entregable (lista)
- [ ] Archivo `.env` en la raíz con variables que empiezan con `VITE_`.
- [ ] `.env` incluido en `.gitignore`.
- [ ] Componente lee y muestra valores de `import.meta.env.VITE_*`.
- [ ] README explica cómo reiniciar servidor para aplicar cambios.
- [ ] Opcional: archivo `.env.production` con valores diferentes.

---

## Opcional

- `useEnv()` hook: creado en `src/hooks/useEnv.js`. Lee variables desde `import.meta.env` (Vite) y `process.env.REACT_APP_*` (CRA), devuelve `{ apiUrl, secreto, modo, modeRuntime, missing }`.
- Validación: `App.jsx` muestra un aviso claro si faltan variables críticas (`API_URL`, `MI_SECRETO`, `MODO`).
- Banner de desarrollo: cuando el modo es `development` se muestra un banner azul indicando que estás en desarrollo.
- Compatibilidad CRA/ Vite:se añaden las variables `REACT_APP_*` a `.env.production` para que los builds con CRA también funcionen.


🎉 Celebración: si cambiaste la configuración sin tocar código, ¡entendiste variables de entorno! 🦎✨
