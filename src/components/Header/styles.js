import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Image = Styled.img`
    width: 150px;
    cursor: pointer;

`

export const Container = Styled(Grid)`
    display: flex;
    background-color: lightgrey;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    align-content: center;
    font-family: 'Livvic', cursive;

`

export const Button = Styled.button`
    border: none;
    background-color: lightgrey;
    cursor: pointer;
    outline: none;
    margin-left: 100px;
    font-family: 'Livvic', cursive;

    :hover {
        font-weight: bold;
    }

`