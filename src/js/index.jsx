import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './components/game-app';
import LearnApp from './components/learn-app';
import ControlBtns from './components/control-btns';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
  <div id="main-div">
    <ControlBtns />
    <Switch>
      <Route exact path="/learn" component={LearnApp}/>
      <Route exact path="/game" component={GameApp}/>
      {/* <Route path="*" component={<h1>PAGE NOT FOUND</h1>}/> */}
    </Switch>
  </div>
  </Router>,
  document.getElementById('root')
)