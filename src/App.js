import React, { Component } from 'react';
import {NavBar} from './components/navBar';
import {MainRoutes} from './mainRoutes/mainRoutes';
import {Footer} from './components/Footer';
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
       <h1 className="jumbotron bg-info text-center m-0">Amazing header</h1>
	   <NavBar />
	   <div className = "container">
			<MainRoutes />
	   </div>
	   <Footer />
      </div>
    );
  }
}

export default App;
