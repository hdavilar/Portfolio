import React from 'react'
import { useTranslation } from "react-i18next";
import "./Cuadro_info.css"
import Texto from '../../basics/texto/Texto'

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