import React, { useState, useEffect, useContext } from 'react';
import { Container, Div, Divzinha } from './styles';
import api from '../services/api';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import { UsuarioContext } from '../context/user';


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';

const Contracheque = () => {

    const [ funcionario, setFuncionario ] = useState('');
    const [ ano, setAno ] = useState('');
    const [ listaContracheques, setListaContracheques ] = useState([]);
    const [ listaAnos, setListaAnos ] = useState([]);
    const { signOut, user } = useContext(UsuarioContext)
   

    
    const loadAnos =
        async () => {
            try {
                const response = await api.get(`contracheque/anos/${user.id}`);
                setListaAnos(response.data);
                console.log(response.data, 'lista anos')
            } catch(error){
                console.log(error);
            }
        }
    

    const loadContracheques = 
        async () => {
            try {
                const response = await api.get(`contracheque/funcionario/${user.id}/ano/${ano}`);
                setListaContracheques(response.data);
            } catch(error){
                console.log(error);
            }
        } 
    

        useEffect(
            () => {
                loadAnos();
            }, [funcionario]
        )
        
        const mesTabela = (mes) => {
            const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
            return meses[mes - 1];
        }
        
    function redirecionar(contracheque) {
        window.location.href = `http://localhost:8080/contracheque/${contracheque}`
    }
    
    return (

        <Container>
            <Header />
            <Div
            container
            direction = "row">
                <FormControl>
                      Contracheque/Ano
                        <Select
                          style = {{fontSize: "14px", textAlign: "center"}}
                          value={ano}
                          onChange={e => {setAno(e.target.value)}}
                          displayEmpty
                        >
                            <MenuItem value=""
                            style = {{fontSize: "14px"}}>
                                <em>None</em>
                            </MenuItem>
                            {
                                listaAnos.map(ano => (
                                    <MenuItem
                                        value={ano}
                                    >
                                        {ano}
                                    </MenuItem>
                                ))                                
                            }
                        </Select>
                </FormControl>
                <SearchIcon style = {{cursor: "pointer", marginLeft: "10px"}}
                onClick = {loadContracheques} />   
                
                <Div container
                direction="column">
                {listaContracheques.map((contracheque) => (
                            <Divzinha>
                                <button onClick = {() => redirecionar(contracheque.id)}>
                                {mesTabela(contracheque.mes)}
                                </button>
                            </Divzinha>

                    ))
                    }
                </Div>
            </Div>
            <Footer />
        </Container>
    )
}

export default Contracheque