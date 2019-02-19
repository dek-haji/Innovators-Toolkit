import React, { Component } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import brain from "../loginAssets/brain.png"
import UsersManager from "../../modules/UsersManager"
import IdeaManager from "../../modules/IdeaManager"


export default class Login extends Component {
    // Set initial state
    state = {
        email: "",
        username: ""
    }
// // trying to update the props.
//     componentDidUpdate(prevProps) {

//         if (this.props.username !== prevProps.username) {
//             this.updateComponent(this.props.username);
//         }


// }


// updateComponent = () => {

//     UsersManager.getAll().then(allUsers => {
//         this.setState({ users: allUsers });
//         console.log(allUsers)
//     })
//     IdeaManager.getAll()
//         .then(allIdea => {
//             this.setState({
//                 idea: allIdea
//             })
//         })
// }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

    //    Setting username in session storage. Grabbing the username from session 
    //storage and searching through "users" in the datatbase. The .find attempts to find 
    //a username that matches the username in session storage. If able to find a match, 
    //log in under that user. If not, display message that username not found.

        sessionStorage.setItem(
            "username",
            this.state.username)

        let currentUser = sessionStorage.getItem("username")
        //????
        console.log(this.props.users)
        console.log(this.state)
        let authenticated = this.props.users.find(user =>
            user.name === this.state.username && user.email === this.state.email )
            console.log(currentUser)
            console.log(this.props.users)

            console.log(authenticated)
// authenticated is not getting the updated props. thats why is throwing an arror.and it's also undefined.
            // sessionStorage.setItem(
            //     "userId",
            //     authenticated.id)

            if (authenticated === undefined){
                alert("Please re-renter a valid username and email or sign up below!")
                
                this.props.history.push("/register")
            } else {
                sessionStorage.setItem(
                    "userId",
                    authenticated.id)

                          // UPDATING THE COMPONENT WITHOUT REFRESHING THE PAGE
                         this.props.updateComponent()
                         // Taking user to idea page
                         this.props.history.push("/idea")
                        
                    }


            
    }
   componentDidMount() {
       if(sessionStorage.getItem("username") !== null){
           sessionStorage.removeItem("username")
           sessionStorage.removeItem("userId")
           sessionStorage.removeItem("credentials")
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
                    <input onChange={this.handleFieldChange} type="email"
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