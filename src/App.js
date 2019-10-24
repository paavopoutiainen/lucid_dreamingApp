import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AnalyzePage from "./components/content/AnalyzePage.js"
import JournalPage from "./components/content/JournalPage.js"
import IdeasPage from "./components/content/IdeasPage.js"
import Navbar from "./components/layout/Navbar"
import DreamList from "./components/dreams/Dreamlist.js"



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
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/journal" component={JournalPage}></Route>
            <Route path = "/exercise_ideas" component={IdeasPage}></Route>
            <Route path = "/analyze_dreams" component={AnalyzePage}></Route>
            <Route path = "/dreamlist" component={DreamList}></Route>
            <Route path = "/ideas" component={IdeasPage}></Route>
          </Switch>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
