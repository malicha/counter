import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import Kajian from './Pages/Kajian';
import Kitab from './Pages/Kitab';
import Mondok from './Pages/Mondok';
import NavBar from './components/Navbar';


class App extends Component{
  state={
    isPage : "Kajian"
  }

  changePage =(parameter)=>{
    this.setState({
      isPage : parameter
    })
  }
  render(){
   const{isPage} = this.state

   return (
     <div>
       <NavBar changePage={this.changePage}/>
        {isPage === "Home" && (<Home/>)}
        {isPage === "Kajian" && (<Kajian/>)}
        {isPage === "Mondok" && (<Mondok/>)}
        {isPage === "Kitab" && (<Kitab/>)}
       
     </div>
   )
 
  }
}

export default App;