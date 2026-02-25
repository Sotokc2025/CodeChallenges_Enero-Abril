import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const UserDetail = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No se encontró el usuario.</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;