import React from 'react';

export default class AbcBtn extends React.Component{
  constructor () {
    super();

    this.state = {
      mode: 'learn'
    }
  }
  
  render() {
    return (
      <button 
      // onClick={ this.props.changeAppMode(this.state.mode) }
      id="abc">
        <i className="fas fa-book-open"></i>
      </button>
    )
  }
}