import React from 'react'
import "./Proyecto_list.css"
import Texto from '../../basics/texto/Texto'
import Titulo from '../../basics/titulo/Titulo'
import Logo_red from '../../basics/logo_red/Logo_red'

const imgsProyecto = require.context('../../../img-projects', false, /\.(png|jpe?g|webp|gif)$/)

function getImagenProyecto(nombreProyecto) {
  const nNorm = nombreProyecto.indexOf(" ") !== -1 ? nombreProyecto.substring(0, nombreProyecto.indexOf(" ")).toLowerCase() : nombreProyecto.toLowerCase()
  console.log(nNorm)
  const extensiones = ['jpg', 'jpeg', 'png', 'webp', 'gif']

  for (const extension of extensiones) {
    const archivo = `./${nNorm}.${extension}`
    if (imgsProyecto.keys().includes(archivo)) {
      return imgsProyecto(archivo)
    }
  }

  return ''
}

function Proyecto_list({tema, nombreProyecto, descripcion, enlace, enlace_git}) {
  const imagenSrc = getImagenProyecto(nombreProyecto)

  return (
    <li className={tema === "oscuro" ? "p-list oscuro" : "p-list"}>
        <div className='b-info'>
            {/*Imagen del proyecto*/}
            <img src={imagenSrc} alt={`Imagen de ${nombreProyecto}`} />
            <div>
              {/*Nombre del proyecto*/}
              <a href={`/${nombreProyecto.toLowerCase().replace(" ", "-")}`} className='enlace-p'>
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