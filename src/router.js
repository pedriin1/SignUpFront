import React from 'react';
import {BrowserComponent, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const Routes = () =>{ 
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path='/SignUp' component={Cadastro} />
        </BrowserRouter>
    )
}