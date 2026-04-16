import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "./Opcion.css"

//Archivos svg a importar
import { ReactComponent as Home } from './img/home.svg';
import { ReactComponent as Resume } from './img/resume.svg';
import { ReactComponent as Projects } from './img/projects.svg';

//Constante que guarda los iconos importados
const ICONOS = {
  home: Home,
  resume: Resume,
  projects: Projects
};

/**
 * Componete que contiene una opción del menú de navegación.
 * 
 * @param enlace (String) Nombre de la opción del menú.
 *  
 * @returns Un componente con una opción del menú de navegación.
 */
function Opcion({enlace}) {
    const Icono = ICONOS[(enlace || "").toLowerCase()];
    const { t } = useTranslation();
    const ruta = enlace.toLowerCase();

    return (
        <li className="op-menu">
            <NavLink to={ruta === "home" ? "/" : ruta} className={({ isActive }) => isActive ? "op-menu-link active" : "op-menu-link"}>
                <Icono width="30px" height="30px" className="icon-op" />
                <label>{t(enlace)}</label>
            </NavLink>
        </li>
    )
}

export default Opcion