import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardColumns, CardText, CardBody, Button, Input } from "reactstrap"



export default class IdeaList extends Component {
   
    
    render(){
    return(
        <CardColumns>
            
        <Card body outline color="secondary"className="ideas" >
        
        {
            this.props.okIdea.map(idea => 
                <Card key={idea.id} className="card">
                <CardBody body outline color="primary"className="card-body">
            
                 <CardText >{idea.idea} </CardText>
                 
                <Button color="secondary">
                  <a href= "#"
                  onClick={() => this.props.deleteOkIdea(idea.id)} 
                  className="card-link">Delete</a>
                  
                  </Button>
                  </CardBody>
                  <Link className="nav-link" to={`/idea/${idea.id}/edit`}>Edit</Link>
                  <Button>Click here</Button>
                 
                  </Card>
            )
        }
        </Card>
        </CardColumns>
    )
}}