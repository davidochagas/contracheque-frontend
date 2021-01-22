import './App.css';
import React from 'react';
import Routes from '../src/routes'
import { UsuarioProvider } from '../src/context/user'



function App() {
  return (
    <UsuarioProvider>
        <Routes />
    </UsuarioProvider>
  );
}

export default App;
