import React, { Component } from 'react'
import IdeaList from './IdeaList';
import IdeaForm from './IdeaForm';
import BestForm from './bestForm';
import BetterForm from './BetterForm';

export class Idea extends Component {
  render() {
    return (
      <div>
        <IdeaForm addIdea={this.props.addIdea}
                history={this.props.history} />

        <IdeaList okIdea = {this.props.okIdea}/>
        <BetterForm betterIdea = {this.props.betterIdea}/>
        <BestForm bestIdea = {this.props.bestIdea}/>
        
      </div>
    )
  }
}

export default Idea
