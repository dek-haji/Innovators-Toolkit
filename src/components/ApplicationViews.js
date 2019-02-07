import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import IdeaManager from "../components/modules/IdeaManager"
import IdeaList from "../components/idea/IdeaList"
import IdeaForm from "./idea/IdeaForm"
import Login from "./authentication/loginAssets/Login"
import UsersManager from "./modules/UsersManager"
import Registeration from "./authentication/loginAssets/Registration"
import SignUpManager from "../components/modules/SignUpManager"




export default class ApplicationViews extends Component {
    state = {
        idea: []
    };
    isAuthenticated = () => sessionStorage.getItem("username") !== null
    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/idea")
            .then(r => r.json())
            .then(r => {
                console.log(r)
                newState.idea = r
                console.log(newState)
                this.setState(newState)

            })
            this.updateComponent()
            
        
        }
        addIdea = (idea) => IdeaManager.post(idea)
            .then(() => IdeaManager.getAll())
            .then(AllIdea => this.setState({

                idea: AllIdea

            })
            );
            addUser = (user) => SignUpManager.post(user)

        deleteIdea = id => {
            return fetch(`http://localhost:5002/idea/${id}`, {
                method: "DELETE"
            })
                .then(e => e.json())
                .then(() => fetch(`http://localhost:5002/idea`))
                .then(e => e.json())
                .then(idea => this.setState({
                    idea: idea
                }))
        }
        updateComponent = () => {

            UsersManager.getAll().then(allUsers => {
                this.setState({ users: allUsers });
            })
        }

        render() {
            return (
                <React.Fragment>
                    
        <Route path="/login" render={(props) => {
          return <Login {...props}
          users={this.state.users}
          updateComponent={this.updateComponent} />
        }} />
         <Route path="/register" render={(props) => {
          return <Registeration {...props}
            addUser={this.addUser} />
        }} />
                    <Route
                        exact
                        path="/idea" render={props => {
                            return <IdeaForm {...props} addIdea={this.addIdea} />
                        }}
                    />
                    <Route exact path="/idea" render={(props) => {
                        if (this.isAuthenticated()) {
                            return (
                              <IdeaList
                                deleteIdea={this.deleteIdea}
                                idea={this.state.idea}
                               
                              />
                            );
                          } else {
                            return <Redirect to="/login" />;
                          }
                        return <IdeaList deleteIdea={this.deleteIdea} idea={this.state.idea} />
                    }} />
                </React.Fragment>
            )
        }

    }
