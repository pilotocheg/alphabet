import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import GameApp from './components/game-app';
import LearnApp from './components/learn-app';
import Home from './components/home';
import AboutUs from './components/about_us';
import ControlBtns from './components/control-btns';
import rotatePic from '../img/rotate-device.png';

class MainDiv extends React.Component {
  constructor() {
    super();

    this.state = {
      mute: false,
      isLandscape: window.innerWidth > window.innerHeight,
    };
    this.callback = this.orientationCallback.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.callback);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.callback);
  }

  orientationCallback() {
    const isLandscape = window.innerWidth > window.innerHeight;
    if (this.state.isLandscape !== isLandscape) {
      this.setState({ isLandscape });
    }
  }
  isMutedCallback(mute) {
    this.setState({ mute });
  }

  render() {
    return this.state.isLandscape ? (
      <div id="main-div">
        <ControlBtns isMutedCallback={this.isMutedCallback.bind(this)} />
        <Route
          exact
          path="/alphabet/learn"
          render={() => <LearnApp mute={this.state.mute} />}
        />
        <Route
          exact
          path="/alphabet/game"
          render={() => <GameApp mute={this.state.mute} />}
        />
      </div>
    ) : (
      <div id="rotate-message">
        <p>Поверніть свій пристрій в ландшафтний режим</p>
        <img src={rotatePic} alt="" />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/alphabet" />} />
      <Route exact path="/alphabet" component={Home} />
      <Route exact path="/alphabet/about" component={AboutUs} />
      <Route path="/alphabet/*" component={MainDiv} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
