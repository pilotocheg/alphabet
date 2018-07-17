import React from 'react';

export default class GameBtn extends React.Component{
  constructor () {
    super();

    this.state = {
      mode: 'game'
    }
  }
  render() {
    return (
      <button 
      // onClick={ this.props.changeAppMode(this.state.mode) }
      id="game">
        <i className="fas fa-gamepad"></i>
      </button>
    )
  }
}