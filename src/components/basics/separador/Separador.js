import React from 'react'
import "./Separador.css"

function Separador({tema}) {
  return (
    <hr className={tema === "oscuro" ? "separador oscuro" : "separador"} />
  )
}

export default Separador