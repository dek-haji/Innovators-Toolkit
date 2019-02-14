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
    clearField = ()=> {
        
        this.setState({idea: ""})

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
            value: this.state.value,
            userId: Number(sessionUser)
        }

        this.props.addIdea(idea)
        .then(() => this.props.history.push("/idea"))
        .then (()=> this.clearField())

    }
    

    render() {
        return (
            <React.Fragment key="forms" >

                <form class="ideaForm1" >
                   
                        <label htmlFor="IdeaName">What do you have in your mind?</label>
                        <Input type="textarea" required
                            key="form-control"
                            onChange={this.handleFieldChange}
                            value = {this.state.idea}
                            ref= "idea"
                            id="idea"
                            placeholder="anything"
                        />
                    

                    <Button type="submit"  onClick={this.constructNewIdea} color="success">Add Idea</Button>
                </form>




            </React.Fragment>
        )
    }
}