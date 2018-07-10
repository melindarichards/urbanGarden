import React, { Component } from "react";
import WebFont from "webfontloader";
import {Col, Row, Container, ListGroup, ListGroupItem, Jumbotron, FormGroup, Label, Input, FormFeedback, FormText, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import API from "../../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import HarvestModal from "../../Modal/HarvestModal";
import HomeButton from "../../buttons/HomeButton"
import imagesObject from "../../ImagesObject/ImagesObject";
import "./AvailHarvests.css"
import moment from "moment"; 
// import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
WebFont.load({
    google: {
        families: ['Indie Flower', 'cursive', 'Roboto Condensed', 'sans-serif']
    }
  })

class AvailHarvests extends Component {
    state = {
        my_bounty: [],
        crop: "",
        date_available: "",
        pickup_time_start: "",
        pickup_time_end:"",
        comment:""
      };

      componentDidMount() {
        this.loadMyBounty();
    }

    loadMyBounty = () => {
        API.getMyBounty()
          .then(res =>
            this.setState({ my_bounty: res.data, crop: "", date_available: "", pickup_time_start:"", pickup_time_end: "", comment:"" })
          )
          .catch(err => console.log(err));
      };

  render() {
    return (
        <div className="containerwrap">
        {/* Border - top */}
        <Container> 
            <Row>
                <Col xs="3" id="homeBtnCol">
                    <HomeButton />
                </Col>
                <Col xs="9" id="titleCol">
                    <h1 id="pageTitle"> Available Harvests </h1>
                </Col>
            </Row>
            <Row className="borders"></Row>
            <Row>
                <Col xs="2" id="Color1" className="imageAlign">
                    
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color2" className="imageAlign">
                
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color3" className="imageAlign">
                
                </Col>
            </Row>
            <Row className="borders">               
            </Row>
        </Container>
        {/* end of Border - top */}
        {/* Data base will populate within Jumbotron div below subtitle */}
        <Jumbotron id = "dbPopAh">
            <h4 className = "subtitle">Please select the crop you're interested in to get more details about where and when you can pick it up. </h4>
            <div className = "dbPopulate">
            {this.state.my_bounty.length ? (
              <ListGroup >
              {this.state.my_bounty.map(my_bounty => (
              <Card className="card-display" key={my_bounty._id}>
               <CardImg top width="100%" src={imagesObject[my_bounty.crop.toLowerCase()]}>
                  </CardImg>
                  <CardBody>
                      <CardTitle className="card-title">{my_bounty.crop}</CardTitle>
                      <CardText className="card-text">{my_bounty.date_available}</CardText>
                      <CardText className="card-text">From: {my_bounty.pickup_time_start}, Until: {my_bounty.pickup_time_end}</CardText>
                      <CardText>Additional Comments:{my_bounty.comments}</CardText>
                      {/* <DeleteBtn className="delete-button" onClick={() => this.deleteMyBounty(my_bounty._id)}/> */}
                  </CardBody>
              </Card>
              ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
            </div>
        </Jumbotron>
        {/* end of database Jumbotron */}
        {/* Border - bottom */}
        <Container> 
            <Row className="borders"></Row>
            <Row>
                <Col xs="2" id="Color1" className="imageAlign">
                    
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color2" className="imageAlign">
                
                </Col>
                <Col xs="3" className="imageAlign">
                <img src={require("./vegibask500.jpg")} id="vegibaskah" alt="basket of fresh vegetables"/>
                </Col>
                <Col xs="2" id="Color3" className="imageAlign">
                
                </Col>
            </Row>
            <Row className="borders">               
            </Row>
        </Container>
        {/* end of Border -bottom */}
        </div>
        );
    }
}

export default AvailHarvests;