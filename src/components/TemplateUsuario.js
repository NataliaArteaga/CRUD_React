import React, { Component } from 'react'
import personajesJSON from '../personajes.json'
import {Link} from 'react-router-dom'
import { PersonajesContext } from '../context.js';
import {Button} from 'react-bootstrap';
export default class TemplateUsuario extends Component {
  render() {
    
    let name=React.createRef();
    let gender=React.createRef();

    const traerUsuario=(id)=>{
       let personaje= personajesJSON.filter((item)=>{
            if(id==item.id){
                return item
            }
        })
        return personaje[0]
      }
    
    let personaje = traerUsuario(this.props.personaje_id)
    console.log(this.props.personaje_id)
    return (
      <div>
        
        <PersonajesContext.Consumer>
          
          {
            value=>{
              return(
                <React.Fragment>
                  <div className="container">
                    <br></br>
                    <center>
               <div className="card">
                <h2  className="card-title p-3 mb-2 bg-primary text-white">{personaje.name}</h2>
                <div className="card-body">
                <h5  className="card-title">GENDER: {personaje.gender}</h5>
                <h5  className="card-title">HEIGHT: {personaje.height}</h5>
                <h5  className="card-title">MASS: {personaje.mass}</h5>
                <h5  className="card-title">HAIR COLOR: {personaje.hair_color}</h5>
                <h5  className="card-title">EYE COLOR: {personaje.eye_color}</h5>
                <h5   className="card-title">BIRTH YEAR: {personaje.birth_year}</h5>
                </div>
                </div>
                <br></br>
                <Link to={`/editpersonajes/${personaje.id}`}>
              <button className="btn btn-primary btn-lg mr-3" type="button"> EDIT CHARACTER </button>
              </Link>

               <Link to="/personajes">
               <Button onClick={()=>{
                 value.deletePersonaje(personaje.id)
               }}className="btn btn-primary btn-lg" type="button" > DELETE CHARACTER </Button>
               </Link>
                </center>
                </div>
              
              
         
             
               </React.Fragment>
              )
            }
          }
         
          </PersonajesContext.Consumer>
       
    
        
      </div>
    )
  }
}
