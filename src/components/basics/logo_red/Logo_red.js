import React from 'react'
import "./Logo_red.css"

//Archivos svg a importar
import { ReactComponent as Github } from './img/github.svg';
import { ReactComponent as LinkedIn } from './img/linkedin.svg';
import { ReactComponent as Email } from './img/email.svg';

const ICONOS = {
  github: Github,
  linkedin: LinkedIn,
  email: Email
};


function Logo_red({tema, img, enlace}) {
  const Icono = ICONOS[(img || "").toLowerCase()];

  return (
    <a href={img === "email" ? "mailto:" + enlace : enlace} target="_blank" rel="noopener noreferrer">
      <Icono width="63px" height="63px" className={tema === "oscuro" ? "icon-red oscuro" : "icon-red"} />
    </a>
  )
}

export default Logo_red