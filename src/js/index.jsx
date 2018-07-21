import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './components/game-app';
import LearnApp from './components/learn-app';
import Home from './components/home';
import ControlBtns from './components/control-btns';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function MainDiv() {
  return(
    <div id="main-div">
      <ControlBtns />
        <Route exact path="/learn" component={LearnApp}/>
        <Route exact path="/game" component={GameApp}/>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="*" component={MainDiv}/> 
    </Switch>
  </Router>,
  document.getElementById('root')
)