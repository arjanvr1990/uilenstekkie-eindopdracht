import React from "react";
import "./Footer.css"

function Footer() {


    return (
        <>
            <footer>
                <div className="footer-banner">
                    <p>.</p>
                </div>
                <div className="footer-container">
                    <h4>🏕️ Mini Camping 't Uilenstekkie</h4>
                    <div className="footer-items">
                    <ul className="footer-nav">
                        <li>Home</li>
                        <li>Omgeving</li>
                        <li>Prijzen</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="footer-adres">
                        <li>adres regel 1</li>
                        <li>adres regel 2</li>
                        <li>telefoonnummer</li>
                        <li>emailadres</li>
                    </ul>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer