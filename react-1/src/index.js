import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Login from './pages/login/Login';
//import Cadastro from './pages/cadastro/Cadastro';
//import Instrutor from './pages/instrutor/Instrutor';
//import Treino from './pages/treino/Treino';
//import Exercicio from './pages/exercicio/Exercicio';
//import Home from './pages/home/Home';
//import Sidebar from './pages/Sidebar/Sidebar'
//import Plano from './pages/plano/Plano';
//import RoutesApp from './Routes';
import ListTreino from './pages/treino/ListTreino'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListTreino/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
