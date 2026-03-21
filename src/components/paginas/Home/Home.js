import React from 'react'
import "./Home.css"
import Cuadro_info from '../../intermedios/cuadro-info/Cuadro_info'
import Proyecto_list from '../../intermedios/proyecto-list/Proyecto_list'

function Home({tema}) {
  return (
    <div className='home'>
        <Cuadro_info tema={tema} texto1="FP Desarrollo de Aplicaciones Web, Cáceres" texto2="2024/25" />
        <Proyecto_list tema={tema} />
    </div>
  )
}

export default Home