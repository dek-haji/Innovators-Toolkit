import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardColumns, CardText, CardBody, Button, Input } from "reactstrap"
import "./Better.css"



export default class BetterForm extends Component {
   
    
    render(){
    return( 
      
        <CardColumns className= "betterIdeas">
         
        <Card body outline color="secondary"className="ideas" >
        <h1>Better Idea</h1>
        {
            this.props.betterIdea.map(idea => 
                <Card key={idea.id} className="card">
                <CardBody body outline color="primary"className="card-body">
              
                 <CardText >{idea.idea} </CardText>
                 
                <Button color="secondary">
                  <a href= "#"
                  onClick={() => this.props.deleteBetterIdea(idea.id)} 
                  className="card-link">Delete</a>
                  
                  </Button>
                  </CardBody>
                  {/* <Link className="nav-link" to={`/idea/${idea.id}/edit`}>Edit</Link> */}
                 
                  </Card>
            )
        }
        </Card>
        </CardColumns>
    )
}}