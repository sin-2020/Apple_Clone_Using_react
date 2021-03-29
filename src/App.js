import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./component/NavigationBar/Navbar"
import Main  from "./component/Main/Main"
import Footer from "./component/Footer/Footer"
import Ipad from "./component/Pages/Ipad/Ipad"
import Tv from "./component/Pages/Tv/Tv"
import Music from "./component/Pages/Music/Music"
import IPhone from "./component/Pages/IPhone/IPhone"
import Error from "./component/Pages/Error/Error"
import Mac from './component/Pages/Mac/Mac';
import Watch from './component/Pages/Watch/Watch'
import Productpage from './component/Pages/Productpage/Productpage'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/iphone" exact component={IPhone}/>
               <Route path="/mac" exact component={Mac}/>
               <Route path="/iPad" exact component={Ipad}/>
               <Route path="/watch" exact component={Watch}/>
               <Route path="/Tv" exact component={Tv}/>
               <Route path="/Music" exact component={Music}/>
               <Route path="/iphone/:pid" exact component={Productpage}/>
               <Route path="/" component={Error}/>
            </Switch>          
          <Footer/>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
