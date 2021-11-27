import './App.css';
import history from './history';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PaginaListarMatricula } from './components/pages/PaginaListarMatriculas/PaginaListarMatricula'
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({ token: null, nome: null });


  return (

    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <BrowserRouter history={history}>
        <Routes>
          <Route
            exact path='/' element={<PaginaPrincipal />}
          />

          <Route
            exact path="/disciplinas/:id" element={<PaginaDetalheDisciplina />}
          />

          <Route
            exact path='/matriculas' element={<PaginaListarMatricula />}
          />

          <Route
            exact path="/matriculas/:id" element={<PaginaDetalheMatricula />}
          />

          <Route
            exact path="/cadastro" element={<PaginaCadastro />}
          />

          <Route
            exact path="/login" element={<PaginaLogin />}
          />

        </Routes>
      </BrowserRouter>

    </AuthContext.Provider>
  );
}

export default App;
