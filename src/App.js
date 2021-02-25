
import './App.css';
import React,{ Component } from 'react';
// import Feedback from './components/feedback/Feedback';
// import { useState } from 'react'
import Section from './components/feedback/Section';
// import Statistics from './components/feedback/Statistics';
// import FeedbackOptions from './components/feedback/FeedbackOptions';
// import  Notification  from './components/feedback/Notification';


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
    
  
  render() {
    return(
    <>
      <Section title="Jgf"/>
    </>)
  };
 
}

    


export default App;
