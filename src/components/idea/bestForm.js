import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardColumns, CardText, CardBody, Button, Input } from "reactstrap"
import "./Best.css"



export default class BestForm extends Component {
   
    
    render(){
    return( 
      
        <CardColumns className= "BestIdea">
         
        <Card body outline color="secondary"className="ideas" >
        <h1>Best Idea</h1>
        {
            this.props.bestIdea.map(idea => 
                <Card key={idea.id} className="card">
                <CardBody body outline color="primary"className="card-body">
              
                 <CardText >{idea.idea} </CardText>
                 
                <Button color="secondary">
                  <button
                  onClick={() => this.props.deleteBestIdea(idea.id)} 
                  className="card-link">Delete</button>
                  
                  </Button>
                  </CardBody>
                  
                 
                  </Card>
            )
        }
        </Card>
        </CardColumns>
    )
}}