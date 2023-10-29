import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>🏕️ Mini Camping 't Uilenstekkie</h4>

                <ul className="nav-items">
                    <li>Home</li>
                    <li>Omgeving</li>
                    <li>Prijzen</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;