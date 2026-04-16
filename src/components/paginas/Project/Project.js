import React from 'react'
import { useParams } from "react-router"
import "./Project.css"

import { useTranslation } from 'react-i18next';

import Titulo from '../../basics/titulo/Titulo'
import Texto from '../../basics/texto/Texto';
import Separador from '../../basics/separador/Separador';
import Logo_red from '../../basics/logo_red/Logo_red';

import { importarImgs } from '../../../utils/images';

//Constante con las imágenes de los proyectos.
const IMGS = importarImgs("Project");

/**
 * Componente que representa la página de un proyecto con el nombre en la URL.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * 
 * @returns Un componente con la página de un proyecto.
 */
function Project({ tema }) {
    const { id } = useParams();
    const { t } = useTranslation();

    const projectData = t("project", { returnObjects: true, defaultValue: [] })
        .find(proj => proj.name.toLowerCase() === id.toLowerCase());
    const pName = projectData.name; 

    return (
        <section className='project'>
            <title>{pName}</title>

            <Titulo tema={tema} titulo={pName} />
            <img src={IMGS[id]} alt={"Imagen del proyecto " + pName} />

            <div className='infoProject'>
                <Texto tema={tema} texto={projectData.b_desc} />

                <Separador tema={tema} />
                
                <Texto tema={tema} texto={projectData.tec} />
                
                <Separador tema={tema} />
                
                <div className='links'>
                    {projectData.github.split("||").map((enlace, index) => (
                        <Logo_red key={`github-${index}`} tema={tema} img="github" enlace={enlace.trim()} />
                    ))}                    
                </div>
            </div>

        </section>
    )
}

export default Project