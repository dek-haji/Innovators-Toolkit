import React, { Component } from "react"
import { Card,  CardText, CardBody, } from "reactstrap"
import "./Idea.css"



export default class BestForm extends Component {
   
    
    render(){
        console.log(this.props.bestIdea)
    return( 
      
        // I have received an array containing multiple objects – each one representing bestIdea. 
        // so we  gave each object a key, and the value of the key is ID. 
        
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