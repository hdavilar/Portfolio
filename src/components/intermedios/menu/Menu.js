import React from 'react'
import "./Menu.css"
import SelectorTema from '../../basics/selector_tema/Selector_tema'
import SelectorIdioma from '../../basics/selector_idioma/Selector_idioma'
import Opcion from '../../basics/opcion_menu/Opcion'

/**
 * Componente que representa el menú de navegación de la página.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * @param setTema (Function) Función para establecer el tema de la página.
 * @param idioma (String) Idioma de la página.
 * @param setIdioma (Function) Función para establecer el idioma de la página.
 * 
 * @returns Un componente con el menú de navegación de la página.
 */
function Menu({tema, setTema, idioma, setIdioma}) {
  return (
    <div className="menu">
        <div className='cambios'>
            <SelectorTema tema={tema} setTema={setTema} />
            <SelectorIdioma idioma={idioma} setIdioma={setIdioma} />
        </div>
        <div className='opciones'>
            <Opcion enlace="home" />
            <Opcion enlace="projects" />
            <Opcion enlace="resume" />
        </div>
    </div>
  )
}

export default Menu