import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h1>Navegador de usuarios</h1>
      <p>Haz clic en un usuario para ver el detalle:</p>
      <ul>
        <li>
          <Link to="/user/1">Usuario 1</Link>
        </li>
        <li>
          <Link to="/user/2">Usuario 2</Link>
        </li>
        <li>
          <Link to="/user/3">Usuario 3</Link>
        </li>
      </ul>
    </main>
  );
}
