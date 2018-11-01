import React, { Component } from "react";
import {Grid, Row, Col, Button, FormControl} from "react-bootstrap";
import {SampleComp} from "../../components/SampleComp";
import {NavMaster, Hero} from "../../components/NavMaster";
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
      <Hero>

      </Hero>
      </div>


    )
  }
}


export default All;
