import React, { Component } from "react"
import IdeaManager from "../modules/IdeaManager"
import { Input, Button } from "reactstrap"


export default class IdeaEditForm extends Component {
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

  updateExistingIdea = evt => {
    evt.preventDefault()

    const existingIdea = {
      idea: this.state.idea,
      userId: this.state.userId,
      categoryId: this.state.categoryId
    }
    console.log("match.params.id:", this.props.match.params.ideaId)
    console.log("existingIdea:", existingIdea);
    
    this.props.editIdea(this.props.match.params.ideaId, existingIdea)
    .then(() => this.props.history.push("/idea"))
  }
  componentDidMount() { 
    console.log(this.state.idea.id)   
    IdeaManager.get(this.props.match.params.ideaId)
    .then(idea => {
      this.setState({
        idea: idea.idea,
        userId: idea.userId,
        categoryId: idea.categoryId
      })      
    })
  }
  render() {
    return (
      <React.Fragment>
        <form className="ideaForm">
          <div className="test">
            <label htmlFor="IdeaName">What do you have in your mind?</label>
            <Input type="textarea" required
              className="form-control"
              onChange={this.handleFieldChange}
              id= "idea"
              value = {this.state.idea}
              placeholder="anything " />
          </div>

          <Button type="submit" onClick={this.updateExistingIdea} className="btn btn-primary">Update</Button>
        </form>





      </React.Fragment>
    )
  }
}