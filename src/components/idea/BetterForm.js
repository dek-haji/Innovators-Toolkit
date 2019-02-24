import React, { Component } from "react"
import { Card, CardBody, CardText, Button } from "reactstrap"
import { Box } from "grommet"
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



    
    
    render() {
        console.log(this.props.betterIdea)
        return (

            <Box body outline color="secondary" className="better" >

                
                    <h2>Better idea</h2>
                    {
                        this.props.betterIdea.map(idea =>
                            <Card  style={{ backgroundColor: 'white', borderColor: '#333', }}
                            key={idea.id} className="card" >
                              <CardBody className="card-body">

                                    <CardText >{idea.idea} </CardText>

                                    
                                        <Button outline color="danger"
                                            onClick={() => this.props.deleteBetterIdea(idea.id)}
                                            className="card-link">Delete</Button>
                                        <Button outline color="success" id={idea.id}
                                            onClick={this.updateExistingComponent}
                                            className="card-link">Forward</Button>
                                    
                                
                               </CardBody>

                            </Card>
                        )
                    }
                
            </Box>
        )
    }
}