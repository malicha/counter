import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import JumboTron from '../components/Jumbotron';
import kajian from './Kajian';
import Card from '../components/Card';

class Home extends Component{
    render(){
        return(
            <div>
            <JumboTron />
            <Card/>

            </div>
        )
    }
}


export default Home;