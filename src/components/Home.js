import React, { Component } from 'react';
import {Animated} from 'react-animated-css';



export class Home extends Component {
  
  render() {
    return (
      <div>
	  <Animated animationIn="bounceInRight" isVisible={true}>
       <h2>Hello!</h2>
	   </Animated>
	<Animated animationIn="slideInUp" isVisible={true}>
	<p> 
		I have started to make this site but I do not know what to fill it with. So I sketched a set of words here. 
	  It is just nonsense. If you want, I will post a picture.
	</p>
	</Animated>
  <br/>
  <Animated animationIn="slideInUp" isVisible={true}>
	<p>
		I need a lot of words to check how the content will react and to look at everything in general.
		My vocabulary is not so great and it looks like a psycho talks with himself.
	</p>
	</Animated>
   <br/>
   <Animated animationIn="slideInUp" isVisible={true}>
	<p>
		That's all. I will add something later
	</p>
	</Animated>
      </div>
    );
  }
}

export default Home;
