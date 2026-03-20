import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "./Opcion.css"

//Archivos svg a importar
import { ReactComponent as Home } from './img/home.svg';
import { ReactComponent as Resume } from './img/resume.svg';
import { ReactComponent as Projects } from './img/projects.svg';

const ICONOS = {
  home: Home,
  resume: Resume,
  projects: Projects
};


function Opcion({enlace}) {
    const Icono = ICONOS[(enlace || "").toLowerCase()];
    const { t } = useTranslation();

    return (
        <li className="op-menu">
            <Icono width="30px" height="30px" className="icon-op" />
            <NavLink to={enlace.toLowerCase()}>{t(enlace)}</NavLink>
        </li>
    )
}

export default Opcion