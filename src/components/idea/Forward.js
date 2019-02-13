import React, { Component } from "react"
import IdeaManager from "../modules/IdeaManager"
import { Input, Button } from "reactstrap"


export default class Forward extends Component {
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

  updateExistingComponent = evt => {
    evt.preventDefault()

    const existingComponent = {
      idea: this.state.idea,
      userId: 10,
      categoryId: 2
    }
    console.log("match.params.id:", this.props.match.params.ideaId)
    console.log("existingIdea:", existingComponent);
    
    this.props.forwardComponent(this.props.match.params.ideaId, existingComponent)
    .then(() => this.props.history.push("/idea"))
  }
  componentDidMount() {    
    IdeaManager.get(this.props.match.params.ideaId)
    .then(idea => {
      this.setState({
        idea: idea.idea,
        userId: idea.userId,
        categoryId: 2
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
              id="idea"
              placeholder="anything " />
          </div>

          <Button type="submit" onClick={this.props.forwardComponent} className="btn btn-primary">Forward</Button>
        </form>




      </React.Fragment>
    )
  }
}
// {this.updateExistingComponent}