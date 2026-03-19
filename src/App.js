import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import RouterPrincipal from './routers/RouterPrincipal';
import "./App.css"
import i18n from 'i18next';

function App() {

    const [idioma, setIdioma] = useState("");

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

    

    return (
        <RouterPrincipal idioma={idioma} setIdioma={setIdioma}/>
    );
}   

export default App