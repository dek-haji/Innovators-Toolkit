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
          history={this.props.history}
        />

        <IdeaList okIdea={this.props.okIdea}
          deleteOkIdea={this.props.deleteOkIdea} />
        <BetterForm betterIdea={this.props.betterIdea}
          deleteBetterIdea={this.props.deleteBetterIdea} />
        <BestForm bestIdea={this.props.bestIdea}
          deleteBestIdea={this.props.deleteBestIdea} />

      </div>
    )
  }
}

export default Idea
