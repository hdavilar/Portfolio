import React, {useEffect, useState} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import "../i18n";

//Componentes
import Titulo from '../components/basics/titulo/Titulo'; 
import Texto from '../components/basics/texto/Texto';
import Selector_tema from '../components/basics/selector_tema/Selector_tema';
import Selector_idioma from '../components/basics/selector_idioma/Selector_idioma';
import Separador from '../components/basics/separador/Separador';
import Tecnologia from '../components/basics/tecnologia/Tecnologia';
import Logo_red from '../components/basics/logo_red/Logo_red';
import Opcion from '../components/basics/opcion_menu/Opcion';
import Menu from '../components/intermedios/menu/Menu';
import Home from '../components/paginas/Home/Home';



function RouterPrincipal({idioma, setIdioma}) {

    const [tema, setTema] = useState("claro");
    const { t } = useTranslation();

    useEffect(() => {
        if(localStorage.getItem("tema")){
            setTema(localStorage.getItem("tema"));
        }else{
            setTema("claro");
            localStorage.setItem("tema", "claro");
        }
    }, []);

    return (
        <BrowserRouter>

            {/* MENU */}
            <Menu tema={tema} setTema={setTema} idioma={idioma} setIdioma={setIdioma}/>

{/*<Tecnologia tema={tema} texto={t("home")} img="javascript" />
<Separador tema={tema}/>
<Logo_red tema={tema} img="linkedin" enlace="#" />
<ul>
    <Opcion enlace="home" />
</ul>*/}

            <section className={tema === "oscuro" ? "contenido oscuro" : "contenido"}>
                <Routes>
                    <Route path="/" element={<Home tema={tema} />} />
                    {/*<Route path="/home" element={<Home />} />*/}
                    <Route path="/resume" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    {/*<Route path="/anadir" element={<Anadir tema={tema} usuario_actual={info_usuario} />} >
                        <Route path='' element={<FormularioAnadir/>} />
                        <Route path=':id' element={<FormularioAnadir/>} />
                    </Route>*/}
                    
                </Routes>
            </section>
            

        </BrowserRouter>
  )
}

export default RouterPrincipal