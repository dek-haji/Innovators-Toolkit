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
    isAuthenticated = () => sessionStorage.getItem("username") !== null
    //if the username is not empty 
    state = {
        okIdea: [],
        betterIdea: [],
        bestIdea: [],
        users: [],
        idea: [],
        sessionId: sessionStorage.getItem("userId")

    };
    componentDidMount() {
        let sessionId = sessionStorage.getItem("userId")
        IdeaManager.getOkIdeas(sessionId)
            .then(okIdeas => {
                this.setState({
                    okIdea: okIdeas
                })
            })

        IdeaManager.getBetterIdeas(sessionId)
            .then(better => {
                this.setState({
                    betterIdea: better
                })
            })

        IdeaManager.getBestIdeas(sessionId)
            .then(best => {
                this.setState({
                    bestIdea: best
                })
            })
          
            this.updateComponent() // i callled this function to load the users before i pass it to the login
            // this.addUser()
            // commented out to keep new user from being added on
            
            const newState = {}
    //updating the new state.
    
    console.log(sessionId)
            fetch(`http://localhost:5002/idea?userId=${sessionId}`)
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    newState.idea = r
                    console.log(newState)
                    this.setState(newState)
    
                })
        }
        addUser = (user) => SignUpManager.post(user)
        .then(() => UsersManager.getAll())
        .then(Allusers => this.setState({
            users: Allusers             //added this three line of codes today to set the new user.
        }))

    addIdea = (idea) => IdeaManager.post(idea)
        .then(() => IdeaManager.getOkIdeas(this.state.sessionId))
        .then(AllIdea => this.setState({

            okIdea: AllIdea

        })
        );
   
//??
    deleteOkIdea = id => {
        let sessionId = sessionStorage.getItem("userId")
        console.log(sessionId)
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"
        })
        
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/idea?categoryId=1&userId=${sessionId}`))
            .then(e => e.json())
            .then(idea => this.setState({
                okIdea: idea,

            }))
    }
    deleteBetterIdea = id => {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/idea?categoryId=2&userId=${sessionId}`))
            .then(e => e.json())
            .then(idea => this.setState({
                betterIdea: idea,

            }))
    }
    deleteBestIdea = id => {
        let sessionId = sessionStorage.getItem("userId")
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/idea?categoryId=3&userId=${sessionId}`))
            .then(e => e.json())
            .then(idea => this.setState({
                bestIdea: idea,

            }))
    }



    editIdea = (id, idea) => {
        return IdeaManager.updateIdea(id, idea)
            .then(() => IdeaManager.getOkIdeas(this.state.sessionId))
            .then(idea => this.setState({
                okIdea: idea



            }))
    }

    forwardComponent1 = (id, idea) => {
        console.log("state",this.state.sessionId)
        return IdeaManager.changeComponent(id, idea)
            .then(() => IdeaManager.getBetterIdeas(this.state.sessionId))
            .then(idea => this.setState({
                betterIdea: idea




            }))
            .then(() => IdeaManager.getOkIdeas(this.state.sessionId))
            .then(idea => this.setState({
                okIdea: idea
            }))

    }
    forwardComponent2 = (id, idea) => {
        return IdeaManager.changeComponent(id, idea)
            .then(() => IdeaManager.getBestIdeas(this.state.sessionId))
            .then(idea => this.setState({
                bestIdea: idea



            }))
            .then(() => IdeaManager.getBetterIdeas(this.state.sessionId))
            .then(idea => this.setState({   //When the data is fetched successfully, it will be stored in the local state with React’s this.setState()
                betterIdea: idea
            }))
    }

    //?????
    updateComponent = () => {
        const sessionId = sessionStorage.getItem("userId");//gets the current userID from the session storage.
        // const currentUserId = Number(sessionId); //
        // this.setState({users: currentUserId})

        UsersManager.getAll(sessionId).then(allUsers => {    //we make fetch call to get all the users which have the same sessionID/userID
           console.log(sessionId) //current user 
            this.setState({ users: allUsers });
            console.log(allUsers)   //all the users from our database.
           
        })
        // let sessionId = sessionStorage.getItem("userId")
        IdeaManager.getOkIdeas(sessionId)
            .then(okIdeas => {
                console.log(okIdeas)    //whenever i add ok ideas it shows on the DOM  and also updated the database.
                this.setState({
                    okIdea: okIdeas
                })
            })

        IdeaManager.getBetterIdeas(sessionId)
            .then(better => {
                this.setState({
                    betterIdea: better
                })
            })

        IdeaManager.getBestIdeas(sessionId)
            .then(best => {
                this.setState({
                    bestIdea: best
                })
            })
    }
    currentUser = JSON.parse(sessionStorage.getItem("userId"))
    render() {
        console.log("currentUser",this.currentUser)
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
                        if (this.isAuthenticated()) {   // added that line so u we cant change the route manually.   
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
                            sessionId= {this.state.sessionId}
                        />
                    } else{
                        return <Redirect to= "/login" />;
                    }
                }}
                />

                <Route path="/idea/:ideaId(\d+)/edit" render={props => {
                        return <IdeaEditForm {...props}
                            editIdea={this.editIdea}
                            idea={this.state.idea}

                        />
                    
                    
                }} />
                
            </React.Fragment>
        )
    }

}
