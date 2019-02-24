import React, { Component } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import brain from "../loginAssets/brain.png"


export default class Login extends Component {
    // Set initial state
    state = {
        email: "",
        username: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        sessionStorage.setItem("username", this.state.username)

        let currentUser = sessionStorage.getItem("username")
        let authenticated = this.props.users.find(user =>
            user.name === currentUser )

        if (authenticated === undefined){
            alert("Please re-renter a valid username and email or sign up below!")
            this.props.history.push("/register")
        } else {
            sessionStorage.setItem("userId", authenticated.id)
            this.props.populateAppState()
            this.props.history.push("/idea")
        }
    }

   componentDidMount() {
       if(sessionStorage.getItem("username") !== null){
           sessionStorage.removeItem("username")
           sessionStorage.removeItem("userId")
       }
   }

    render()
    {


        return (

            <section className="login">
                <form className="registerContainer" onSubmit={this.handleLogin}>
                <img src={brain} className="acornIcon" alt="acornIcon" height="60" width="60"></img>
                    <h2>Please sign in</h2>
                    <label htmlFor="inputUsername">
                    </label> <br></br>
                    <input onChange={this.handleFieldChange} type="text"
                        id="username"
                        placeholder="Username"
                        required autoFocus="" />
                        <br></br>
                    <label htmlFor="inputEmail">
                    </label>
                    <br></br>
                    <input onChange={this.handleFieldChange} type="email" //onchange is a listener
                        id="email"
                        placeholder="Email"
                        required />
                        <br></br>
                    <button type="submit" className="btn btn-primary signIn" >Sign in </button>

                    <p className="signUp">Don't have an account? <Link className="nav-link signUpLink" to="/register">Sign Up</Link></p>
                </form>
            </section>
        )
    }
}