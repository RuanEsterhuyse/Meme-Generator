import React from "react"
import logo from  "../meme.png"

export default function Navbar(){
    return (
        <div>
            <nav className = "navbar">
            <img className = "logo" src={logo} alt = "logo"/>
            <h1 className="header--title">Meme Generator</h1>
            <h3 className="header-sub-title">React Course-Project 3</h3>
            </nav>
        </div>
    )
}