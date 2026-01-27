# Navegador de usuarios — Sprint 1

Pequeña aplicación de ejemplo creada con Create React App que permite navegar entre usuarios y ver su detalle. 

## Funcionalidades

- Lista de enlaces a usuarios (Home).
- Ruta dinámica `/user/:id` con detalle del usuario (nombre, correo, teléfono, ciudad y empresa).
- Manejo de carga y errores con indicador visual.
- Navegación "Anterior" / "Siguiente" para recorrer usuarios.

## Tecnologías

- React 19
- React Router DOM
- Create React App

## Instalación

1. Clona o descarga el repositorio.
2. En la carpeta del proyecto, instala dependencias:

```bash
npm install
```

3. Ejecuta la aplicación en modo desarrollo:

```bash
npm start
```

Abre http://localhost:3000 en tu navegador.

## Scripts disponibles

- `npm start` — ejecuta la app en desarrollo.
- `npm test` — ejecuta el runner de tests.
- `npm run build` — crea una build para producción.
- `npm run eject` — expone la configuración (operación irreversible).

Los scripts se definen en `package.json`.

## Estructura del proyecto

- `public/` — archivos estáticos.
- `src/`
	- `App.js` — rutas principales (`/` y `/user/:id`).
	- `Home.jsx` — vista principal con enlaces a usuarios.
	- `UserDetail.jsx` — obtiene datos desde `https://jsonplaceholder.typicode.com/users/:id`, muestra carga/errores y permite navegación entre usuarios.
	- `index.js`, `index.css`, `App.css`, otros archivos auxiliares.

## Detalles de implementación

- `UserDetail.jsx` usa `useEffect` con `AbortController` para cancelar peticiones cuando el componente se desmonta o cambia el id.
- Se comprueba el estado de `res.ok` y se muestra un mensaje de error si la petición falla.
- La navegación usa `useNavigate` para implementar los botones "Anterior" y "Siguiente".

**Reflexión (entregable)**
- Aprendí que el estado del componente (`useState`) mantiene la "memoria" entre renders y que `useEffect` es la herramienta adecuada para realizar peticiones cuando cambian dependencias como `id`.
- Un fallo curioso fue intentar actualizar el estado después de desmontar el componente; solucionarlo con `AbortController` evita errores de actualizaciones en componentes desmontados.

## Notas

- La app depende de una API pública; si el servicio no responde, la app mostrará el error correspondiente.
- Puedes ampliar la lista de usuarios en `Home.jsx` o hacerla dinámica consumiendo `https://q

## Siguientes pasos recomendados

- Añadir tests para los componentes `Home` y `UserDetail`.
- Hacer la lista de usuarios dinámica y añadir paginación.
- Añadir estilos y mejoras de accesibilidad.

---

