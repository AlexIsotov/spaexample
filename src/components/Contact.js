import React, { Component } from 'react';
import {Animated} from 'react-animated-css';


export class Contact extends Component {
  render() {
    return (
      <div>
	  <Animated animationIn="hinge"  isVisible={true}>
       <h2>Contacts</h2>
	   <p> If you want to talk please send your e-mails  </p>
	   </Animated>
	   <p> Ha-ha! I dont care! Send yourself!</p>
      <Animated animationIn="zoomIn" isVisible={true}>
	  <img src="http://www.unixstickers.com/image/cache/data/stickers/meme/troll/Troll-face.sh-340x340.png" alt="trololo" className="img-fluid" />
	  </Animated>
	  </div>
    );
  }
}

export default Contact;
