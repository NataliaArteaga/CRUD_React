import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Personaje from '../components/Personaje';
import CreatePersonaje from '../components/CreatePersonaje';
import TemplateUsuario from '../components/TemplateUsuario';
import EditPersonaje from '../components/EditPersonaje';

export default class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
            <Route path="/personajes" component={Personaje}>
            </Route>
            <Route path="/verpersonaje/:id" render={
                (props)=>{
                    const {match}=props
                    return(<TemplateUsuario personaje_id={match.params.id}></TemplateUsuario>)
                }
            }>
            </Route>
            <Route path="/createpersonajes" component={CreatePersonaje}>
            </Route>
            <Route path="/editpersonajes/:id" render={
                (props)=>{
                    const {match}=props
                    return(<EditPersonaje personaje_id={match.params.id}></EditPersonaje>)
                }
            }>
            </Route>
            <Route path="/deletepersonajes/:id" component={CreatePersonaje}>
            </Route>
            </Switch>
            </BrowserRouter>
        )
    }
}