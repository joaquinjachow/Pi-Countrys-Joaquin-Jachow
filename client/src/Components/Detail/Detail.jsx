import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/action";
import { useEffect } from "react";
import './Detail.css'

export default function Detail(props){
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])
    const myCountry = useSelector ((state) => state.detail)

    return(
        <div>
            {
                myCountry.length>0 ?
                <div className="container">
                    <div>
                        <img className="img" src={myCountry[0].flag} alt="Bandera del Pais"/>
                    </div>
                    <div className="card-detail">
                        <h1>Nombre: {myCountry[0].name}</h1>
                        <h2>Id: {myCountry[0].id}</h2>
                        <h2>Capital: {myCountry[0].capital}</h2>
                        <h2>Continente: {myCountry[0].subregion}</h2>
                        <h2>Area: {myCountry[0].area} km²</h2>
                        <h2>Poblacion: {myCountry[0].population}</h2>
                    </div>
                    <div className="container-activities-cards">
                        {myCountry[0].activities.length? <h1><b>Activities:</b></h1>:""}
                        {myCountry[0].activities?.map(e=><div>
                            <ul className="card-activities">
                                <h2>Nombre: {e.name}</h2>
                                <h2>Dificultad: {e.dificulty}</h2>
                                <h2>Duracion: {e.duration}</h2>
                                <h2>Temporada: {e.season}</h2>
                            </ul>
                        </div>)}
                    </div>
                </div> : <p>Cargando...</p>
            }
            <Link to= '/home'>
                <button>Volver</button>
            </Link>
        </div>
    )
}