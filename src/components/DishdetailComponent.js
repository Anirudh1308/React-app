import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component(
    constructor (props){
        super(props);

        console.log(props);

        this.state={
            selectedDishDetail: this.props.dsdetail 
        };
    }
)