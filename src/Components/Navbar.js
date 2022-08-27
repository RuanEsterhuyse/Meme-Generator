import React from "react"
import logo from  "../meme.png"

export default function Navbar(){
    return (
        <div>
            <nav className = "navbar">
            /<img className = "logo" src={logo} alt = "logo"/>
            <h1 className="header--title">Meme Generator</h1>
        
            </nav>
        </div>
    )
}