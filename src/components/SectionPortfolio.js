import '../css/styles.css';
import videoWeather from '../videos/videoPruebaWeather.mp4'
import videodog from '../videos/review-pi-dog.mp4'
import github from '../images/tabler-icon-brand-github.svg'
import videorescuepets from '../videos/review-rescuepets.mp4'

function SectionPortfolio() {
  return (
    <div className="sectionPortfolio" id="portfolio">
      <h1>Proyectos</h1>
      <p>
        Estos son algunos de los proyectos que he llevado
        a cabo hasta el momento. Trato siempre de implementar
        los conceptos y las herramientas que voy aprendiendo.
      </p>
      <div className="containerProyects" >
        <div className="proyect" >
            <video autoPlay loop muted>
              <source src={videoWeather} type="video/mp4"/>
            </video>
            <div className="info">
                <h3><a href="https://julian-lop.github.io/appweather/" >Weather App</a></h3>
                <a href="https://github.com/Julian-Lop/appweather" ><img src={github}/></a>
                <p>Aplicación para ver el clima de la localización especificada.
                  Usando React, React-dom, Less y haciendo peticiones a Api.
                </p>
            </div>
        </div>
        <div className="proyect" >
            <video autoPlay loop muted>
              <source src={videodog} type="video/mp4"/>
            </video>
            <div className="info">
                <h3><a href="https://julian-lop.github.io/Client-api-dog/" >Proyecto Individual Dogs</a></h3>
                <a href="https://github.com/Julian-Lop/Client-api-dog" ><img src={github}/></a>
                <p>Proyecto individual de backend y frontend. Utilizando React, Redux, Node js, 
                  Express, Postgresql, Sequelize ORM y less. Consumiendo datos de una api y
                  guardando otros en la base de datos.
                </p>
            </div>
        </div>
        <div className="proyect" >
            <video autoPlay loop muted>
              <source src={videorescuepets} type="video/mp4"/>
            </video>
            <div className="info">
                <h3><a>Proyecto Final Rescuepets</a></h3>
                {/* <a href="https://github.com/Julian-Lop/Client-api-dog" ><img src={github}/></a> */}
                <p>Proyecto final grupal Rescuepets. Utilizando React, Redux, Node js, 
                  , pasarela de mercadopago, jwt, Express, Postgresql, Sequelize ORM y Styledmodules.
                  Tiene la finalidad de conectar a los refugios de la zona con posibles adoptantes. Cuenta con
                  vistas a los refugios, mascotas y poner hacer donaciones por parte del usuario. Por parte del refugio,
                  posee un Dashboard donde puede ver y administrar todos los datos de mascotas, seguimientos, formularios customizados,
                  respuestas de formularios, estadisticas. También tiene un Dashboard administrativo para poder deshabilitar refugios, mascotas
                  y demás. Contando este con estadisticas de los refugios con respecto a mascotas y donaciones.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionPortfolio;