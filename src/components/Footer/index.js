import React from 'react';
import Logo from '../../assets/redes_sociais_menor.png';
import { Image, Container } from './styles';


const Footer = () => {
    return (
        <Container
            container 
            direction="row"
            
        >
            <Image src= {Logo} />
        </Container>
    )
}

export default Footer