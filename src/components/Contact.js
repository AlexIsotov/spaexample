import React, { Component } from 'react';
import {Animated} from 'react-animated-css';


export class Contact extends Component {
  render() {
    return (
      <div>
	  <Animated animationIn="hinge" animationInDelay="1000"  isVisible={true}>
       <h2>Contacts</h2>
	   <p> If you want to talk please send your e-mails  </p>
	   </Animated>
	  <Animated animationIn="zoomIn" animationInDelay="2000" isVisible={true}>
	   <p className="alert alert-dark text-center"> Ha-ha! I dont care! Send yourself!</p>
	  </Animated>
      <Animated animationIn="zoomIn" animationInDelay="3000" isVisible={true}>
		<img src="http://www.unixstickers.com/image/cache/data/stickers/meme/troll/Troll-face.sh-340x340.png" alt="trololo" className="img-fluid d-block mx-auto" />
	  </Animated>
	  </div>
    );
  }
}

export default Contact;
