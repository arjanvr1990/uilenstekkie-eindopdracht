import React from "react";
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";
import banner from "./assets/img/banner.png"
import TileComponent from "./components/tiles/tile.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";


function App() {


  return (
    <>
        <Navigation/>
        <Header/>
        <div className="tile-wrapper">
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
        </div>
        <Footer/>

    </>
  )
}

export default App
