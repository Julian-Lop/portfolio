import '../css/styles.css';

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
            Hola, soy Julian Lopez, desarrollador web, fullstack. Con técnico en programación de software
            hice el bootcamp de HENRY, estudio ingeniería en sistemas y soy muy
            apasionado por este campo.
          </p>
        </div>
        <div>
            <a href="../Documentos/cv_Julian_Lopez.pdf" download="Cv-JulianLopez.pdf"><button>Download CV</button></a>
        </div>
      </div>

    </div>
  )
}

export default SectionAbout;