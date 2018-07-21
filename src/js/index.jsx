import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './components/game-app';
import LearnApp from './components/learn-app';
import Home from './components/home';
import ControlBtns from './components/control-btns';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <div id="main-div">
        <ControlBtns />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/learn" component={LearnApp}/>
          <Route exact path="/game" component={GameApp}/>
          <Route path="*" component={<h1>PAGE NOT FOUND</h1>}/> 
        </Switch>
      </div>
      {/* <Home /> */}
    </div>
  </Router>,
  document.getElementById('root')
)