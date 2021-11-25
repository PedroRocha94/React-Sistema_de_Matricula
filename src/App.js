import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import { PaginaListarMatricula } from './components/pages/PaginaListarMatriculas/PaginaListarMatricula'
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';
import history from './history';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';

function App() {
  return (
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
          path="/matriculas/:id" element={<PaginaDetalheMatricula />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
