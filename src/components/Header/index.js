import React, { useContext } from 'react';
import Logo from '../../assets/nwIntranet_logo.png';
import { Image, Container, Button } from './styles';
import { UsuarioContext } from '../../context/user';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const { signOut, user } = useContext(UsuarioContext);
    const history = useHistory();
    
    return (
        <Container
        container
        direction="row"
    >
        <Image src= {Logo} onClick = {() => history.push('/')} />
        <div>
        Bem vindo, <b>{user.nome}!</b>
        </div>
        <Button onClick={() => {
                    signOut()
                    }}>
                  Sair
            </Button>
    </Container>
    )
}

export default Header