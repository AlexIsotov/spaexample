import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

let anim = <Animated animationIn="bounceInLeft" animationOut="rubberBand" isVisible={true}>
       <h2>Wanna play?!</h2> 
	   </Animated>; 
export class Game extends Component {
  
  constructor (props){
	  super(props);
	  this.state = {
		onGame:false, 
	  buttonName: 'Play',
	  flow: null
	  }
  }
  
  clickToPlay = () =>{
	   let a = Math.floor(Math.random() * 1000);
	   
	  this.state.onGame === false ? this.setState ({onGame:true, buttonName:'Stop!', flow: a}) :this.setState({onGame:false, buttonName:'Play',flow:0});
		
	 
  }
  render() {
    return (
      
	  <div>
	{anim}
  <button className="btn btn-primary" onClick = {this.clickToPlay} style = {{position:'relative', left: this.state.flow + 'px'}}> {this.state.buttonName} </button>
	 
      </div>
	
    );
  }
}

export default Game;
