import React, { Component } from 'react';
import {Animated} from 'react-animated-css';


export class Info extends Component {
  render() {
    return (
      <div>
		<Animated animationIn="fadeInDown"  isVisible={true}>
       <h2>Infopage</h2>
	   </Animated>
	   <Animated animationIn="zoomIn"  isVisible={true}>
	   <img src="https://imagecdn1.luxnet.ua/beztabu/uploads/696x391_DIR/media_news/2017/08/483bb38288ef7778aabcd353bef357d59f598c73.jpg" alt="billy" className="img-fluid rounded"/>
	   </Animated>
	   <Animated animationIn="fadeInUp"  isVisible={true}>
	   <p>I dont know ... I think that my app works like Bill"s Windows.  </p>
	   </Animated>
      </div>
    );
  }
}

export default Info;
