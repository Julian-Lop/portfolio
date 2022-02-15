import '../css/styles.css';
import cvpdf from '../Documentos/cv_Julian_Lopez.pdf'
import html from '../images/html-5.png'
import js from '../images/js.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import css from '../images/css.png'
import node from '../images/node.png'
import less from '../images/less.png'
import postgresql from '../images/postgresql.png'
import mysql from '../images/mysql.png'

function SectionAbout() {
  return (
    <div className="sectionAbout" id="about">
      <div className="imagenperfil">
        <div className="back" ></div>
        <div className="front" ></div>
      </div>
      <div className="info" >
        <div className="left-part" >
          <h2>Acerca de mí</h2>
          <p>
            Soy desarrollador web, fullstack. Con técnico en programación de software,
            hice el bootcamp de HENRY, estudio ingeniería en sistemas y soy muy
            apasionado por este campo.
            <br/>
            <br/>
            Tecnologías: <br/> 
          </p>
          <ul className="iconos-about">
            <li><img src={html} /></li>
            <li className="larger"><img src={less}/></li>
            <li className="larger"><img src={css}/></li>
            <li><img src={js}/></li>
            <li><img src={react}/></li>
            <li className="larger"><img src={redux}/></li>
            <li className="larger"><img src={node}/></li>
            <li className="larger"><img src={postgresql}/></li>
            <li className="larger"><img src={mysql}/></li>
          </ul>  
        </div>
        <div>
            <a href={cvpdf} download><button>Download CV</button></a>
        </div>
      </div>

    </div>
  )
}

export default SectionAbout;