import React, { Component } from 'react';
import Home from './Home';
import Kajian from './Kajian';
import Kitab from './Kitab';
import Mondok from './Mondok';
import NavBar from '../components/Navbar';
import {Switch, Route, BrowserRouter, Link,} from 'react-router-dom';


export default class WebApp extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact={true} path="/" component={NavBar}/>
                    <Route path="/mondok" component ={NavBar}/>
                    <Route path="/kitab" component ={NavBar}/>
                    <Route path="/kajian" component ={NavBar}/>
                </Switch>
                
                
                <div>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/mondok" component={Mondok}/>
                        <Route path="/kajian" component={Kajian}/>
                        <Route path="/kitab" component={Kitab}/>
                    </Switch>
                </div>
            </div>
        )
    }
}