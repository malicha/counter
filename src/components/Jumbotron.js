import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import{ Button} from 'reactstrap';
import './Jumbotron.css'

export default class JumboTron extends Component{
    render(){
    return (
        <div>
            <Jumbotron className="jumbo"fluid>
                <Container fluid>
                <h1>Santren Koding</h1>
                <p>Intensiv Coding Bootcamp for Yatim & Dhuha</p>
            <Button color="success">Mulai Belajar</Button>{' '}
                
                </Container>
            </Jumbotron>
            <h1 className="tengah">Daftar Kajian Koding</h1>
        </div>
    )
}
}
