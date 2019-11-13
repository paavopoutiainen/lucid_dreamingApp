import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AnalyzePage from "./components/content/AnalyzePage.js"
import JournalPage from "./components/content/JournalPage.js"
import IdeasPage from "./components/content/IdeasPage.js"
import Navbar from "./components/layout/Navbar"
import DreamList from "./components/dreams/Dreamlist.js"
import DreamDetails from "./components/dreams/DreamDetails.js"
import axios from "axios"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"




function Home() {
  return (
    <div>
      <h1>Home</h1>
    <p>This is the Home page of this app</p>
    </div>
    
  )
    
}

function App() {

  const [dreams, setDreams] = useState([])

  function fetchDreams(){
    axios.get("http://localhost:3001/dreams")
    .then(res => res.data)
    .then(res => setDreams(res))
  }

  useEffect(() => {
    fetchDreams()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/journal" component={JournalPage}></Route>
            <Route path = "/exercise_ideas" component={IdeasPage}></Route>
            <Route path = "/analyze_dreams" render={() => <AnalyzePage dreams = {dreams}/>}></Route>
            <Route path = "/dreamlist" render={()=> <DreamList  dreams = {dreams}/>}></Route>
            <Route path = "/ideas" component={IdeasPage}></Route>
            <Route path = "/dreams/:id" component={DreamDetails}></Route>
            <Route path = "/signin" component={SignIn}></Route>
            <Route path = "/signup" component={SignUp}></Route>
          </Switch>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
