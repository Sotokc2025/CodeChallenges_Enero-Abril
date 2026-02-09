"use strict";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserDetail from './UserDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
