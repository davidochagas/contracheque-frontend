import React from 'react';
import { Switch, Route,  BrowserRouter } from 'react-router-dom';
import Contracheque from '../contracheque/index';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Contracheque} />
            </Switch>
        </BrowserRouter>
    )
}