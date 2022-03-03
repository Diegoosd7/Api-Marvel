import { render } from 'react-dom';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Comics from './routes/Comics';
import Personajes from './routes/Personajes';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="comics" element={<Comics />} />
        <Route path="personajes" element={<Personajes />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement,
);
