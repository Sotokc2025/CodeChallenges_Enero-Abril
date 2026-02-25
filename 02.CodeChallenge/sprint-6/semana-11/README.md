# Proyecto: El limpiador de código (Custom Hooks)

## Descripción
Este proyecto forma parte del Sprint 6, Semana 11, y tiene como objetivo refactorizar componentes de React para extraer lógica repetitiva en **custom hooks**, logrando un código más limpio, reutilizable y fácil de mantener.

## Estructura del Proyecto

### Custom Hooks
- **`useUser`**: Hook para obtener datos de un usuario por ID.
- **`useFetch`**: Hook genérico para realizar peticiones a cualquier endpoint.
- **`useLocalStorage`**: Hook para manejar valores persistentes en el almacenamiento local.
- **`useDebounce`**: Hook para optimizar valores con un retraso configurable.
- **`useWindowSize`**: Hook para obtener el tamaño actual de la ventana en tiempo real.

### Componentes
- **`UserDetail`**: Componente que muestra los detalles de un usuario utilizando el hook `useUser`.
- **`UserCard`**: Componente reutilizable que muestra información básica de un usuario utilizando el hook `useUser`.

## Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd 02.CodeChallenge/sprint-6/semana-11
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles
- **`npm start`**: Inicia la aplicación en modo desarrollo.
- **`npm test`**: Ejecuta las pruebas.
- **`npm run build`**: Genera una versión optimizada para producción.

## Uso
1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Navega a las rutas correspondientes para probar los componentes:
   - `/users/:id` para ver el detalle de un usuario con `UserDetail`.
   - Usa `UserCard` en cualquier parte para mostrar información básica de un usuario.

## Funcionalidades Adicionales
- Manejo de errores en los hooks.
- Reutilización de lógica con hooks genéricos como `useFetch`.
- Persistencia de datos con `useLocalStorage`.
- Optimización de valores con `useDebounce`.
- Respuesta dinámica al tamaño de la ventana con `useWindowSize`.

## Reflexión
¿Qué ventajas viste en extraer lógica a custom hooks?
- **Ventajas de los custom hooks**:
  - Reducción de código duplicado.
  - Componentes más simples y fáciles de leer.
  - Reutilización de lógica en múltiples partes de la aplicación.
  
¿En qué otros escenarios podrías usar custom hooks?
- **Escenarios de uso**:
  - Formularios dinámicos.
  - Gestión de almacenamiento local o de sesión.
  - Optimización de búsquedas o eventos.

## Recursos
- [Documentación oficial de React sobre Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [usehooks.com](https://usehooks.com/): Colección de hooks útiles.
- [react-use](https://github.com/streamich/react-use): Librería con ejemplos avanzados de hooks.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](../LICENSE) para más detalles.


