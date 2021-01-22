import Styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Image = Styled.img`
    height: 25px;
    margin-left: 50px;
    margin-top: 20px;

`

export const Container = Styled(Grid)`
    flex: 1;
    display: flex;
    background-color: grey;
    height: 60px;
    position: fixed;   
    bottom: 0;   
    // width: 100%;   
    // height: 2.5rem;

`