import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const home = () => {

    return (
        <div>
        <header>
            
            <ul>
                <li>
                    <Link to="/Pages/home/index.js">Home</Link>
                </li>
                <li>
                    <Link to="/">Formulario</Link>
                </li>
                <li>
                    <Link to="/Pages/sobre/index.js">Sobre</Link>
                </li>
            </ul>
            

        </header>
        <h1> aeeeeeeeeeeeeee </h1>
        </div>
    )
}




