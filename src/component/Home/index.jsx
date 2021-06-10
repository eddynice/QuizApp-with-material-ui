import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="title">
                <h1> 
                    <p>Hi,</p>
                    <p>i'm Osazee </p>
                    <p>A software developer </p>
                </h1>
                <Link to="about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img src="assest/oo.jpg" alt="" style={{ height:260}} />
            

            </div>
        </div>
    )
}
