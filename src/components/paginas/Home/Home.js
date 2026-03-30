import React, { use } from 'react'
import "./Home.css"
import { useTranslation } from 'react-i18next';

import Titulo from '../../basics/titulo/Titulo'
import Texto from '../../basics/texto/Texto'
import Separador from '../../basics/separador/Separador'
import Logo_red from '../../basics/logo_red/Logo_red'
//import Cuadro_info from '../../intermedios/cuadro-info/Cuadro_info'
//import Proyecto_list from '../../intermedios/proyecto-list/Proyecto_list'

function Home({tema}) {

  const { t } = useTranslation();

  return (
    <section className='home'>
        {/*<Cuadro_info tema={tema} texto1="FP Desarrollo de Aplicaciones Web, Cáceres" texto2="2024/25" />
        <Proyecto_list tema={tema} nombreProyecto={"CometArt"} descripcion={"Descripción del proyecto aaaaaaaaa aaa aaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaa "}
         enlace={"#"} />*/}
        <Titulo tema={tema} titulo={t("nombre")} />
        <Texto tema={tema} texto={t("home_info.subtitle")} />
        <Texto tema={tema} texto={t("home_info.description1")} />
        <Separador tema={tema} />
        <Texto tema={tema} texto={t("home_info.description2")} />
        <Separador tema={tema} />
        <div className='logos'>
          <Logo_red tema={tema} img="linkedin" enlace="https://www.linkedin.com/in/hector-davila-rodriguez" />
          <Logo_red tema={tema} img="github" enlace="https://github.com/hdavilar" />
          <Logo_red tema={tema} img="email" enlace="hdavilar01@gmail.com" />
        </div>
        
        {/*<Logo_red tema={tema} img="email" enlace="#" />
        <Texto tema={tema} texto="email@email.com" />

        ¿
        <Logo_red tema={tema} img="telefono" enlace="#" />
        <Texto tema={tema} texto="123456789" />
        ?
        */}
    </section>
  )
}

export default Home