import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar(){
    return(
        <nav className="navBarContainer">
            <div className="navBarElementContainer">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/addressbook" className="navLink">Addressbuch</Link>
            </div>
        </nav>
    )
}

export default Navbar