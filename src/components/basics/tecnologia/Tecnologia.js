import React from 'react'
import "./Tecnologia.css"

//Archivos svg a importar
import { ReactComponent as Java } from './img/java.svg';
import { ReactComponent as JavaScript } from './img/javascript.svg';


const ICONOS = {
  java: Java,
  javascript: JavaScript
};

function Tecnologia({ tema, texto, img }) {
  const Icono = ICONOS[(img || "").toLowerCase()];

  return (
    <div className={tema === "oscuro" ? "contenedor-tec oscuro" : "contenedor-tec"}>
      <Icono width="30px" height="30px" className={tema === "oscuro" ? "icon-tec oscuro" : "icon-tec"} />
      <label className={tema === "oscuro" ? "tex-tec oscuro" : "tex-tec"}>{texto}</label>
    </div>
  )
}

export default Tecnologia