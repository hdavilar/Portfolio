import React from 'react'
import "./Menu.css"
import Selector_tema from '../../basics/selector_tema/Selector_tema'
import Selector_idioma from '../../basics/selector_idioma/Selector_idioma'
import Opcion from '../../basics/opcion_menu/Opcion'

function Menu({tema, setTema, idioma, setIdioma}) {
  return (
    <div className="menu">
        <div className='cambios'>
            <Selector_tema tema={tema} setTema={setTema} />
            <Selector_idioma idioma={idioma} setIdioma={setIdioma} />
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