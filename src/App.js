import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import Kajian from './Pages/Kajian';
import Kitab from './Pages/Kitab';
import Mondok from './Pages/Mondok';
import NavBar from './components/Navbar';
import WebApp from './Pages/App';


class App extends Component{
  // state={
  //   isPage : "Home"
  // }

  // changePage =(parameter)=>{
  //   this.setState({
  //     isPage : parameter
  //   })
  // }
  render(){
  //  const{isPage} = this.state

   return (
     <div>
       <WebApp/>
     </div>
    //  <div>
    //    <NavBar changePage={this.changePage}/>
    //     {isPage === "Home" && (<Home/>)}
    //     {isPage === "Kajian" && (<Kajian/>)}
    //     {isPage === "Mondok" && (<Mondok/>)}
    //     {isPage === "Kitab" && (<Kitab/>)}
       
    //  </div>
   )
 
  }
}

export default App;