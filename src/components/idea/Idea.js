import React, { Component } from 'react'
import IdeaList from './IdeaList';
import IdeaForm from './IdeaForm';
import BestForm from './bestForm';
import BetterForm from './BetterForm';
import "./Idea.css"
import NavBar from "../nav/NavBar"
export class Idea extends Component {

  render() {

    return (
      <React.Fragment>
      <NavBar />
      <div className =" dek">
        <IdeaForm addIdea={this.props.addIdea}
          history={this.props.history} />

        <IdeaList okIdea={this.props.okIdea}
          deleteOkIdea={this.props.deleteOkIdea}
          forwardComponent1={this.props.forwardComponent1} />
        <BetterForm betterIdea={this.props.betterIdea}
          deleteBetterIdea={this.props.deleteBetterIdea}
          forwardComponent2={this.props.forwardComponent2} />
        <BestForm bestIdea={this.props.bestIdea}
          deleteBestIdea={this.props.deleteBestIdea} />

      </div>
      </React.Fragment>
    )
  }
  
}

export default Idea
