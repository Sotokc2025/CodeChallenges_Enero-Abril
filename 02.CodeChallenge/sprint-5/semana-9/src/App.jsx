import React from 'react';
import './App.css';
import useEnv from './hooks/useEnv';

export default function App() {
  const { apiUrl, secreto, modo, modeRuntime, missing } = useEnv();

  // Debug: muestra qué valores está leyendo el bundle en tiempo de ejecución
  try {
    // eslint-disable-next-line no-console
    const dbg = {
      REACT_APP_API_URL: typeof process !== 'undefined' && process && process.env ? process.env.REACT_APP_API_URL : undefined,
      NODE_ENV: typeof process !== 'undefined' && process && process.env ? process.env.NODE_ENV : undefined,
    };
    // Print as JSON so it's easy to copy from the browser console
    // eslint-disable-next-line no-console
    console.log('DEBUG useEnv runtime: ' + JSON.stringify(dbg));
  } catch (e) {
    // ignore
  }

  const isDev = (modo || '').toLowerCase() === 'development' || (modeRuntime || '').toLowerCase() === 'development';

  return (
    <div className="App">
      {isDev && (
        <div style={{ background: '#0b6cff', color: 'white', padding: '6px 12px' }}>
          MODO DESARROLLO — reinicia el servidor si cambias `.env`
        </div>
      )}
      <header className="App-header">
        <h1>App Camaleón 🦎</h1>
        {missing.length > 0 ? (
          <div style={{ color: 'salmon', background: '#2b1f1f', padding: 12, borderRadius: 6 }}>
            <strong>Faltan variables de entorno:</strong> {missing.join(', ')}. En desarrollo revisa `.env`.
          </div>
        ) : (
          <>
            <p>Conectando a: {apiUrl}</p>
            <p>Secreto: {secreto}</p>
            <p>Modo (env var): {modo}</p>
            <p>Runtime NODE_ENV: {modeRuntime}</p>
          </>
        )}
        <p style={{ marginTop: 12, fontSize: 12, opacity: 0.85 }}>
          Consejo: Cambia `.env` y reinicia el servidor para ver cambios. `.env` no debe subirse a Git.
        </p>
      </header>
    </div>
  );
}
