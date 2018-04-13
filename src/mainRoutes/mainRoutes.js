import  React, { Component } from 'react';
import {Route , HashRouter, Switch} from 'react-router-dom';
import {Home} from '../components/Home';
import {Info} from '../components/Info';
import {Contact} from '../components/Contact';
import {Game} from '../components/Game';

export class MainRoutes extends Component {
  render() {
    return (
	<HashRouter>
      <Switch>
        <Route exact path = '/' component ={Home} />
		<Route path = '/info' component = {Info} />
		<Route path = '/contact' component = {Contact} />
		<Route path = '/game' component = {Game} />
      </Switch>
	 </HashRouter>
    );
  }
}

export default MainRoutes;
