function getViteEnv() {
  try {
    // Access import.meta.env directly; if bundler doesn't support it this will throw.
    // Avoid using identifiers like `import` with typeof which causes parse errors.
    // Use optional chaining in case import.meta exists.
    // eslint-disable-next-line no-undef
    return (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};
  } catch (e) {
    return {};
  }
}

export default function useEnv() {
  const viteEnv = getViteEnv();

  // Fallback: read from window.__APP_ENV__ if present (injected from index.html)
  const appEnv = typeof window !== 'undefined' && window.__APP_ENV__ ? window.__APP_ENV__ : {};

  const hasProcess = typeof process !== 'undefined' && process && process.env;

  const apiUrl = (hasProcess && process.env.REACT_APP_API_URL) || appEnv.REACT_APP_API_URL || viteEnv.VITE_API_URL || null;
  const secreto = (hasProcess && process.env.REACT_APP_MI_SECRETO) || appEnv.REACT_APP_MI_SECRETO || viteEnv.VITE_MI_SECRETO || null;
  const modo = (hasProcess && process.env.REACT_APP_MODO) || appEnv.REACT_APP_MODO || viteEnv.VITE_MODO || null;
  const modeRuntime = (hasProcess && process.env.NODE_ENV) || appEnv.REACT_APP_MODO || viteEnv.MODE || 'development';

  const missing = [];
  if (!apiUrl) missing.push('API_URL');
  if (!secreto) missing.push('MI_SECRETO');
  if (!modo) missing.push('MODO');

  return { apiUrl, secreto, modo, modeRuntime, missing };
}
