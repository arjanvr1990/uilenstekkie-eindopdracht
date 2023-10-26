import React from "react";
import './App.css'
import Navigation from "./components/navigation/Navigation.jsx";

import TileComponent from "./components/tiles/tile.jsx";


function App() {


  return (
    <>
        <Navigation/>
        <div className="container">

        <div className="headerHomePage">
        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440,f_auto/DCTM_Penguin_UK_DK_AL1020144_ypzddl.jpg" alt=""/>
      <div className="page-content">
          <h1>Welkome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet odio blandit, mattis odio id, lacinia eros. Donec pharetra nisl ut odio suscipit, egestas pretium tellus congue. Phasellus ante diam, posuere vel venenatis nec, aliquam in augue. Fusce eu fermentum lectus. Mauris feugiat felis in justo malesuada consequat. Aenean ex massa, ultricies et gravida lobortis, volutpat vel nulla. Pellentesque maximus ipsum vel sapien tristique imperdiet. Sed commodo, orci ac pretium aliquet, tellus sem varius urna, non convallis ante lectus egestas erat. Etiam dapibus bibendum elit, ac sagittis orci gravida quis.</p>
      </div>
    </div>
        </div>
        <div className="tile-wrapper">
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
        </div>

    </>
  )
}

export default App
