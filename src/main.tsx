import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

import App from './App';
import SinglePokemon from './components/SinglePokemon/SinglePokemon';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/pokemon/:name' element={<SinglePokemon />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);