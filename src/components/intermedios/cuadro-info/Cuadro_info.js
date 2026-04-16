import React from 'react'
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
function CuadroInfo({tema, texto1, texto2}) {

    return (
        <div className={tema === "oscuro" ? "c-info oscuro" : "c-info"}>
            <Texto tema={tema} texto={texto1} /> 
            <Texto tema={tema} texto={texto2} />
        </div>
    )
}

export default CuadroInfo