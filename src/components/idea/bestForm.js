import React, { Component } from "react"
import { Card,  CardText, CardBody,Button } from "reactstrap"
import { Box } from "grommet"
import "./Idea.css"



export default class BestForm extends Component {
   
    
    render(){
        console.log(this.props.bestIdea)
    return( 
      
        // I have received an array containing multiple objects – each one representing bestIdea. 
        // so we  gave each object a key, and the value of the key is ID. 
        
        <Box body outline color="secondary"className="ideas3" >
        <h2>Best idea</h2>
        {
            this.props.bestIdea.map(idea => 
                <Card   style={{ backgroundColor: 'white', borderColor: '#333', }}
                key={idea.id} className="card">
               <CardBody className="card-body">
              
                 <CardText >{idea.idea} </CardText>
                 
                
                  <Button outline color="danger"
                  onClick={() => this.props.deleteBestIdea(idea.id)}>Delete</Button>
                  
                  
                  
                  </CardBody>
                 
                  </Card>
            )
        }
        </Box>
   
    )
}}