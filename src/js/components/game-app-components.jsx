import React from 'react';

export class StartDiv extends React.Component {
  constructor() {
    super();

    this.state = {
      translateY: 0
    }
  }
  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({
        translateY: this.state.translateY + 0.5
      })
      if (this.state.translateY > 40) {
        clearInterval(this.interval);
      }
    }, 4)
  }
  render() {
    return (
      <div id="start-div" style={{ transform: `translateY(${this.state.translateY}%)` }}>
        <h2 id="start-div-header">Весела гра</h2>
        <p id="start-div-text">
          Це ігровий режим. Правила дуже прості: 
          необхідно з трьох картинок обрати ту, яка
          відповідає букві зліва. Щоб виграти, необхідно
          знайти правильну картинку три рази.
        </p>
        <button id="start-btn" onClick={this.props.handleStart}>давай почнемо</button>
      </div>
    )
  }
}