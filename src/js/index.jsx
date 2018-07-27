import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './components/game-app';
import LearnApp from './components/learn-app';
import Home from './components/home';
import AboutUs from './components/about_us';
import ControlBtns from './components/control-btns';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import rotatePic from '../img/rotate-device.png';

class MainDiv extends React.Component {
  constructor() {
    super();

    this.state = {
      mute: false,
    };
  }

  isMutedCallback(mute) {
    this.setState({
      mute: mute
    })
  }

  render() {
    return(
      <div id="main-div">
        <ControlBtns isMutedCallback={this.isMutedCallback.bind(this)}/>
        <Route exact path="/alphabet/learn" render={() => (
          <LearnApp mute={this.state.mute}/>
        )}/>
        <Route exact path="/alphabet/game" render={() => (
          <GameApp mute={this.state.mute}/>
        )}/>
        <div id="rotate-message">
          <div id="rotate-content">
            <p>Поверніть свій пристрій в ландшафтний режим</p>
            <img src={rotatePic} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/alphabet" component={Home}/>
      <Route exact path="/alphabet/about" component={AboutUs}/>
      <Route path="/alphabet/*" component={MainDiv}/>
    </Switch>
  </Router>,
  document.getElementById('root')
)