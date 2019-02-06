import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"



class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark  light-grey flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/idea">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">/ Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">/ Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/log-out">/ Log out</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar