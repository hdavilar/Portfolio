import React from 'react'
import './Titulo.css'

function Titulo({tema, titulo}) {
  return (
    <h1 className = {tema === "oscuro" ? "tit oscuro" : "tit" }>{titulo}</h1>
  )
}

export default Titulo