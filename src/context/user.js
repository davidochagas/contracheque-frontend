import React, { createContext, useState, useEffect } from 'react';

import api from '../services/api';

import swal from 'sweetalert';


const UsuarioContext = createContext({});

function UsuarioProvider ({ children }) {

  const [user, setUser] = useState(null);
  const [dados, setDados] = useState([]);

  useEffect(() => {

    const loadData = () => {
      const user = localStorage.getItem("@CONTRACHEQUE:user")

      if (user) {
        setUser(JSON.parse(user))
      }
    }

    loadData();
  }, []);


  const signIn = async (matricula) => {
    // console.warn('cheguei aqui')
    try {
    const response = await api.get('funcionario');
    setDados(response.data);
    } catch(error){
      
    }

    const user = dados.find((usuario) => {
      return matricula === usuario.matricula //&& senha === usuario.senha
    })


    if (user !== undefined) {
      setUser(user)
      localStorage.setItem("@CONTRACHEQUE:user", JSON.stringify(user));
      //tenho que persistir em um storage / banco de dados embarcado

    } else {
      swal("Atenção!", "Usuário inexistente.", "error");
      console.warn("Matricula inválida.")
    }

  }

  const signOut = () => {
    localStorage.removeItem("@CONTRACHEQUE:user");
    setUser(null)
  }

  return (
    <UsuarioContext.Provider value={{ user, signIn, signOut}}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider }