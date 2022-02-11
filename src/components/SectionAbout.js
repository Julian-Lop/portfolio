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
            Hola, soy Julian Lopez, desarrollador web, front-end
            y back-end. Con técnico en programación de software
            he hecgo bootcamp de desarrollador fullstack y soy muy
            apasionado por este campo.
          </p>
        </div>
        <div>
            <button>Download CV</button>
        </div>
      </div>

    </div>
  )
}

export default SectionAbout;