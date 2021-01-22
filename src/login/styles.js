import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';


export const Container = Styled(Grid)`
    flex: 1;
    display: flex;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #51a2c3;
    opacity: 2;

`

export const Button = Styled.button`
    background-color: #51a2c3;           
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    transition: 0.2s;
    cursor: pointer;
    opacity: 0.9;
    text-align: center;
    display: block;
    width: 150px;
    height: 35px;
    border: 0;
    margin-top: 100px;
    margin-left: 70px;
    
    
`

export const Input = Styled.input`
    margin-top: 0px;
    margin-bottom: 10px;
    width: 220px;
    height: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-color: #51a2c3;
    background-color: #ffffff;
    border-radius: 5px;
    padding-left: 8px;
    font-family: 'Livvic', cursive;
    outline: none;

    :focus{
        border-color: #51a2c3;
        outline:none;
    }

    :hover{
        border-color: #51a2c3;
        outline:none;
        opacity: 1;
    }

    &::placeholder{
        color: #555555;

    }

`

export const Image = Styled.img`
    display: block;
    border-radius: 8px;
    padding-bottom: 50px;
    margin-left: 38px;

    & + button{
        margin-top: 25px;
    }

  
`

export const LoginPage = Styled.div`
    background-color: white;
    margin: auto;
    width: 280px;
    height: 350px;
    border-radius: 4px;
    display: block;
    justify-content: center;

    
       
`