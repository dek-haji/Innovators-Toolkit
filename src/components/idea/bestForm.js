import React, { Component } from "react"
import { Card,  CardText, CardBody, } from "reactstrap"
import "./Idea.css"



export default class BestForm extends Component {
   
    
    render(){
    return( 
      
        
        <Card body outline color="secondary"className="ideas3" >
        <h2>Best idea</h2>
        {
            this.props.bestIdea.map(idea => 
                <Card key={idea.id} className="card">
               <CardBody className="card-body">
              
                 <CardText >{idea.idea} </CardText>
                 
                
                  <button
                  onClick={() => this.props.deleteBestIdea(idea.id)}>Delete</button>
                  
                  
                  
                  </CardBody>
                 
                  </Card>
            )
        }
        </Card>
   
    )
}}