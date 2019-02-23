import React, { Component } from "react"
import "./Login.css"

export default class Register extends Component {

    // Set initial state
    state = {
        name: "",
        email: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        evt.preventDefault(); // added evt.preventDefault();
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewUser = () => {
        const user = {
            name: this.state.name,
            email: this.state.email
        }

        this.props.addUser(user)
        .then(() =>this.props.populateAppState())
        .then(() => this.props.history.push("/login"))
    }

    render() {
        return (
            <section className="register">
                <form onSubmit={this.handleRegister}>


                    <h2>Sign up</h2>
                    <label htmlFor="inputUsername">
                    </label><br></br>
                    <input onChange={this.handleFieldChange} type="text"
                        id="name"
                        placeholder="Enter your username"
                        required autoFocus="" />
                        <br></br>
                    <label htmlFor="inputEmail">
                    </label>
                    <br></br>
                    <input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Enter your email"
                        required />
                        <br></br>

                    <button type="submit" onClick={() => this.constructNewUser()} className="btn btn-primary signIn">
                        Sign Up
                    </button>
                </form>
            </section>
        )
    }
}