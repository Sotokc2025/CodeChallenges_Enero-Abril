import UserCard from './components/UserCard';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users/:id" element={<UserDetail />} />
         <Route path="/user-card" element={<UserCard />} />
         
      </Routes>
    </Router>
  );
}

export default App;