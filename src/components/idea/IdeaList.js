import React, { Component } from "react"
import { Link } from "react-router-dom";

export default class IdeaList extends Component {
    render(){
    return(
        <section className="ideas">
        {
            this.props.idea.map(idea => 
                <div key={idea.id} className="card">
                <div className="card-body">
            
                 <h3>{idea.idea} </h3><br></br>
                  {idea.time}<br></br>
                  <a href="#"
                  onClick={() => this.props.deleteIdea(idea.id)} 
                  className="card-link">Delete</a>
                  
                </div>
                </div>
            )
        }
        </section>
    )
}}