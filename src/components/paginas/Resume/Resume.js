import React from 'react'
import "./Resume.css"

import { useTranslation } from 'react-i18next';
import Titulo from '../../basics/titulo/Titulo'
import Texto from '../../basics/texto/Texto';
import Tecnologia from '../../basics/tecnologia/Tecnologia';
import Cuadro_info from '../../intermedios/cuadro-info/Cuadro_info';

function Resume({tema}) {

    const { t } = useTranslation();
    const allSkills = [
        "Java",
        "JavaScript"
    ];

    const allEdu = [
        {
            t1: "FP Superior de Desarrollo de Aplicaciones Multiplataforma, IES Ágora, Cáceres",
            t2: "2022 - 2024"
        },
        {
            t1: "FP Superior de Desarrollo de Aplicaciones Web, IES Ágora, Cáceres",
            t2: "2024 - 2025"
        },
        {
            t1: "Ingeniería telemática en Telecomunicaciones, UEX, Mérida",
            t2: "2025 - Actualidad"
        }
        
    ]

    const allExp = [
        {
            t1: "Desarrollo de Middleware, Viewnext",
            t2: "3 meses"
        },
        {
            t1: "Desarrollo de web, Viewnext",
            t2: "8 meses"
        }
        
    ]

    return (
        <section className='resume'>
            <title>{t("resume")}</title>

            <Titulo titulo={t("resume")} tema={tema}/>
            <div className='info-res'>
                <Texto texto={t("skills")} tema={tema}/>
                <div className='skills'>
                    {allSkills.map((skill, index) => (
                        <Tecnologia key={`${skill}-${index}`} tema={tema} texto={skill} />
                    ))}
                </div>
                
                <Texto texto={t("education")} tema={tema}/>
                <div className='edu'>
                    {allEdu.map((edu, index) => (
                        <Cuadro_info key={`${edu}-${index}`} tema={tema} texto1={edu.t1} texto2={edu.t2} />
                    ))}
                </div>

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