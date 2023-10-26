import React from 'react';
import "./tile.css"
import backgroundImage from "/src/assets/img/img.png"

const TileComponent = () => {
    return (
        <div className="TegelComponent">
            <div className="tile-container">
                <div style={{ backgroundImage: `url(${backgroundImage})` }} className="outer-square">
                    <div className="inner-square">
                        <h2>Titel</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TileComponent;
