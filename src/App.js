import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AnalyzePage from "./components/AnalyzePage.js"
import JournalPage from "./components/JournalPage.js"
import IdeasPage from "./components/IdeasPage.js"

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
