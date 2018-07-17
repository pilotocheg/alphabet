import React from 'react';
import ReactDOM from 'react-dom';
import LearnApp from './components/learn-app';
import ControlBtns from './components/control-btns';
// import { BrowserRouter as Route, Switch } from "react-router-dom";

ReactDOM.render(
  <div id="main-div">
    <ControlBtns />
    <LearnApp />
  </div>,
  document.getElementById('root')
)