import React, { Component, createRef } from 'react'
import Personaje from './Personaje'
import {PersonajesContext }from '../context'
import {Link} from 'react-router-dom'

export default class CreatePersonaje extends Component {
  render() {
    let name=React.createRef();
    let gender=React.createRef();
    let mass=React.createRef();
    let height=React.createRef();
    let eye_color=React.createRef();
    let hair_color=React.createRef();
    let birth_year=React.createRef();


    return (
        <PersonajesContext.Consumer>
            { value=>{
return(
    <div>
      <form>
        <div className="container">
        <center>
          <br></br>
          <h2 className="p-3 mb-2 bg-primary text-white">Complete the following information to add the character </h2>
          <br></br>
          <div className="form-group">
          
            <input type="text" className="form-control" placeholder="Name" ref={name}></input>
            <br></br>
            <input type="text" className="form-control" placeholder="Gender" ref={gender}></input>
            <br></br>
            <input type="text" className="form-control" placeholder="Mass" ref={mass}></input>
            <br></br>
            <input type="text" className="form-control" placeholder="Height" ref={height}></input>
            <br></br>
            <input type="text" className="form-control" placeholder="Hair Color" ref={hair_color}></input>
            <br></br>
            <input type="text" className="form-control" placeholder="Eye Color" ref={eye_color}></input>
            <br></br>
            <input type="text" className="form-control" placeholder="Birth Year" ref={birth_year}></input>
          </div>
       <Link to="/personajes">
        <button onClick={()=>{
            console.log(name.current.value)
            value.addPersonaje({"id":parseInt(Date.now()),
                "name":name.current.value,
                 "gender": gender.current.value,
                 "mass": mass.current.value,
                 "height": height.current.value,
                  "hair_color":hair_color.current.value,
                 "eye_color":eye_color.current.value,
                  "birth_year":birth_year.current.value
          })
        }}type="button" className="btn btn-primary btn-lg" > ADD CHARACTER </button>
        </Link>
        </center>
        </div>
      </form>
      </div>
)
            }
      
      
    }
      
      </PersonajesContext.Consumer>
    )
  }
}
