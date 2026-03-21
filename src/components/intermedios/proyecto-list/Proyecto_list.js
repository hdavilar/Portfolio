import React from 'react'
import "./Proyecto_list.css"
import Texto from '../../basics/texto/Texto'
import Titulo from '../../basics/titulo/Titulo'
import Logo_red from '../../basics/logo_red/Logo_red'

function Proyecto_list({tema}) {
  return (
    <li className={tema === "oscuro" ? "p-list oscuro" : "p-list claro"}>
        <div>
            {/*Imagen del proyecto*/}
            <img src="" alt="Imagen del proyecto" />
            {/*Nombre del proyecto*/}
            <Titulo tema={tema} titulo="Nombre del proyecto" />
            {/*Descripción del proyecto*/}
            <Texto tema={tema} texto="Descripción del proyecto" />
        </div>
        {/*Enlace al proyecto (logo github)*/}
        <Logo_red tema={tema} img="github" enlace="#" />
    </li>
  )
}

export default Proyecto_list