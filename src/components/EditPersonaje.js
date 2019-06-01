import React, { Component } from 'react'
import personajesJSON from '../personajes.json'
import {Link} from 'react-router-dom'
import { PersonajesContext } from '../context.js';
export default class EditPersonaje extends Component {
  render() {
    
    let name=React.createRef();
    let gender=React.createRef();
    let mass=React.createRef();
    let height=React.createRef();
    let eye_color=React.createRef();
    let hair_color=React.createRef();
    let birth_year=React.createRef();

    let personaje;
    return (
      <div>
         <PersonajesContext.Consumer>
          
          {
            value=>{
              console.log(this.props.personaje_id)
              personaje = value.searchPersonaje(this.props.personaje_id)
              console.log(personaje)
              return(
                <React.Fragment>
                  <div className="container">
                  <center>
                    <br></br>
                    <h2 className="p-3 mb-2 bg-primary text-white">Complete the following information to change the character</h2>
                    <br></br>
        <form>
          <div className="form-group">
            
            <input type="text" className="form-control" placeholder={personaje.name} ref={name}></input>
            <br></br>
            <input type="text" className="form-control" placeholder={personaje.gender} ref={gender}></input>
            <br></br>
            <input type="text" className="form-control" placeholder={personaje.mass} ref={mass}></input>
            <br></br>
            <input type="text" className="form-control" placeholder={personaje.height} ref={height}></input>
            <br></br>
            <input type="text" className="form-control" placeholder={personaje.hair_color} ref={hair_color}></input>
            <br></br>
            <input type="text" className="form-control" placeholder={personaje.eye_color} ref={eye_color}></input>
            <br></br>
            <input type="text" className="form-control" placeholder={personaje.birth_year} ref={birth_year}></input>
            <br></br>
          </div>
        </form>
        <Link to="/personajes">
              <button onClick={()=>{
                value.editPersonaje({
                  id:personaje.id,
                  name:name.current.value,
                  gender: gender.current.value,
                  mass: mass.current.value,
                  height: height.current.value,
                  hair_color:hair_color.current.value,
                  eye_color:eye_color.current.value,
                  birth_year:birth_year.current.value

                })
              }}className="btn btn-primary btn-lg" type="button" > CHANGE CHARACTER</button>
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
