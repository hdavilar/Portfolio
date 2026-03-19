import React from 'react'
import "./Texto.css"

function Texto({tema, texto}) {
  return (
    <label className={tema === "oscuro" ? "text oscuro" : "text"}>{texto}</label>
  )
}

export default Texto