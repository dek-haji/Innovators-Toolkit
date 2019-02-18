import React, { Component } from "react"
import IdeaManager from "../modules/IdeaManager"
import { Card, CardColumns, CardText, CardBody, Button, Input } from "reactstrap"
import "./Idea.css"


export default class BetterForm extends Component {
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
            categoryId: 3
        }
        console.log("this.state.idea.id:", evt.target.id)
        console.log("existingIdea:", existingComponent);

        this.props.forwardComponent2(evt.target.id, existingComponent)
        // .then(() => this.props.history.push("/idea"))
    }

    // componentDidMount() {
    //     console.log(this.state.idea.id)
    //     IdeaManager.get(this.state.idea.id)
        
    //         .then(idea => {
    //             this.setState({
    //                 idea: idea.idea,
    //                 userId: idea.userId,
    //                 categoryId: idea.categoryId
    //             })
    //         })
    // }
    // componentDidUpdate(prevProps) {

    //     if (this.props.categoryId !== prevProps.categoryId) {
    //         this.fetchData(this.props.categoryId);
    //     }




    


    render() {
        return (

            <CardColumns className="betterIdeas" >

                <Card body outline color="secondary" className="ideas2" >
                    <h2>Better idea</h2>
                    {
                        this.props.betterIdea.map(idea =>
                            <Card key={idea.id} className="card" >
                              

                                    <CardText >{idea.idea} </CardText>

                                    
                                        <button
                                            onClick={() => this.props.deleteBetterIdea(idea.id)}
                                            className="card-link">Delete</button>
                                        <button id={idea.id}
                                            onClick={this.updateExistingComponent}
                                            className="card-link">Forward</button>
                                    
                                
                               

                            </Card>
                        )
                    }
                </Card>
            </CardColumns>
        )
    }
}