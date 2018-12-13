import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Counter extends Component{

    state = {
        angka: 0,
        makanan: [{
            nama : "bakso",
            harga: 5000,
            level: ["biasa", "pedas", "sedang"]  
        },
        {
            nama : "sate",
            harga: 9000,
            level: ["biasa", "pedas", "sedang"]                             
        }]
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
                
                <Button onClick={()=> this.Kurang()}>Kurang</Button>
                </Card>

                <h1>makanan:{this.state.makanan[0].nama}</h1>
                <h1>harga:{this.state.makanan[0].harga}</h1>
                <h1>level:{this.state.makanan[0].level}</h1>
                <h1>mau pesan berapa:{this.state.angka}</h1>
                <Button onClick={()=> this.Tambah()}>Tambah</Button>

            </div>
        );
    }
}


