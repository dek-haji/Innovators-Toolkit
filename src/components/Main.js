import React, { Component } from "react"
import NavBar from "./nav/NavBar"


import "./Main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ApplicationViews from "./ApplicationViews";


class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
              <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Main