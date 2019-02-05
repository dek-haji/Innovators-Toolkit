import { Route } from "react-router-dom";
import React, { Component } from "react";
import IdeaManager from "../components/modules/IdeaManager"
import IdeaList from "../components/idea/IdeaList"
import IdeaForm from "./idea/IdeaForm"


export default class ApplicationViews extends Component {
    state = {
        idea: []
    };
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
    }
    addIdea = (idea) => IdeaManager.post(idea)
        .then(() => IdeaManager.getAll())
        .then(AllIdea => this.setState({

            idea: AllIdea

        })
        );


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
    const 
    render() {
        return (
            <React.Fragment>
                <Route
                    exact
                    path="/idea" render={props => {
                        return <IdeaForm {...props} addIdea={this.addIdea} />
                    }}
                />
               <Route exact path="/idea" render={(props) => {
    return <IdeaList deleteIdea={this.deleteIdea} idea={this.state.idea} />
}} />
            </React.Fragment>
        )
    }
}