import React, { Component } from "react"
import { Button, Input } from "reactstrap"
import "./Idea.css"

export default class IdeaForm extends Component {
    // Set initial state
    state = {
        idea: "",
        userId: "",
        categoryId: 1,
       
        
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating idea object, and
        invoking the function reference passed from parent component
     */
    constructNewIdea = evt => {
        let sessionUser = sessionStorage.getItem("userId");
        evt.preventDefault()

            const idea = {
                idea: this.state.idea,
                categoryId: this.state.categoryId,
                userId: Number(sessionUser)
            }

            this.props.addIdea(idea).then(() => this.props.history.push("/idea"))

    }

    render() {
        return (
            <React.Fragment className= "forms">
                <form className="ideaForm">
                    <div className="test">
                        <label htmlFor="IdeaName">What do you have in your mind?</label>
                        <Input type="textarea" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="idea"
                               placeholder="anything " />
                    </div>
                   
                    <Button type="submit" onClick={this.constructNewIdea} className="btn btn-primary">Add Idea</Button>
                </form>
                    

                

            </React.Fragment>
        )
    }
}