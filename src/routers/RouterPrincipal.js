import React, {useEffect, useState} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router';
import "../i18n";

//Componentes
import Menu from '../components/intermedios/menu/Menu';
import Home from '../components/paginas/Home/Home';
import Projects from '../components/paginas/Projects/Projects';
import Resume from '../components/paginas/Resume/Resume';
import Project from '../components/paginas/Project/Project';



function RouterPrincipal({idioma, setIdioma}) {

    const [tema, setTema] = useState("claro");

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

            <section className={tema === "oscuro" ? "contenido oscuro" : "contenido"}>
                <Routes>
                    <Route path="/" element={<Home tema={tema} />} />
                    {/*<Route path="/home" element={<Home />} />*/}
                    <Route path="/resume" element={<Resume tema={tema} />} />
                    <Route path="/projects" element={<Projects tema={tema}/>} />
                    <Route path='/project/:id' element={<Project tema={tema}/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </section>
            

        </BrowserRouter>
  )
}

export default RouterPrincipal