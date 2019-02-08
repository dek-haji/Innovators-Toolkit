import React, { Component } from 'react'
import {Card, CardBody, CardTitle, CardText, Button, CardSubtitle} from "reactstrap"
import "./Best.css"

export class BestForm extends Component {
  // Set initial state
  state = {
    idea: "",
    userId: "",
   
    
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
            
            userId: Number(sessionUser)
        }

        this.props.addIdea(idea).then(() => this.props.history.push("/idea"))

}
  render() {
    return (
      <form className="BestIdea">

         <p>Best Idea</p>
         <textarea></textarea> <br></br>
         <Button>ADD</Button>
         
         
      </form>
    )
  }
}

export default BestForm
