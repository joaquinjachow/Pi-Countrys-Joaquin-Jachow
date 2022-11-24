import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'
import background from "../../Img/Mapamundo_pi.jpg"

export default function LandingPage(){
    return(
        <div className="landingContainer">
            <div>
                <h1 className="landingTitle">Paises del mundo</h1>
                <Link to ='/home'>
                    <button className="landingBtn">Ingresar</button>
                </Link>
                <div className="imagen-landing">
                    <img src={background} alt="Imagen-mapa-mundo" />
                </div>
            </div>
        </div>
    )
}