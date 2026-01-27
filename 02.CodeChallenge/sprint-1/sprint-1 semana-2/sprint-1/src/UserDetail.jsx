import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUser() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal });
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();

    return () => controller.abort();
  }, [id]);

  const navigate = useNavigate();
  const userId = Number(id);

  if (isLoading) return (
    <div className="spinner-wrapper" role="status" aria-live="polite" aria-busy={isLoading}>
      <div className="spinner" aria-hidden="true"></div>
      <div>Cargando...</div>
    </div>
  );
  if (error) return (
    <div>
      <p>Error: {error}</p>
      <p><Link to="/">Volver</Link></p>
    </div>
  );

  if (!user) return <div>No se encontró el usuario.</div>;

  function goPrev() {
    if (userId > 1) navigate(`/user/${userId - 1}`);
  }

  function goNext() {
    if (userId < 10) navigate(`/user/${userId + 1}`);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Correo:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Ciudad:</strong> {user.address?.city}</p>
      <p><strong>Empresa:</strong> {user.company?.name}</p>
      <div style={{ marginTop: 12 }}>
        <button onClick={goPrev} disabled={userId <= 1}>Anterior</button>{' '}
        <button onClick={goNext} disabled={userId >= 10}>Siguiente</button>
      </div>
      <p style={{ marginTop: 8 }}><Link to="/">Volver</Link></p>
    </div>
  );
}
