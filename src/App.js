import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import Kajian from './Pages/Kajian';
import Kitab from './Pages/Kitab';
import Mondok from './Pages/Mondok';
import NavBar from './components/Navbar';
import WebApp from './Pages/App';


class App extends Component{
  render(){

   return (
     <div>
       <WebApp/>
     </div>
   )
 
  }
}

export default App;