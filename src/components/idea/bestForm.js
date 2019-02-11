import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardColumns, CardText, CardBody, Button, Input } from "reactstrap"
import "./Best.css"



export default class BestForm extends Component {
   
    
    render(){
    return( 
      
        <CardColumns className= "BestIdea">
          <h1>Best Idea</h1>
        <Card body outline color="secondary"className="ideas" >
        
        {
            this.props.bestIdea.map(idea => 
                <Card key={idea.id} className="card">
                <CardBody body outline color="primary"className="card-body">
              
                 <CardText >{idea.idea} </CardText>
                 
                <Button color="secondary">
                  <a href= "#"
                  onClick={() => this.props.deleteIdea(idea.id)} 
                  className="card-link">Delete</a>
                  
                  </Button>
                  </CardBody>
                  <Link className="nav-link" to={`/idea/${idea.id}/edit`}>Edit</Link>
                 
                  </Card>
            )
        }
        </Card>
        </CardColumns>
    )
}}