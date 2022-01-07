import React, {useState, useEffect} from 'react';
import './App.css';
import Area from './components/Area';
import Budget from './components/Budget';
import Personal from './components/Personal';
import Rooms from './components/Rooms';

const App = () => {

  const submitForm = (e) => {

  }
  return (
    <div className="App">
        <form onSubmit={submitForm}>
        <Personal/>
        <label>What Are you Looking for?</label> &nbsp;<br></br>
        <Rooms/><br></br>
        <label> What is your Budget ?</label><br></br>
      
        <Budget/><br></br>
         Please Chose The Areas You Are Intersted In:
        <Area/>
          
        <input /><br></br>
          <input type="submit"/>
       </form>
    </div>
  );
}

export default App;
