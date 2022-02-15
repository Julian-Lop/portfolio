import '../css/styles.css';
import Body from './Body.js'
import barmenu from '../images/tabler-icon-menu-2.svg'
import github from '../images/tabler-icon-brand-github.svg'
import linkedin from '../images/tabler-icon-brand-linkedin.svg'
import email from '../images/tabler-icon-mail.svg'
import $ from 'jquery';

function App() {

  $(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 300);
      return false;
    });
  });

  function mostrar(){
    if(document.querySelector('.menulist')){
        const menu = document.querySelector('.menulist')
        menu.classList.toggle('menulist')
        menu.classList.toggle('showmenulist')
    }else if(document.querySelector('.showmenulist')){
        const menu = document.querySelector('.showmenulist')
        menu.classList.toggle('showmenulist')
        menu.classList.toggle('menulist')
    }    
  }

  return (
    <div className="App">
        <div className="nav">
          <button className="barmenu" onClick={mostrar}>
              <img src={barmenu} alt="barra-menu"/></button>
          <div className="navsuper" ></div>
          <ul className="menulist" >
            <a href="https://github.com/Julian-Lop">
              <li>
                  <img src={github} alt="icon1" />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/juli%C3%A1n-andr%C3%A9s-l%C3%B3pez-casta%C3%B1eda-924682223/">
              <li>
                  <img src={linkedin} alt="icon2" />
              </li>
            </a>
            <a href="#contact">  
              <li>
                  <img src={email} alt="icon3" />
              </li>
            </a>
            <a href="#about" ><li>Acerca de mí</li></a>
            <a href="#portfolio" ><li>Portfolio</li></a>
            <a href="#contact"><li>Contacto</li></a>
          </ul>
        </div>
        <div className='container' >
          <Body/>
        </div>
    </div>
  );
}

export default App;
