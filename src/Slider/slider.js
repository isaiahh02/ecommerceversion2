import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './slider.css'

import slide1 from './slide1.jpeg'; // Tell webpack this JS file uses this image
import slide2 from './slide2.jpeg';

class Slider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img id="slide1" src= {slide1}/>
                </div>
                <div>
                <img id="slide2" src= {slide2}/>
                </div>
            </Carousel>
        );
    }
};

export default Slider;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
