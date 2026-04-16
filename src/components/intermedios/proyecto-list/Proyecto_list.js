import React from 'react'
import "./Proyecto_list.css"
import Texto from '../../basics/texto/Texto'
import Titulo from '../../basics/titulo/Titulo'
import LogoRed from '../../basics/logo_red/Logo_red'

import { importarImgs } from '../../../utils/images';

//Constante con las imágenes de los proyectos.
const IMGS = importarImgs("proyecto-list");

/**
 * Componente que representa un proyecto en la lista de proyectos.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * @param nombreProyecto (String) Nombre del proyecto.
 * @param descripcion (String) Descripción del proyecto.
 * @param enlace_git (String) Enlace al repositorio de GitHub del proyecto.
 * 
 * @returns Un componente con un proyecto como un ítem de una lista.
 */
function ProyectList({tema, nombreProyecto, descripcion, enlace_git}) {
  
  return (
    <li className={tema === "oscuro" ? "p-list oscuro" : "p-list"}>
        <div className='b-info'>
            {/*Imagen del proyecto*/}
            <img src={IMGS[nombreProyecto.toLowerCase()]} alt={`Imagen de ${nombreProyecto}`} />
            <div>
              {/*Nombre del proyecto*/}
              <a href={"/project/" + nombreProyecto.toLowerCase()} className='enlace-p'>
                <Titulo tema={tema} titulo={nombreProyecto} />
              </a>
              {/*Descripción del proyecto*/}
              <Texto tema={tema} texto={descripcion} />
            </div>
            
        </div>
        {/*Enlace al proyecto (logo github)*/}
        <LogoRed tema={tema} img="github" enlace={enlace_git} />
    </li>
  )
}

export default ProyectList