import React, { Component } from "react";
import {Grid, Row, Col, Button, FormControl} from "react-bootstrap";
import {SampleComp} from "../../components/SampleComp";
import {NavMaster} from "../../components/NavMaster";



class All extends Component {

    constructor(props) {
      super(props);
      this.state = {
        articles:[]
      };
    }

  render(){
    return(
      <NavMaster/>

    )
  }
}


export default All;
