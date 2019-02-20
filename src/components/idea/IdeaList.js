import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardText, CardBody } from "reactstrap"

import "./Idea.css"
import IdeaManager from "../modules/IdeaManager"



export default class IdeaList extends Component {

    state = {
        idea: "",
        userId: "",
        categoryId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    updateExistingComponent = (evt) => {
        evt.preventDefault()

        const existingComponent = {
            categoryId: 2
        }
        console.log("this.state.idea.id:", evt.target.id)
        console.log("existingIdea:", existingComponent);

        this.props.forwardComponent1(evt.target.id, existingComponent)
        // .then(() => this.props.history.push("/idea"))
    }

    componentDidUpdate(prevProps) {

        if (this.props.okIdea !== prevProps.okIdea) {
        console.log(this.props.sessionId)
            IdeaManager.getOkIdeas(this.props.sessionId)
                .then(newIdea =>
                    this.setState({
                        idea: newIdea
                    })
                )
        }
    }

    render() {
        console.log(this.props.okIdea)
        return (


            <Card body outline color="secondary" className="ideas12" >
                <h2>Free writting</h2>
                {
                    this.props.okIdea.map(idea =>
                        <Card key={idea.id} className="card">

                            <CardBody className="card-body">

                                <CardText>{idea.idea} </CardText>


                                <Link className="nav-link" to={`/idea/${idea.id}/edit`}>Edit</Link>
                                <button 
                                   
                                    onClick={() => this.props.deleteOkIdea(idea.id)}
                                    className="card-link">Delete</button>


                            <button id={idea.id}
                                onClick={this.updateExistingComponent}
                                className="card-link">Forward</button>

                                </CardBody>

                        </Card>
                    )
                }
            </Card>

        )
    }
}
// when the button is clicked it needs to change the category ID to 2.
// we need to update the state of only category ID of 2.
// we need to use PUT or patch for changing the ID.