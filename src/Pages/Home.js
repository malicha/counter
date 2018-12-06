import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import JumboTron from '../components/Jumbotron';

class Home extends Component{
    render(){
        return(
            <div>
            <NavBar/>
            <JumboTron/>
            </div>
        )
    }
}


export default Home;