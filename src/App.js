import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const linkStyles = {
  "padding" : 30 
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    <p>This is the Home page of this app</p>
    </div>
    
  )
    
}

function JournalPage() {
  return (
    <div>
      <h1>Journaling page</h1>
      <p>dreams that are written down will be saved to a database</p>
      <p>This page being open there will be possibility for writing multiple dreams<br/> 
        at the same time and saving or discarding them independently
      </p>
    </div>
  )
}

function IdeasPage() {
  return(
    <div>
      <h1>Ideas page</h1>
      <p>This is just an idea writing page which can be visited and written 
        an exercise idea that has come to one's mind or whatever of that sort
      </p>
    </div>
  )
}

function AnalyzePage(){
  function giveArray(num) {
    let newNum = num
    let results = [num]
    for(var i = 0; i < 100; i++){
      results.push(newNum + num)
      newNum += num;
    }
    return results
  }

  function findCommonMultiple(x, y ,z){
    let xArray = giveArray(x)
    let yArray = giveArray(y)
    let zArray = giveArray(z)
    let common = null
    
    for(var i = 0; i < xArray.length; i++){
      let numberToBeChecked = xArray[i]
      console.log('number', numberToBeChecked)
      console.log("here", yArray.some(x => x === numberToBeChecked))
      console.log("here", zArray.some(x => x === numberToBeChecked))
      if(yArray.some(x => x === numberToBeChecked) && zArray.some(x => x === numberToBeChecked)){
        common = numberToBeChecked
        console.log('commoon', common)
        return common
      } 
      
    }
    return common
  }

  return (
    <div>
      <h1>Analyze</h1>
      <p>Here we will have some kind of way for selecting a specific dream 
        to be analyzed. And then the user will be asked relevant questions
        about their dream. For example he will be asked to write down all their 
        dream characters he met in the dream. These markups will also 
        be saved into a database in order to store relative data
        about dreamer's dreams for further analysis and practice.
      </p>
     
      <p>{findCommonMultiple(5,6,7)}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <header>Lucid Dreaming Application</header>
      <BrowserRouter>
        <div>
          <Link style={linkStyles} to="/">Home</Link>
          <Link style={linkStyles} to="dream_journal">Dream Journal</Link>
          <Link style={linkStyles} to ="exercise_ideas">Exercise Ideas</Link>
          <Link style={linkStyles} to ="analyze_dreams">Analyze dreams</Link>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/dream_journal" component={JournalPage}></Route>
            <Route path = "/exercise_ideas" component={IdeasPage}></Route>
            <Route path = "/analyze_dreams" component={AnalyzePage}></Route>
          
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
