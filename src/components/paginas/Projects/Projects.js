import React from 'react'
import "./Projects.css"
import { useTranslation } from 'react-i18next';
import Titulo from '../../basics/titulo/Titulo'
import Proyecto_lit from '../../intermedios/proyecto-list/Proyecto_list';

function Projects({tema}) {

    const { t } = useTranslation();
    const projectList = t("project", { returnObjects: true, defaultValue: [] });

  return (
    <section className='projects'>
        <title>{t("projects")}</title> 
        
        <Titulo titulo={t("projects")} tema={tema}/>
        <div className='listado'>
            {projectList.map((project, index) => (
                <Proyecto_lit
                    key={`${project.name}-${index}`}
                    tema={tema}
                    nombreProyecto={project.name}
                    descripcion={project.l_desc}
                    enlace={project.name.toLowerCase()}
                    enlace_git={project.github}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects