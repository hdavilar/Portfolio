import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import RouterPrincipal from './routers/RouterPrincipal';
import "./App.css"

function App() {
    const { t } = useTranslation();

    return (
        <RouterPrincipal/>
    );
}   

export default App