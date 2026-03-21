import React from 'react'
import "./Home.css"
import Cuadro_info from '../../intermedios/cuadro-info/Cuadro_info'

function Home({tema}) {
  return (
    <div className='home'>
        <Cuadro_info tema={tema} texto1="FP Desarrollo de Aplicaciones Web, Cáceres" texto2="2024/25" />
    </div>
  )
}

export default Home