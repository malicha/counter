import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
import './Card.css'

export default class Cards extends Component{
render(){
  return (
    <div className="contain">
      <CardDeck>
      <Card style={{width: 300}}>
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #3</CardTitle>
          <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
        </CardBody>
      </Card>
      <Card style={{width: 300}}>
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #2</CardTitle>
          <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
        </CardBody>
      </Card>
      <Card style={{width: 300}}>
        <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kajian Koding #1</CardTitle>
          <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
        </CardBody>
      </Card>
      </CardDeck>
      <div className="mk"><center><Button outline color="success">Lihat seluruh kajian koding</Button></center></div>
    </div>
  );
};
}