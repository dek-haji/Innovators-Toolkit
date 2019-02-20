import React, { Component } from "react"



import "./Main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ApplicationViews from "./ApplicationViews";


class Main extends Component {
  
    render() {
        return (
            <React.Fragment>

                <ApplicationViews />

            </React.Fragment>
        )
    }
}

export default Main