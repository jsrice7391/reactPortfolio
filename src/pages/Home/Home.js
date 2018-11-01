import React, { Component } from "react";
import {Grid, Row, Col, Button, FormControl} from "react-bootstrap";
import {SampleComp} from "../../components/SampleComp";
import {NavMaster} from "../../components/NavMaster";
import { pbkdf2Sync } from "crypto";

const pStyle = {
  height:"600px",
  width:"100%"
};

class All extends Component {

    constructor(props) {
      super(props);
      this.state = {
        articles:[]
      };
    }

  render(){
    return(
      <div>
      <NavMaster/>
        <img src="https://s3.us-east-2.amazonaws.com/friend-finder333/markus-spiske-445253-unsplash.jpg" style={pStyle}/>
      </div>

    )
  }
}


export default All;
