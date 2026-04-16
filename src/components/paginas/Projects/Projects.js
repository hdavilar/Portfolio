import React from 'react'
import "./Projects.css"
import { useTranslation } from 'react-i18next';
import Titulo from '../../basics/titulo/Titulo'
import ProyectList from '../../intermedios/proyecto-list/Proyecto_list';

/**
 * Componente que representa la página de proyectos del portafolio, con una lista de proyectos.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * 
 * @returns Un componente con la página de proyectos del portafolio.
 */
function Projects({tema}) {

    const { t } = useTranslation();
    const projectList = t("project", { returnObjects: true, defaultValue: [] });

  return (
    <section className='projects'>
        <title>{t("projects")}</title> 
        
        <Titulo titulo={t("projects")} tema={tema}/>
        <div className='listado'>
            {projectList.map((project, index) => (
                <ProyectList
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