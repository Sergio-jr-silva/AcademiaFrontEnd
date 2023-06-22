import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro.js';
import Instrutor from './pages/instrutor/Instrutor.js';
import Treino from './pages/treino/Treino.js';
import Exercicio from './pages/exercicio/Exercicio.js';
import Home from './pages/home/Home.js';
import Plano from './pages/plano/Plano.js';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/cadastro-aluno' element={<Cadastro/>}/>
                <Route path='/cadastro-instrutor' element={<Instrutor/>}/>
                <Route path='/cadastro-treino' element={<Treino/>}/>
                <Route path='/cadastro-exercicio' element={<Exercicio/>}/>
                <Route path='/plano' element={<Plano/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;