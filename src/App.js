import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProfileComponent from './profile/ProfileComponent';
import { Button } from 'react-bootstrap';



class App extends React.Component{
   fullName="Amal Wesleti"
   bio="I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matter."
   profession="Software Developer"
  state={
    show:false
  }
  
  
    render(){
     
      return (
        <div className="App" style={{display:"flex",flexFlow:"column wrap",justifyContent:"center",alignContent:"center",marginTop:"2rem"}}>
          
          <Button variant="secondary" onClick={()=>this.setState({show:!this.state.show})} >{this.state.show ?"hide":"show"}</Button>
       {
         this.state.show &&   <ProfileComponent fullName={this.fullName} bio={this.bio} profession={this.profession} HandleName={this.HandleName} />
         
       }
        </div>
    
      );
    }
  }
  
  export default App