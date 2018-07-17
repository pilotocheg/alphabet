import React from 'react';

export default class ControlBtns extends React.Component{
  constructor () {
    super();

    this.state = {
      mode: 'learn'
    }
  }
  
  render() {
    return (
      <div id="btn-container">
        <button 
          onClick={ this.props.changeSound }
          id="sound"
        >
          <i className="fas fa-volume-up"></i>
        </button>
        <button 
        // onClick={ this.props.changeAppMode(this.state.mode) }
          id="abc"
        >
          <i className="fas fa-book-open"></i>
        </button>
        <button 
        // onClick={ this.props.changeAppMode(this.state.mode) }
          id="game"
        >
          <i className="fas fa-gamepad"></i>
        </button>
      </div>
    )
  }
}
