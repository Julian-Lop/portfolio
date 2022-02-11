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
            <li>
              <a href="https://github.com/Julian-Lop?tab=repositories">
                <img src={github} alt="icon1" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/juli%C3%A1n-andr%C3%A9s-l%C3%B3pez-casta%C3%B1eda-924682223/">
                <img src={linkedin} alt="icon2" />
              </a>  
            </li>
            <li>
              <a href="#contact">
                <img src={email} alt="icon3" />
              </a>
            </li>
            <li><a href="#about" >About</a></li>
            <li><a href="#portfolio" >Portfolio</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
        </div>
        <div className='container' >
          <Body/>
        </div>
    </div>
  );
}

export default App;
