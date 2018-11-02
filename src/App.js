
import React, { Component } from 'react';
//import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import logo from './logo.svg';
import './App.css';
import Facebook from './components/facebook';
import Facebook_share from './components/facebook_share';
import Twitter_share from './components/twitter_share';



class App extends Component {
  
  render(
    
  ) {
      
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to Smash Feed a place where you can smash</h1>
       </header>
       <p className="App-intro">
         To get started, log in with facebook
       </p>
       <Facebook/>
       <Facebook_share/>
       <Twitter_share/>
     </div>
   );
  }
}

export default App;
