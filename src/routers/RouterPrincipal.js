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



function RouterPrincipal() {

    const [tema, setTema] = useState("claro");
    const [idioma, setIdioma] = useState("");
    const { t } = useTranslation();

    useEffect(() => {
        if(localStorage.getItem("i18nextLng")){
            setIdioma(localStorage.getItem("i18nextLng"));
            i18n.changeLanguage(localStorage.getItem("i18nextLng"));
        }else{
            setIdioma("es");
            localStorage.setItem("i18nextLng", "es");
            i18n.changeLanguage("es");
        }
    }, [idioma]);

    useEffect(() => {
        if(localStorage.getItem("tema")){
            setTema(localStorage.getItem("tema"));
        }else{
            setTema("claro");
            localStorage.setItem("tema", "claro");
        }
    }, [tema]);


    return (
        <BrowserRouter>

            {/* MENU */}
<Texto tema={tema} texto={t("home")} />
<Separador tema={tema}/>
            <section className={tema === "oscuro" ? "contenido oscuro" : "contenido"}>
                <Routes>
                    <Route path="/" element={<Selector_idioma idioma={idioma} setIdioma={setIdioma}/>} />
                    <Route path="/inicio" element={<Selector_tema tema={tema} setTema={setTema}/>} />
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