import React from 'react'
import personajesJSON from './personajes.json'
const PersonajesContext = React.createContext();


export {PersonajesContext}

class PersonajesContextProvider extends React.Component{
    state={
        personajes: personajesJSON
    }
    render(){
        return(
                <PersonajesContext.Provider
                value = {{
                    personajes: this.state.personajes,
                    addPersonaje:(personaje)=>{
                        let actuales=this.state.personajes
                        actuales.push(personaje)
                        this.setState(
                            {personajes: actuales}
                        )

                        console.log(actuales)
                    }  ,
                    searchPersonaje:(id)=> {
                        let actuales=this.state.personajes;
                        let actual=actuales.filter((item)=>{
                            if(id == item.id){
                                return item                             
                                }                                 
                        })
                        return actual[0]
                    } ,
                    
                    editPersonaje:(personaje)=> {
                        console.log(personaje)
                        let actuales=this.state.personajes;
                       actuales.filter((item)=>{
                            if(personaje.id == item.id){
                                item.id=personaje.id
                                item.name = personaje.name
                                item.gender = personaje.gender
                                item.birth_year = personaje.birth_year
                                item.height=personaje.height
                                item.mass=personaje.mass
                                item.eye_color=personaje.eye_color
                                item.hair_color=personaje.hair_color
                                }
                            return item           
                        })
                            this.setState({personajes:actuales})
                    }  ,
                    deletePersonaje:(id)  =>{
                        
                        let actuales=this.state.personajes;
                        let indexp = actuales.findIndex((p) => {
                        return p.id == id
                        })
                        actuales.splice(indexp,1)
                        this.setState({personajes:actuales})
                    }      
                }}>
                  {this.props.children}  
                </PersonajesContext.Provider>
            
        )
    }
}

export default PersonajesContextProvider;