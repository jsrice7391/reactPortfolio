import React, { PureComponent } from 'react'
import {
    Link
} from 'react-router-dom'

export class Staging extends React.PureComponent {
    render(){
        return(
            <div>
            <h4>Hey sorry, updating the website to be built in React.</h4>
            <h4>If you TRULY wish to see whats going on in my life, check here:</h4>
            <a href="https://twitter.com/jsrice617"> Twitter </a>
            <br/>
            <a href="https://medium.com/@jsrice7391"> Medium </a>
            <br/>
            <i><Link to="/staging">This is what it currently looks like</Link></i>
            </div>
        )
    }
}