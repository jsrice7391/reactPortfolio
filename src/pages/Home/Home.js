import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import {SampleComp} from "../../components/SampleComp";
import {NavMaster, Hero} from "../../components/NavMaster";
import { pbkdf2Sync } from "crypto";
import API from "../../utils/API"
import {Card} from "react-materialize";



const pStyle = {
  height:"600px",
  width:"100%"
};

class All extends Component {

    constructor(props) {
      super(props);
      this.state = {
        articles:[],
        repos:[]
      };
    }
    
    componentWillMount(){
      API.getArticles()
      API.getRepos().then(results => {
        console.log(results)
        this.setState({
          repos: results.data
        })
      })
    }



  render(){
    return(
      <div>
      <NavMaster/>
      <Grid>
        <Row className="show-grid">
      {this.state.repos.slice(0,3).map((row, index) => (
        <Col sm={2} md={3}>
    <Card className='blue-grey darken-1' textClassName='white-text' title={row.name} actions={[<a href={row.svn_url}>This is a link</a>]}>
    {row.description}
    </Card>
</Col>
      ))}
      </Row>
      </Grid>
      </div>


    )
  }
}


export default All;
