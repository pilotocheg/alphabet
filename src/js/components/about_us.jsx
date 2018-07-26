import React from 'react';
import { Link } from "react-router-dom";
import memberPics from '../../img/team/**.jpg';
import girrafePic from '../../images/pic_9.png';
import toyPic from '../../images/pic_12.png';

export default function AboutUs () {
  return(
    <div className="container">
			<div className="s_width">
				<header>
					<h1>
	          ВЕСЕ<span className="stroke">Л</span><br />
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
            <Link to="/alphabet">
              <p className="nav_link" id="link-3" href=""><span>Н</span>А <span>Г</span>ОЛОВНУ</p>
            </Link>
				  </div>
					<p className="title_primary">
            <span>І</span>нтерактивна <span>а</span>бетка <span>д</span>ля <span>д</span>ітей
          </p>
				</header>
        <div id="about-description">
          <h2 id="about-title"><span>П</span>ро <span>н</span>ас:</h2>
          <p className="text">
            Дана програма створена для кращого засвоєння абетки за допомогою гри, 
            випускниками "A-Level Poltava" курсу "Front-End".
            У проекті були використані такі технології: HTML5, CSS3, JavaScript, React. 
            В програмі є навчальний та ігровий режими. 
            Всі картинки взяті з інтернету, звуки записані власноруч. 
          </p>
        </div>
        <div id="members-container">
          {/* <h2 id="team-title"><span>Н</span>аша <span>к</span>оманда:</h2> */}
          <div className="team-member">
            <img src={memberPics['slavik']} alt=""/>
            <h3>Дмитрієв Вячеслав</h3>
          </div>
          <div className="team-member">
            <img src={memberPics['andrew']} alt=""/>
            <h3>Абросенков Андрій</h3>
          </div>
          <div className="team-member">
            <img src={memberPics['sveta']} alt=""/>
            <h3>Харченко Світлана</h3>
          </div>
          <div className="team-member">
            <img src={memberPics['alexandr']} alt=""/>
            <h3>Бардовський Олександр</h3>
          </div>
        </div>
        <img src={girrafePic} alt="" id="girrafe-pic"/>
        <img src={toyPic} alt="" id="toy-pic"/>
			</div>
		</div>
  )
}