import React, { useState, useContext, useCallback } from 'react';
import { Container, Input, Button, Image, LoginPage } from './styles'
import LogoPassaporte from '../assets/logo_passaporte.svg'

import { UsuarioContext } from '../context/user';

import swal from 'sweetalert';



export default function LogIn() {

  const { signIn } = useContext(UsuarioContext);
  const [matricula, setMatricula] = useState("");
  


  const handleSubmit = useCallback(
     () => {
      try {
      signIn(matricula);
       
    }catch(error) {
      
      }

    },
  ); 
    
  

  return (
    <Container>
      <LoginPage>
        <Image src= {LogoPassaporte} alt="logo" />
        <Input
          value={matricula}
          placeholder="Informe sua matricula"
          onChange={e => setMatricula(e.target.value)}
        />
        <Button onClick={handleSubmit} disabled={!matricula}>
          Entrar
        </Button>
      </LoginPage>
    </Container>
  )
}