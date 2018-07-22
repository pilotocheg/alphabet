import { Link } from "react-router-dom";

export function Home () {
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
					<p className="title_primary">Інтерактивна абетка для дітей</p>
				</header>
	            <div className="navigation">
	                <a className="nav_link" id="link-1" href=""><span>В</span>ЧИТИСЯ</a>
	                <a className="nav_link" id="link-2" href=""><span>Г</span>РАТИ</a>
	                <a className="nav_link" id="link-3" href=""><span>П</span>РО <span>Н</span>АС</a>
				</div>
				<div className="text">
					Дана програма створена для кращого спийняття абетки з допомогою гри. Створена на реакті майбутніми 4 випускниками Frond End. Використано два режима. Один - для вивчення абетки, інший - для гри. В роботі були використані картинки взяті з простор інтернету та звуки, власного запису. 
					З приводу питань та зауважень звертатися за адресою:
					м.Полтава, вул. Соборності, 72
				</div>
				<div className="contacts">
					<a className="call" href="+38 098 122 90 79">+38 098 122 90 79</a>
					<a className="email" href="mailto: abc@email.com">abc@email.com</a>
				</div>
			</div>
		</div>
  	)
}