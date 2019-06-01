import React from 'react';
import './App.css';
import PersonajesContextProvider from './context';
import Personaje from './components/Personaje';
import 'bootstrap/dist/css/bootstrap.css'
import Router from './routes/router';

function App() {
  return (
  
      <PersonajesContextProvider>
        <Router></Router>
      </PersonajesContextProvider>
   
  );
}

export default App;
