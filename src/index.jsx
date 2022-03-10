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
import PersonajeSelect from './routes/PersonajeSelect';
import Home from './App/components/Home/Home';
import error from './App/img/404.png'
import ComicSelect from './routes/ComicSelect';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="comics" element={<Comics />} />
        <Route path="personajes" element={<Personajes />} />
        {/* <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <div className='error'>
                <section>
                  <p className='titulo'>404 PÁGINA NO ENCONTRADA 🙁</p><br />
                  <p className='error__p'>HYDRA ha robado esta página de la base de datos de S.H.I.E.L.D.</p>
                  <div className='separacion'></div>
                  <div className='separacion'></div>
                  <p className='error__p'>Comprueba que has escrito bien la URL.</p>
                </section>
                <img src={error} alt='Capitana Marvel asustada' />
              </div>
              <br />
            </main>
          }
        /> */}
      </Route>
      <Route path="personajeseleccionado/:idpersonaje" element={<PersonajeSelect />} /> 
      <Route path="comicseleccionado/:idcomic" element={<ComicSelect />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
