import { Link } from "react-router-dom";
import pic1 from '../../img/pic.jpg';
import pic2 from '../../img/pic-1.jpg';
import React from 'react';

export default class Home extends React.Component {
  constructor(){
    super();

    this.state = {
      translateX1text: -100,
      translateX2text: 0,
      translateX1image: -100,
      translateX2image: 0,
      opacityText1: 0,
      opacityText2: 1,
      opacityImage1: 0,
      opacityImage2: 1
    }
  }

  slideForward() {
    this.setState({
      translateX1text: 0,
      translateX2text: 100,
      opacityText1: 1,
      opacityText2: 0,
    }, () => {
      setTimeout(() => {
        this.setState({
          translateX1image: 0,
          translateX2image: 100,
          opacityImage1: 1,
          opacityImage2: 0
        })
      }, 500)
    })
  }

  slideBackward() {
    this.setState({
      translateX1image: -100,
      translateX2image: 0,
      opacityImage1: 0,
      opacityImage2: 1
    }, () => {
      setTimeout(() => {
        this.setState({
          translateX1text: -100,
          translateX2text: 0,
          opacityText1: 0,
          opacityText2: 1,
        })
      }, 500)
    })
  }

  onButtonHover(e) {
    if(e.target.style.opacity !== "0.5") {
      e.target.style.color = '#d12a7b';
      e.target.style.border = '4px solid #d12a7b';
    }
  }

  onButtonUnhover(e) {
    e.target.style.color = '#fff';
    e.target.style.border = '4px solid #8EC63B';
  }

  render() {
    return(
      <div className="container">
        <div className="s_width">
          <header>
            <h1>
              ВЕСЕ<span className="stroke">Л</span><br/>
              <span id="big-letter">A</span>
              <span id="second-word">
                <span className="stroke">Б</span>ЕТКА
              </span>
            </h1>
            <div className="navigation">
              <Link to="/alphabet/learn">
                <p className="nav_link" id="link-1" href=""><span>В</span>ЧИТИСЯ</p>
              </Link>
              <Link to="/alphabet/game">
                <p className="nav_link" id="link-2" href=""><span>Г</span>РАТИ</p>
              </Link>
              <Link to="/alphabet/about">
                <p className="nav_link" id="link-3" href=""><span>П</span>РО <span>Н</span>АС</p>
              </Link>
            </div>
            <p className="title_primary">
              <span>І</span>нтерактивна <span>а</span>бетка <span>д</span>ля <span>д</span>ітей
            </p>
          </header>
          <div className="content">
            <div className="description">
              <div
                style={{
                  transform: `translateX(${this.state.translateX1text}%)`,
                  opacity: this.state.opacityText1
                }}
                id="learn"
                className="learn"
              >
                <h2><span>В</span>ЧИТИСЯ</h2>
                <p>Ця програма допоможе дітям вивчати абетку, 
                завдяки яскравим картинкам та звукам.
                Також має цікавий ігровий режим.</p>
                <Link to="/alphabet/learn">
                  <button className="btn">Вчитися</button>
                </Link>
              </div>
              <div
                style={{
                  transform: `translateX(${this.state.translateX2text}%)`,
                  opacity: this.state.opacityText2
                }}
                id="play"
                className="play"
              >
                <h2><span>Г</span>РАТИ</h2>
                <p>Цей режим поєднує в собі навчання та гру. 
                Він допоможе дітям краще засвоїти літери, та зрозуміти 
                їх зв'язок із словами.</p>
                <Link to="/alphabet/game">
                  <button className="btn">Грати</button>
                </Link>
              </div>
            </div>
            <div className="images">
              <img
                style={{
                  transform: `translateX(${this.state.translateX1image}%)`,
                  opacity: this.state.opacityImage1
                }}
                id="slider1"
                src={pic1}
              />
              <img style={{
                  transform: `translateX(${this.state.translateX2image}%)`,
                  opacity: this.state.opacityImage2
                }}
                id="slider2"
                src={pic2}
              />
            </div>
            <button
              style={{ opacity: this.state.translateX2text ? "1" : "0.5" }}
              className="nav"
              id="nav_left"
              onClick={this.slideBackward.bind(this)}
              onMouseOver={this.onButtonHover.bind(this)}
              onMouseLeave={this.onButtonUnhover.bind(this)}
            >&lsaquo;
            </button>
            <button
              style={{ opacity: !this.state.translateX2text ? "1" : "0.5" }}
              className="nav"
              id="nav_right"
              onClick={this.slideForward.bind(this)}
              onMouseOver={this.onButtonHover.bind(this)}
              onMouseLeave={this.onButtonUnhover.bind(this)}
            >&rsaquo;
            </button>
          </div>
        </div>
      </div>
    )
  }
}

