import React, { Component } from "react"

export default class IdeaForm extends Component {
    // Set initial state
    state = {
        idea: "",
       
        
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
        evt.preventDefault()
            const idea = {
                idea: this.state.idea,
                time: this.state.time,
                userId: this.state.userId
            }

            this.props.addIdea(idea).then(() => this.props.history.push("/idea"))

    }

    render() {
        return (
            <React.Fragment>
                <form className="ideaForm">
                    <div className="form-group">
                        <label htmlFor="taskName">What is your Task?</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="idea"
                               placeholder="anything " />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">When do you need to complete it?</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="time" placeholder="Date" />
                    </div>
                    <button type="submit" onClick={this.constructNewIdea} className="btn btn-primary">Add Idea</button>
                </form>
            </React.Fragment>
        )
    }
}