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
      isLandscape: window.outerWidth > window.outerHeight
    };
    // console.log(this.state.isLandscape)
    this.callback = this.orientationCallback.bind(this);
  }

  orientationCallback() {
    let isTrue = window.outerWidth > window.outerHeight;
    if (isTrue && this.state.isLandscape !== isTrue) {
      this.setState({
        isLandscape: isTrue
      }, () => {
        // console.log(this.state.isLandscape)
      });
    } else if (!isTrue && this.state.isLandscape !== isTrue ) {
      this.setState({
        isLandscape: isTrue
      }, () => {
        // console.log(this.state.isLandscape)
      });
    }
  }
  isMutedCallback(mute) {
    this.setState({
      mute: mute
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.callback);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.callback);
  }

  render() {
    return(
      this.state.isLandscape
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