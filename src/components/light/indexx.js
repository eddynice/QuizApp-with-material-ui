//import React from 'react';
import { useState, useEffect } from 'react';
import "./style.css"

export default function Light() {
    const storeMode = localStorage.getItem("Datk_node")
    const [dark, setdark] = useState(storeMode);


    const toggle = () => {
        setdark(dark ? false : true)
    }

    useEffect(() => {
        localStorage.setItem("Datk_node",dark)
    },
     [dark]);


    return ( 
         <div className = "App"
        data-theme = { dark ? "dark" : "light" } >
        <h1 > jdjk </h1> <button onClick = { toggle } > { dark ? "switch to light" : "switch to dark" }


        </button> </div>
    )
}