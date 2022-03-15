import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/styles.css';


function SectionContact() {
  const [errorName, setErrorName] = useState('not numbers')
  const [errorEmail, setErrorEmail] = useState('email invalid')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  function validateForm(target){
    let errorN = ''
    let errorE = ''
    const regExpNum = /(?=.*[0-9])/
    const regExpEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(target.name === 'name' || target.name === 'email'){
      if(target.name === 'name'){
        if(regExpNum.test(target.value) || !target.value){
          errorN = 'not numbers'
          console.log(errorName+'|'+errorEmail)
        }else{
          errorN= ''
        }
        setErrorName(errorN)
        setNombre(target.value)
      }
      
      if(target.name === 'email'){
        if(regExpEmail.test(target.value)){
          errorE = ''
        }else{
          errorE = 'email invalid'
          console.log(errorEmail+'|'+errorName)
        }
        setErrorEmail(errorE)
        setEmail(target.value)
      }
     
    }else{
      setMensaje(target.value)
    }
    
  }

  function enviarEmail(e){
    e.preventDefault();
    if(!errorName && !errorEmail){
      emailjs.sendForm('gmailMensajeForm', 'template_pu1aqwb', e.target,'user_2P3A2kGKipIK2t8RPnwUP')
        .then((result) => {
            alert('mensaje enviado con exito')
        }, (error) => {
            alert(error.message)
        });
        setNombre('')
        setEmail('')
        setMensaje('')
    }
    setNombre('')
    setEmail('')
    setMensaje('')
  }

  return (
    <div className="sectionContact" id="contact">
      <div>
        <h1>Contacto</h1>
      </div>
      <div className="containerForm">
          <form onSubmit={(enviarEmail)}>
            <label>Nombre</label>
            <input type='text' name='name' value={nombre} onChange={e => validateForm(e.target)}></input>
            <label>Email</label>
            <input type='text' name='email' value={email} onChange={e => validateForm(e.target)}></input>
            <label>Por qué quieres contactarme</label>
            <textarea type='text' name='message' value={mensaje} onChange={e => validateForm(e.target)}></textarea>
            {/* <input type='submit'  className='botonSend' value='Enviar' /> */}
            <button type='submit' disabled={ (errorName || errorEmail) && true} >Enviar</button>
          </form>
      </div>
    </div>
  )
}

export default SectionContact;