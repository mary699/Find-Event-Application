import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//BrowserRouter: this is the parent component that stores all routes componenets
//Route: holds all of our routes
//Switch: allows us have a default page i.e like a not found page
import Eventss from './components/Eventss';
import AddEvents from './components/AddEvents';
import EditEvents from './components/EditEvents';
import Header from './components/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import { Provider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return(
      <Provider>
        <Router>
       <div className="App">
       
        <Header  branding="Find MyEvent"/>
        <div className="container">
       <Switch>
         
         <Route exact path="/" component= 
         {Eventss} />
          <Route exact path="/events/add" component= 
         {AddEvents} />
           <Route exact path="/events/edit/:id" component= 
         {EditEvents} />
         
          <Route exact path="/about" component= 
         {About} />

        <Route exact path="/test" component= 
         {Test} />

         <Route component={NotFound} />
        
       </Switch>
       
         </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;


































