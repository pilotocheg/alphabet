import React from 'react';

export default class Pic extends React.Component{
  render() {
    return (
      <img src={ this.props.src }/>
    )
  }
}