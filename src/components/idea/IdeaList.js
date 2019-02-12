import React, { Component } from "react"
import { Link } from "react-router-dom";
import { Card, CardColumns, CardText, CardBody, Button, } from "reactstrap"
import "./Idea.css"



export default class IdeaList extends Component {
   
    handleClick() {
        console.log('Click happened');
    }
    render(){
    return(
        <CardColumns>
            
        <Card body outline color="secondary"className="ideas" >
        <h1>ok idea</h1>
        {
            this.props.okIdea.map(idea => 
                <Card key={idea.id} className="card">
                
                <CardBody body outline color="primary"className="card-body">
            
                 <CardText>{idea.idea} </CardText>
                 
                <Button color="secondary">
                  <a href= "#"
                  onClick={() => this.props.deleteOkIdea(idea.id)} 
                  className="card-link">Delete</a>
                  
                  </Button>
                  </CardBody>
                  <Link className="nav-link" to={`/idea/${idea.id}/edit`}>Edit</Link>
                  <button onClick={this.handleClick}>Click Me</button>
                 
                  </Card>
            )
        }
        </Card>
        </CardColumns>
    )
}}
// when the button is clicked it needs to change the category ID to 2.
// we need to update the state of only category ID of 2.
// we need to use PUT or patch for changing the ID.