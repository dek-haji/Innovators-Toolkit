import React, { Component } from "react"
import { Link } from "react-router-dom";



export default class IdeaList extends Component {
    render(){
    return(
        <card className="ideas">
        
        {
            this.props.idea.map(idea => 
                <div key={idea.id} className="card">
                <div className="card-body">
            
                 <div>{idea.idea} </div>
                 
                <button >
                  <a href= "#"
                  onClick={() => this.props.deleteIdea(idea.id)} 
                  className="card-link">Delete</a>
                  </button>
                </div>
                </div>
            )
        }
        </card>
    )
}}