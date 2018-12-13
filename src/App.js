import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import Kajian from './Pages/Kajian';
import Kitab from './Pages/Kitab';
import Mondok from './Pages/Mondok';
import NavBar from './components/Navbar';


class App extends Component{
  state={
    isPage : "Home"
  }

  changePage =(parameter)=>{
    this.setState({
      isPage : parameter
    })
  }
  render(){
   const{isPage} = this.state
   if(isPage === "Home"){
     return(<div><NavBar changePage={this.changePage}/><Home/></div>)
   }else if(isPage === "Kitab"){
     return(<div><NavBar changePage={this.changePage}/><Kitab/></div>)
   }else if(isPage === "Kajian"){
     return(<div><NavBar changePage={this.changePage}/><Kajian/></div>)
   }else if(isPage === "Mondok"){
     return(<div><NavBar changePage={this.changePage}/><Mondok/></div>)
   }
  }
}

export default App;