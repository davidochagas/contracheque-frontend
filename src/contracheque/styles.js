import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Container = Styled(Grid)`
    margin-left: auto;
    margin-right: auto;
    font-family: 'Livvic', cursive;
       
`

export const Div = Styled(Grid)`
    margin-top: 28px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    font-family: 'Livvic', cursive;

`

export const Divzinha = Styled.div`
    margin-left: auto;
    margin-right: auto;

    button {
        cursor: pointer;
        border: none;
        font-family: 'Livvic', cursive;
        color: white;
        background-color: grey;
        border: 0;
        padding: 6px;
        border-radius: 2px;
        outline: none;
        transition: .1s;   
        cursor: pointer; 
        width: 120px;
        margin-top: 1px;
        
        
        &:hover {
            opacity: .8;
        }
    }


`
