import React from 'react'
import "./Texto.css"

/**
 * Componente que representa un texto normal de la página.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * @param texto (String) Texto a mostrar.
 * 
 * @returns Un componente con el texto representado.
 */
function Texto({tema, texto}) {
  return (
    <label className={tema === "oscuro" ? "text oscuro" : "text"}>{texto}</label>
  )
}

export default Texto