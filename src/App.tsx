import React from 'react';
import './App.css';
import './style.css';
import { Menu } from "./components/Menu";
import { Outlet } from "react-router-dom";

const App = () => (
    <div className="App">
        <img className="img" src="https://www.gstatic.com/travel-frontend/animation/hero/flights_dark_theme_3.svg" alt="" />
        <Menu items={[
            { label: "Vols", to: '/' },
            { label: "Aéroports", to: '/airports' },
            { label: "Favoris", to: "/fav" }
        ]} />
        <Outlet />
    </div>
);

export default App;