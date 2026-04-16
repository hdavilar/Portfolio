import React from 'react'
import './Titulo.css'

/**
 * Componente que representa un título de la página.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * @param titulo (String) Título a mostrar.
 * 
 * @returns Un componente con el título representado.
 */
function Titulo({tema, titulo}) {
  return (
    <h1 className = {tema === "oscuro" ? "tit oscuro" : "tit" }>{titulo}</h1>
  )
}

export default Titulo