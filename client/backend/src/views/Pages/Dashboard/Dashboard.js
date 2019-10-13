import React, { Component } from 'react';
import Clock from 'react-live-clock';

class Dashboard extends Component {
  render() {
   
    return <div> 
      <br></br>
      <br></br>
      <br></br>
      <center>
      
      
      <h5>
      Welcome to Your Admin Page ...!
      </h5>  
      <h5>
      It's <Clock format={'HH:mm:ss'} ticking={true}  />
      </h5> 
      <br></br>
      <h3 style={{'color' : 'blue'}}>
        
        I hope that this work  meets the requirements, <br></br>
        and I hope that you agree to be with your team 
        <br></br>
        for a new challenge.
      </h3>
      </center>
      </div>
  }
}

export default Dashboard;
