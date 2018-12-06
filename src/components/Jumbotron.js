import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default class JumboTron extends Component{
    render(){
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                <h1>Hello</h1>
                <p>This is jumbotron</p>
                </Container>
            </Jumbotron>
        </div>
    )
}
}
