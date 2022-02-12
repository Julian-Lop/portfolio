import '../css/styles.css';
import cvpdf from '../Documentos/cv_Julian_Lopez.pdf'

function SectionAbout() {
  return (
    <div className="sectionAbout" id="about">
      <div className="imagenperfil">
        <div className="back" ></div>
        <div className="front" ></div>
      </div>
      <div className="info" >
        <div className="left-part" >
          <h2>About</h2>
          <p>
            Hola, soy Julian Lopez, desarrollador web, fullstack. Con técnico en programación de software,
            hice el bootcamp de HENRY, estudio ingeniería en sistemas y soy muy
            apasionado por este campo.
            Tecnologías en frontend: HTML / JavaScript / React / Redux / CSS / Less.
            Tecnologías en backend: Node js / Express / Postgresql / MySql / MongoDB / Sequelize ORM.
          </p>
        </div>
        <div>
            <a href={cvpdf} download><button>Download CV</button></a>
        </div>
      </div>

    </div>
  )
}

export default SectionAbout;