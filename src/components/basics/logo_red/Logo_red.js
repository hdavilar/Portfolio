import React from 'react'
import "./Logo_red.css"

//Archivos svg a importar
import { ReactComponent as Github } from './img/github.svg';
import { ReactComponent as LinkedIn } from './img/linkedin.svg';
import { ReactComponent as Email } from './img/email.svg';

//Constante que guarda los iconos importados
const ICONOS = {
  github: Github,
  linkedin: LinkedIn,
  email: Email
};


/**
 * Componente que muesta un logo que redirige a una URL.
 * 
 * @param tema (String) Tema del logo, puede ser "oscuro" o "claro".
 * @param img (String) Nombre del logo a usar.
 * @param enlace (String) URL a la que redirige el logo.
 *  
 * @returns Un componente con un logo en svg que redirige a una URL.
 */
function LogoRed({tema, img, enlace}) {
  const Icono = ICONOS[(img || "").toLowerCase()];

  return (
    <a href={img === "email" ? "mailto:" + enlace : enlace} target="_blank" rel="noopener noreferrer">
      <Icono width="63px" height="63px" className={tema === "oscuro" ? "icon-red oscuro" : "icon-red"} />
    </a>
  )
}

export default LogoRed