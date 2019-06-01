import React from 'react';
import {PersonajesContext} from '../context'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';

export default class Personaje extends React.Component{
    render(){

        return (
            <center>
            <PersonajesContext.Consumer>
                {
                    (value)=>{
                        return(
                            <div>
                                <br></br>
                                <center>
                                <h2 className="p-3 mb-2 bg-primary text-white">CHARACTERS</h2>
                                 <br></br> 
                                 </center>                             
                                    {  
                                    value.personajes.map((personaje,index)=>{
                                return (<React.Fragment>
                                    <div className="container">
                                    <div className="card">
                                    <div className="card-body">
                                    <h5 key={index} className="card-title">{personaje.name}</h5>
                                    <Link to= {`/verpersonaje/${personaje.id}`} > Ver mas</Link>
                                    </div>
                                    </div>
                                    </div>
                                    </React.Fragment>)
                                })
                                
                                }
                                <Link to="/createpersonajes">
                                <br></br>
                                <Button type="button" className="btn btn-primary btn-lg">ADD NEW CHARACTER</Button>
                                </Link>                            
                               
                            </div>
                       
                    )
                }
                }
            </PersonajesContext.Consumer>
            </center>
            
          );
    }
  
}
