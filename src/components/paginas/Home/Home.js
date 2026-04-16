import "./Home.css"
import { useTranslation } from 'react-i18next';

import Titulo from '../../basics/titulo/Titulo'
import Texto from '../../basics/texto/Texto'
import Separador from '../../basics/separador/Separador'
import LogoRed from '../../basics/logo_red/Logo_red'
//import Cuadro_info from '../../intermedios/cuadro-info/Cuadro_info'
//import Proyecto_list from '../../intermedios/proyecto-list/Proyecto_list'

/**
 * Componente que representa la página de inicio del portafolio.
 * 
 * @param tema (String) Tema de la página, puede ser "oscuro" o "claro".
 * 
 * @returns Un componente con la página de inicio del portafolio.
 */
function Home({tema}) {

  const { t } = useTranslation();

  return (
    <section className='home'>
        <title>{t("home")}</title>
        
        <Titulo tema={tema} titulo={t("nombre")} />
        <Texto tema={tema} texto={t("home_info.subtitle")} />
        
        <Texto tema={tema} texto={t("home_info.description1")} />

        <Separador tema={tema} />
        
        <Texto tema={tema} texto={t("home_info.description2")} />
        
        <Separador tema={tema} />
        
        <div className='logos'>
          <LogoRed tema={tema} img="linkedin" enlace="https://www.linkedin.com/in/hector-davila-rodriguez" />
          <LogoRed tema={tema} img="github" enlace="https://github.com/hdavilar" />
          <LogoRed tema={tema} img="email" enlace="hdavilar01@gmail.com" />
        </div>
        
        {/*
        <Logo_red tema={tema} img="telefono" enlace="#" />
        <Texto tema={tema} texto="123456789" />
        */}
    </section>
  )
}

export default Home