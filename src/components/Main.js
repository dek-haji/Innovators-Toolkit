import React, { Component } from "react"
import NavBar from "./nav/NavBar"


import "./Main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ApplicationViews from "./ApplicationViews";


class Main extends Component {
    // isAuthenticated = () => sessionStorage.getItem("username") !== null
    // showNav = () => {
    //     if (this.isAuthenticated()) {
    //         return <NavBar />
    //     } else {
    //         return null
    //     }
    



    render() {
        return (
            <React.Fragment>
                {/* {this.showNav()} */}
                
                <ApplicationViews />

            </React.Fragment>
        )
    }
}

export default Main