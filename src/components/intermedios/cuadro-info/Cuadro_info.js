import React from 'react'
import { useTranslation } from "react-i18next";
import "./Cuadro_info.css"
import Texto from '../../basics/texto/Texto'

/**
 * Componente que representa un cuadro informativo con dos textos.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * @param texto1 (String) Primer texto a mostrar.
 * @param texto2 (String) Segundo texto a mostrar.
 * 
 * @returns Un componente con un cuadro informativo.
 */
function Cuadro_info({tema, texto1, texto2}) {

    const { t } = useTranslation();

    return (
        <div className={tema === "oscuro" ? "c-info oscuro" : "c-info"}>
            <Texto tema={tema} texto={texto1} /> {/* <Texto tema={tema} texto={t(texto1)} /> */}
            <Texto tema={tema} texto={texto2} />
        </div>
    )
}

export default Cuadro_info