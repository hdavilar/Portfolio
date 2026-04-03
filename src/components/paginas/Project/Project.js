import React from 'react'
import { useParams } from "react-router"
import "./Project.css"

import { useTranslation } from 'react-i18next';

import Titulo from '../../basics/titulo/Titulo'

//Imágenes de los proyectos a importar
import PixelPlanner from "./img/pixelplanner.jpg"
import Texto from '../../basics/texto/Texto';
import Separador from '../../basics/separador/Separador';
import Logo_red from '../../basics/logo_red/Logo_red';

const IMGS = {
    pixelplanner: PixelPlanner
}

function Project({ tema }) {
    const { id } = useParams();
    const { t } = useTranslation();

    const projectData = t("project", { returnObjects: true, defaultValue: [] }).find(proj => proj.name.toLowerCase() === id.toLowerCase());
    
    return (
        <section className='project'>
            <Titulo tema={tema} titulo={id.charAt(0).toUpperCase() + id.substring(1)} />
            <img src={IMGS[id]} alt={"Imagen del proyecto " + id} />

            <div className='infoProject'>
                <Texto tema={tema} texto={projectData.b_desc} />
                <Separador tema={tema} />
                <Texto tema={tema} texto={projectData.tec} />
                <Separador tema={tema} />
                <Logo_red tema={tema} img="github" enlace={""} />
            </div>

        </section>
    )
}

export default Project