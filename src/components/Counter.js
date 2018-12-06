import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Counter extends Component{

    state = {
        angka: 0 
    }

    Tambah = () => {
        this.setState({

            angka: this.state.angka + 1
        })
    }

    Kurang = () => {
        this.setState({
            angka: this.state.angka - 1
        })
    }

    render(){
        return(
            <div>
                <Card style ={{width:300}}>
                <CardTitle>{this.state.angka}</CardTitle>
                <CardSubtitle>CardSubtitle</CardSubtitle>
                <CardText>CardText</CardText>
                <Button onClick={()=> this.Tambah()}>Tambah</Button>
                <Button onClick={()=> this.Kurang()}>Kurang</Button>
                </Card>


            </div>
        );
    }
}


