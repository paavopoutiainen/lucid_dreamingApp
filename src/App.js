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
import moment from "moment"




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

  const fetchDreams = async () => {
    const dreams = await axios.get("http://localhost:3001/api/dreams")
    const dateFixedDreams = dreams.data.map(d => {
      const date = moment(d.date)
      return {...d, date: date.format('MMMM Do YYYY, h:mm:ss a')}
    })
    setDreams(dateFixedDreams)
  }

  useEffect(() => {
    fetchDreams()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route path ="/journal" render={() => <JournalPage/>}></Route>
            <Route path = "/exercise_ideas" render={() => <IdeasPage/>}></Route>
            <Route path = "/analyze_dreams" render={() => <AnalyzePage dreams = {dreams}/>}></Route>
            <Route path = "/dreamlist" render={()=> <DreamList  dreams = {dreams}/>}></Route>
            <Route path = "/ideas" render={() => <IdeasPage/>}></Route>
            <Route path = "/dreams/:id" render={() => <DreamDetails/>}></Route>
            <Route path = "/signin" render={() => <SignIn/>}></Route>
            <Route path = "/signup" render={() => <SignUp/>}></Route>
          </Switch>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
