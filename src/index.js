import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //Componente que contiene toda la aplicacion

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //'root' id del (unico)componente donde se cargara la app
);