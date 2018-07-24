import React from 'react';
import ReactDOM from 'react-dom';
import GameApp from './components/game-app';
import LearnApp from './components/learn-app';
import Home from './components/home';
import AboutUs from './components/about_us';
import ControlBtns from './components/control-btns';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class MainDiv extends React.Component {
  constructor() {
    super();

    this.state = {
      mute: false
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
        <Route exact path="/learn" render={() => (
          <LearnApp mute={this.state.mute}/>
        )}/>
        <Route exact path="/game" render={() => (
          <GameApp mute={this.state.mute}/>
        )}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={AboutUs}/>
      <Route path="*" component={MainDiv}/>
    </Switch>
  </Router>,
  document.getElementById('root')
)