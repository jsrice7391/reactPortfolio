import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import DocumentTitle from "react-document-title";
import List from "./pages/List";
import {Grid} from "react-bootstrap";

const App = () => (
  <DocumentTitle title="My React Homepage">
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/all' component={List}/>
          <Route component={NoMatch}/>
        </Switch>
        </div>
    </Router>
  </DocumentTitle>
)

export default App;
