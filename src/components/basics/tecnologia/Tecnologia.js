import React from 'react'
import "./Tecnologia.css"

//Archivos svg a importar
import { ReactComponent as Java } from './img/java.svg';
import { ReactComponent as JavaScript } from './img/javascript.svg';

//Constante que guarda los iconos importados
const ICONOS = {
  java: Java,
  javascript: JavaScript
};

/**
 * Componente que muestra una tecnología con su respectivo icono.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * @param texto (String) Nombre de la tecnología a mostrar.
 * 
 * @returns Un componente con una tecnología con su respectivo icono.
 */
function Tecnologia({ tema, texto }) {
  const Icono = ICONOS[(texto.toLowerCase() || "").toLowerCase()];

  return (
    <div className={tema === "oscuro" ? "contenedor-tec oscuro" : "contenedor-tec"}>
      <Icono width="30px" height="30px" className={tema === "oscuro" ? "icon-tec oscuro" : "icon-tec"} />
      <label className={tema === "oscuro" ? "tex-tec oscuro" : "tex-tec"}>{texto}</label>
    </div>
  )
}

export default Tecnologia