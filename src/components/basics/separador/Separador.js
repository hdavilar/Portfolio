import React from 'react'
import "./Separador.css"

/**
 * Componente que muestra un separador horizontal.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * 
 * @returns Un componente con un separador horizontal. 
 */
function Separador({tema}) {
  return (
    <hr className={tema === "oscuro" ? "separador oscuro" : "separador"} />
  )
}

export default Separador