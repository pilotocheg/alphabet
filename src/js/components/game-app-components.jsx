import React from 'react';
import smilePic from '../../img/smile-pic.png';
import starPic from '../../img/star.png';

export class StartDiv extends React.Component {

  componentDidMount() {
    this.messageWindow.animate([
      {transform: 'translateY(0)'},
      {transform: 'translateY(40%)'}
    ], {duration: 400})
  }
  render() {
    return (
      <div id="start-div" ref={e => this.messageWindow = e}>
        {
          !this.props.counter
          ? <div>
              <h2 id="start-div-header">Весела гра</h2>
              <p id="start-div-text">
                Це ігровий режим. Правила дуже прості:
                необхідно з трьох картинок обрати ту, яка
                відповідає букві зліва. Щоб виграти, необхідно
                знайти правильну картинку три рази.
              </p>
              <button id="start-btn" onClick={this.props.handleStart}>давай почнемо</button>
            </div>
          : (
              this.props.counter === 3
              ? <div>
                  <h2 id="start-div-header">Перемога!</h2>
                  <img id="smile-pic" src={smilePic} alt=""/>
                  <div id="stars-for-message">
                    <img src={starPic} alt=""/>
                    <img src={starPic} alt=""/>
                    <img src={starPic} alt=""/>
                  </div>
                  <button id="start-btn" onClick={this.props.handleStart}>Грати ще раз</button>
                </div>
              : <div>
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

   this.state = {};
  }

  handleClick(e) {
    const picStyle = e.target.style;
    if (!this.props.isTrue) {
      this.setState({
        isTrue: this.props.letterNum === this.props.trueNum,
      },() => {
        try {
          this.props.isTrueCallback(this.state.isTrue);
          picStyle.background = this.state.isTrue ? '#8ec63b' : 'red';
          picStyle.border = !this.state.isTrue || "2px solid #F9911A";
        } catch (err) {
          console.log(err);
        }
      })
    }
  }

  componentDidMount(){
    this.image.animate([
      {opacity: '0'},
      {opacity: '1'}
    ], {duration: 600})
  }

  render () {
    return (
      <img
        ref={e => this.image = e}
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
    }
  }
  elemAnimation() {
    this.starPic.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ], {duration: 700})
    this.setState({animDone: true});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.counter === this.props.ownNumber) {
      this.setState({
        opacity: 1,
      }, () => {
        try {
          if (!this.state.animDone) this.elemAnimation();
        } catch (err) {
          console.log(err);
        }
      })
    }
    if (!nextProps.counter) this.setState({opacity: 0});
  }

  render() {
    return(
      <img
        ref={e => this.starPic = e}
        src={this.props.src}
        className="game-stars"
        style={{ opacity: this.state.opacity }}
      />
    )
  }
}