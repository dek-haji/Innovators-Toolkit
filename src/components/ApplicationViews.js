import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import IdeaManager from "../components/modules/IdeaManager"
import Login from "./authentication/loginAssets/Login"
import UsersManager from "./modules/UsersManager"
import Registeration from "./authentication/loginAssets/Registration"
import SignUpManager from "../components/modules/SignUpManager"
import IdeaEditForm from "./idea/IdeaEditForm"
import Idea from "./idea/Idea"






export default class ApplicationViews extends Component {
    state = {
        okIdea: [],
        betterIdea: [],
        bestIdea: [],
        users: []


    };
    isAuthenticated = () => sessionStorage.getItem("username") !== null
    componentDidMount() {

        IdeaManager.getOkIdeas()
            .then(okIdeas => {
                this.setState({
                    okIdea: okIdeas
                })
            })

        IdeaManager.getBetterIdeas()
            .then(better => {
                this.setState({
                    betterIdea: better
                })
            })

        IdeaManager.getBestIdeas()
            .then(best => {
                this.setState({
                    bestIdea: best
                })
            })
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
        // this.addUser()
        // Hannah: commented out to keep new user from being added on


    }

    addIdea = (idea) => IdeaManager.post(idea)
        .then(() => IdeaManager.getOkIdeas())
        .then(AllIdea => this.setState({

            okIdea: AllIdea

        })
        );
    addUser = (user) => SignUpManager.post(user)

    deleteOkIdea = id => {
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/idea?categoryId=1`))
            .then(e => e.json())
            .then(idea => this.setState({
                okIdea: idea,

            }))
    }
    deleteBetterIdea = id => {
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/idea?categoryId=2`))
            .then(e => e.json())
            .then(idea => this.setState({
                betterIdea: idea,

            }))
    }
    deleteBestIdea = id => {
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/idea?categoryId=3`))
            .then(e => e.json())
            .then(idea => this.setState({
                bestIdea: idea,

            }))
    }



    editIdea = (id, idea) => {
        return IdeaManager.updateIdea(id, idea)
            .then(() => IdeaManager.getOkIdeas())
            .then(idea => this.setState({
                okIdea: idea



            }))
    }

    forwardComponent1 = (id, idea) => {
        return IdeaManager.changeComponent(id, idea)
            .then(() => IdeaManager.getBetterIdeas())
            .then(idea => this.setState({
                betterIdea: idea




            }))
            .then(() => IdeaManager.getOkIdeas())
            .then(idea => this.setState({
                okIdea: idea
            }))

    }
    forwardComponent2 = (id, idea) => {
        return IdeaManager.changeComponent(id, idea)
            .then(() => IdeaManager.getBestIdeas())
            .then(idea => this.setState({
                bestIdea: idea



            }))
            .then(() => IdeaManager.getOkIdeas())
            .then(idea => this.setState({
                betterIdea: idea
            }))
    }
    updateComponent = () => {

        UsersManager.getAll().then(allUsers => {
            this.setState({ users: allUsers });
        })
        IdeaManager.getAll()
            .then(allIdea => {
                this.setState({
                    idea: allIdea
                })
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
                        return <Idea {...props}
                            okIdea={this.state.okIdea}
                            addIdea={this.addIdea}
                            deleteOkIdea={this.deleteOkIdea}
                            deleteBetterIdea={this.deleteBetterIdea}
                            deleteBestIdea={this.deleteBestIdea}
                            betterIdea={this.state.betterIdea}
                            bestIdea={this.state.bestIdea}
                            forwardComponent1={this.forwardComponent1}
                            forwardComponent2={this.forwardComponent2}
                        />
                    }}
                />

                <Route path="/idea/:ideaId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                        return <IdeaEditForm {...props}
                            editIdea={this.editIdea}
                            idea={this.state.idea}

                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                {/* <Route exact path="/idea" render={(props) => {
                    if (this.isAuthenticated()) {
                        return (
                            <IdeaList
                                deleteIdea={this.deleteIdea}
                                idea={this.state.idea}
                            
                            />
                            
                        );

                    }

                }} /> */}
                {/* <Route path="/idea/:ideaId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                        return <Forward {...props}
                        editIdea={this.editIdea} 
                        idea={this.state.idea}
                            />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} /> */}

            </React.Fragment>
        )
    }

}
