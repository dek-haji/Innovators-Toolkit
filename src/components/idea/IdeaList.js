import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, Button } from "reactstrap"
import { Box} from "grommet"

import "./Idea.css"




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
        console.log(this.props.forwardComponent1)//??

        this.props.forwardComponent1(evt.target.id, existingComponent)
        // .then(() => this.props.history.push("/idea"))
    }

    // componentDidUpdate(prevProps) {

    //     if (this.props.okIdea !== prevProps.okIdea) {
    //     console.log(this.props.sessionId)
    //         IdeaManager.getOkIdeas(this.props.sessionId)
    //             .then(newIdea =>
    //                 this.setState({
    //                     idea: newIdea
    //                 })
    //             )
    //     }
    

    render() {
        console.log(this.props.okIdea)
        return (

            
  

            <Box body outline color="secondary" className="okIdea" >
            
                <h2>Free writting</h2>
                {
                    this.props.okIdea.map(idea =>
                        <Card   style={{ backgroundColor: 'white', borderColor: '#333',}}
                        key={idea.id} className="card">
                       

                            <CardBody className="card-body">

                                <CardText>{idea.idea} </CardText>


                                <Link className="nav-link" to={`/idea/${idea.id}/edit`}>Edit</Link>
                                <Button outline color="danger"
                                   
                                    onClick={() => this.props.deleteOkIdea(idea.id)}
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
// when the button is clicked it needs to change the category ID to 2.
// we need to update the state of only category ID of 2.
// we need to use PUT or patch for changing the ID.