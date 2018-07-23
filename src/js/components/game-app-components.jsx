import React from 'react';
import smilePic from '../../img/smile-pic.png';
import starPic from '../../img/star.png';

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
    }, 3)
  }
  render() {
    return (
      <div id="start-div" style={{ transform: `translateY(${this.state.translateY}%)` }}>
        {
          !this.props.counter 
            ?
          <div>
            <h2 id="start-div-header">Весела гра</h2>
            <p id="start-div-text">
              Це ігровий режим. Правила дуже прості: 
              необхідно з трьох картинок обрати ту, яка
              відповідає букві зліва. Щоб виграти, необхідно
              знайти правильну картинку три рази.
            </p>
            <button id="start-btn" onClick={this.props.handleStart}>давай почнемо</button>
          </div> 
            :
            (
              this.props.counter === 3 
              ?
              <div>
                <h2 id="start-div-header">Перемога!</h2>
                <img id="smile-pic" src={smilePic} alt=""/>
                <div id="stars-for-message">
                  <img src={starPic} alt=""/>
                  <img src={starPic} alt=""/>
                  <img src={starPic} alt=""/>
                </div>
                <button id="start-btn" onClick={this.props.handleStart}>Грати ще раз</button>
              </div> 
              :
              <div>
                <img id="smile-pic" src={smilePic} alt=""/>
                <button id="start-btn" onClick={this.props.handleStart}>Продовжити</button>
              </div>
            )
        }
      </div>
    )
  }
}

export class RandomImage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      opacity: 0,
    }
  }

  startAnimation() {
    this.interval = setInterval(() => {
      if (this.state.opacity >= 1) {
        clearInterval(this.interval);
        return;
      }
      this.setState({
        opacity: this.state.opacity += 0.02,
      })
    }, 1)
  }
  
  handleClick(e) {
    const picStyle = e.target.style;
    if (!this.props.isTrue) {
      this.setState({
        isTrue: this.props.letterNum === this.props.trueNum,
      },() => {
        if (this.state.isTrue) this.props.isTrueCallback(this.state.isTrue);
        picStyle.background = this.state.isTrue ? '#8ec63b' : 'red';
        picStyle.border = !this.state.isTrue || "2px solid #F9911A";
      })
    }
  }

  componentDidMount(){
    this.startAnimation();
  }
  
  render () {
    return (
      <img 
        style={{ opacity: this.state.opacity }}
        src={this.props.src}
        onClick={this.handleClick.bind(this)}
        onMouseLeave={e => {
          if(e.target.style.background === 'red')
            e.target.style.background = 'none'
          }}
      />
    )
  }
}

export class StarImg extends React.Component {
  constructor() {
    super();

    this.state = {
      opacity: 0,
      scale: 1,
    }
  }
  transformAnimation() {
    this.interval = setInterval(() => {
        this.setState({
          scale: this.state.scale += 0.01,
        })
      if (this.state.scale >= 1.3) {
        clearInterval(this.interval);
        this.setState({
          scale: 1,
          animDone: true
        })
      }
    }, 15)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.counter === this.props.ownNumber) {
      this.setState({ 
        opacity: 1,
      }, () => {
        if (!this.state.animDone) this.transformAnimation();
      })
    }
    if (!nextProps.counter) this.setState({opacity: 0})
  }

  render() {
    return(
      <img 
        src={this.props.src} 
        className="game-stars"
        style={{ 
          opacity: this.state.opacity,
          transform: `scale(${this.state.scale})`
        }}
      />
    )
  }
}