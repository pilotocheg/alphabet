import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/main-app';
import ControlBtns from './components/control-btns';

ReactDOM.render(
  <div id="main-div">
    <ControlBtns />
    <MainApp />
  </div>,
  document.getElementById('root')
)