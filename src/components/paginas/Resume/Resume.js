import React from 'react'
import "./Resume.css"

import { useTranslation } from 'react-i18next';
import Titulo from '../../basics/titulo/Titulo'
import Texto from '../../basics/texto/Texto';
import Tecnologia from '../../basics/tecnologia/Tecnologia';
import Cuadro_info from '../../intermedios/cuadro-info/Cuadro_info';

/**
 * Componente que representa la página de resumen del portfolio, con información sobre habilidades, 
 * educación y experiencia.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro". 
 * 
 * @returns Un componente con la página de resumen del portfolio.
 */
function Resume({tema}) {

    const { t } = useTranslation();
    const allSkills = t("resume_info.skills", { returnObjects: true, defaultValue: [] });

    const allEdu = t("resume_info.education", { returnObjects: true, defaultValue: [] });

    const allExp = t("resume_info.experience", { returnObjects: true, defaultValue: [] });

    return (
        <section className='resume'>
            <title>{t("resume")}</title>

            <Titulo titulo={t("resume")} tema={tema}/>

            <div className='info-res'>
                {/*Habilidades*/}
                <Texto texto={t("skills")} tema={tema}/>
                <div className='skills'>
                    {allSkills.map((skill, index) => (
                        <Tecnologia key={`${skill}-${index}`} tema={tema} texto={skill} />
                    ))}
                </div>
                
                {/*Educación*/}
                <Texto texto={t("education")} tema={tema}/>
                <div className='edu'>
                    {allEdu.map((edu, index) => (
                        <Cuadro_info key={`${edu}-${index}`} tema={tema} texto1={edu.t1} texto2={edu.t2} />
                    ))}
                </div>

                {/*Experiencia*/}
                <Texto texto={t("experience")} tema={tema}/>
                <div className='exp'>
                    {allExp.map((exp, index) => (
                        <Cuadro_info key={`${exp}-${index}`} tema={tema} texto1={exp.t1} texto2={exp.t2} />
                    ))}
                </div>
            </div>
            

        </section>
    )
}

export default Resume