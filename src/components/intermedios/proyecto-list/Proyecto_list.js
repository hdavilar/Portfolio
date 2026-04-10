import React from 'react'
import "./Proyecto_list.css"
import Texto from '../../basics/texto/Texto'
import Titulo from '../../basics/titulo/Titulo'
import Logo_red from '../../basics/logo_red/Logo_red'

import { importarImgs } from '../../../utils/images';

function Proyecto_list({tema, nombreProyecto, descripcion, enlace_git}) {
  //const imagenSrc = getImagenProyecto(nombreProyecto)
  const src = importarImgs("proyecto-list");
  return (
    <li className={tema === "oscuro" ? "p-list oscuro" : "p-list"}>
        <div className='b-info'>
            {/*Imagen del proyecto*/}
            <img src={src[nombreProyecto.toLowerCase()]} alt={`Imagen de ${nombreProyecto}`} />
            <div>
              {/*Nombre del proyecto*/}
              <a href={"/" + nombreProyecto.toLowerCase()/*.replace(" ", "-")*/} className='enlace-p'>
                <Titulo tema={tema} titulo={nombreProyecto} />
              </a>
              {/*Descripción del proyecto*/}
              <Texto tema={tema} texto={descripcion} />
            </div>
            
        </div>
        {/*Enlace al proyecto (logo github)*/}
        <Logo_red tema={tema} img="github" enlace={enlace_git} />
    </li>
  )
}

export default Proyecto_list