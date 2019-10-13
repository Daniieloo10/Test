import React, { Component } from 'react';
import Clock from 'react-live-clock';

class Dashboard extends Component {
  render() {
   
    return <div> 
      <br></br>
      <br></br>
      <br></br>
      <center>
      
      
      <h3>
      Welcome to Your Admin Page ...!
      </h3>
      <br></br>  <br></br>
      <h3>
      <Clock format={'HH:mm:ss'} ticking={true}  />
      </h3> 
      </center>
      </div>
  }
}

export default Dashboard;
