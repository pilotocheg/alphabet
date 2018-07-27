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
      orientation: window.orientation,
      width: window.innerWidth
    };
    this.orientationCallback = () => {
        this.setState({
          orientation: window.orientation,
          width: window.innerWidth
        }, () => {
          console.log(this.state.orientation)
        });
    }
    this.callback = this.orientationCallback.bind(this);
  }

  isMutedCallback(mute) {
    this.setState({
      mute: mute
    })
  }
  componentDidMount() {
    window.addEventListener('orientationchange', this.callback);
    window.addEventListener('resize', this.callback);
  }
  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.callback);
    window.removeEventListener('resize', this.callback);

  }

  render() {
    return(
      this.state.orientation === 90
      || this.state.orientation === -90
      || this.state.width >= 992
      ? <div id="main-div">
          <ControlBtns isMutedCallback={this.isMutedCallback.bind(this)}/>
          <Route exact path="/alphabet/learn" render={() => (
            <LearnApp mute={this.state.mute}/>
          )}/>
          <Route exact path="/alphabet/game" render={() => (
            <GameApp mute={this.state.mute}/>
          )}/>
        </div>
      : <div id="rotate-message">
          <p>Поверніть свій пристрій в ландшафтний режим</p>
          <img src={rotatePic} alt=""/>
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