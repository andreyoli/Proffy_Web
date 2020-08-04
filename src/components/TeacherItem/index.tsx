import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="foto de perfil"/>
        <div>
          <strong>Diego Fernandes</strong>
          <span>Quimica</span>
        </div>
      </header>
      
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, mollitia. Eligendi rem quasi 
        consequuntur sint magnam possimus suscipit dolores hic quas vel? Labore alias dolorem modi autem 
        eligendi soluta quasi?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt=""/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;