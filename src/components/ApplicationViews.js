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

    constructor() {
        super();
        this.state = {
            idea: [],
            okIdea: [],
            betterIdea: [],
            bestIdea: [],
            users: [],
            sessionId: null
        };

        this.populateAppState = this.populateAppState.bind(this)
    }

    isAuthenticated = () => sessionStorage.getItem("username") !== null

    // Basically the populateAppState function builds the initial state when App Views mounts and then I called it whenever there was a change (edit, add, delete) because react rerenders anytime there’s a change to state.
        populateAppState () {  

        let sessionId = Number(sessionStorage.getItem("userId"))
        console.log("SessionId", sessionId)

        this.setState({sessionId: sessionId})

        IdeaManager.getOkIdeas(sessionId)
            .then(okIdeas => {
                console.log("OK",okIdeas)
                this.setState({okIdea: okIdeas})
        })

        IdeaManager.getBetterIdeas(sessionId)
            .then(better => {
                console.log("Better",better)
                this.setState({betterIdea: better})
        })

        IdeaManager.getBestIdeas(sessionId)
            .then(best => {
                console.log("best", best)
                this.setState({bestIdea: best})
        })

        UsersManager.getAll().then(allUsers => {
            this.setState({ users: allUsers });
        })

        IdeaManager.getAll(sessionId).then(allIdea => {
            this.setState({idea: allIdea})
        })
    }

    componentDidMount() {

        this.populateAppState();
    }

    addUser = (user) => SignUpManager.post(user)
        .then(() => UsersManager.getAll())
        .then(Allusers => this.setState({users: Allusers}))

    addIdea = (idea) => IdeaManager.post(idea)
        .then(() => IdeaManager.getOkIdeas(this.state.sessionId))
        .then(AllIdea => this.setState({okIdea: AllIdea}));


    deleteOkIdea = id => {
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"})
        .then(e => e.json())
        .then(() => this.populateAppState())
    }

    deleteBetterIdea = id => {
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"})
        .then(e => e.json())
        .then(() => this.populateAppState())
    }
    deleteBestIdea = id => {
        return fetch(`http://localhost:5002/idea/${id}`, {
            method: "DELETE"})
        .then(e => e.json())
        .then(() => this.populateAppState())
    }

    editIdea = (id, idea) => {
        return IdeaManager.updateIdea(id, idea)
        .then(() => IdeaManager.getOkIdeas(this.state.sessionId))
        .then(idea => this.setState({okIdea: idea }))
    }

    forwardComponent1 = (id, idea) => {

        return IdeaManager.changeComponent(id, idea)
        .then(() => IdeaManager.getBetterIdeas(this.state.sessionId))
        .then(idea => this.setState({betterIdea: idea}))
        .then(() => IdeaManager.getOkIdeas(this.state.sessionId))
        .then(idea => this.setState({okIdea: idea}))

    }

    forwardComponent2 = (id, idea) => {

        return IdeaManager.changeComponent(id, idea)
        .then(() => IdeaManager.getBestIdeas(this.state.sessionId))
        .then(idea => this.setState({bestIdea: idea}))
        .then(() => IdeaManager.getBetterIdeas(this.state.sessionId))
        .then(idea => this.setState({betterIdea: idea}))
    }

    render() {
        return (
            <React.Fragment>

                <Route path="/login" render={(props) => {
                    return <Login {...props}
                        users={this.state.users}
                        populateAppState={this.populateAppState} />
                }} />
                <Route path="/register" render={(props) => {
                    return <Registeration {...props}
                        addUser={this.addUser}
                        populateAppState={this.populateAppState}/>
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
                            populateAppState={this.populateAppState}
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