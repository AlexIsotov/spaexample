import  React, { Component } from 'react';
import {Route , HashRouter, Switch} from 'react-router-dom';
import {Home} from '../components/Home';
import {Info} from '../components/Info';
import {Contact} from '../components/Contact';

export class MainRoutes extends Component {
  render() {
    return (
	<HashRouter>
      <Switch>
        <Route exact path = '/' component ={Home} />
		<Route path = '/info' component = {Info} />
		<Route path = '/contact' component = {Contact} />
      </Switch>
	 </HashRouter>
    );
  }
}

export default MainRoutes;
