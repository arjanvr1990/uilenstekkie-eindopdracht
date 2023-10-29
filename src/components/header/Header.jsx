import React from 'react';
import './Header.css';
import banner from "../../assets/img/banner.png";

function Header() {
  return (
      <div className="container">

          <div className="weatherApiInfo">
              <p>weer app</p>
          </div>
          <div className="headerHomePage">
              <div className="page-content">

                  <h2 className="headerTitlePart1">Altijd een lekker plekkie...</h2>
                  <img src={banner} alt=""/>

                  <h2 className="headerTitlePart2">...op camping 'T Uilenstekkie</h2>
              </div>
          </div>
          <div className="weatherApiInfo">
              <p>weer app</p>
          </div>
      </div>
  );
}

export default Header;