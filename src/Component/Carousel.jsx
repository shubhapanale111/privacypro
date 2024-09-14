import React, { Component } from "react";
import Slider from "react-slick";
import jj1 from '../Images/Logo23-05-16.jpg';
import jj2 from '../Images/webonisepng.png';
import jj3 from '../Images/Izmoltd.jpeg';
import jj4 from '../Images/instasafe.png';
import jj5 from '../Images/Gurucul.jpg';
import jj6 from '../Images/evren.png';
import jj7 from '../Images/crowdstrike-removebg-preview.png';
import jj8 from '../Images/cobotpng.png';
import '../Component/Carousel.css';

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      variableWidth: true, // Set variableWidth to true
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
      <div>
        <h2 > <center style={{fontSize:'35px',padding:'10px'}}>Trusted By</center></h2>
        <Slider {...settings}>
          <div className="carousel-image">
            <img src={jj1} style={{ height: '100px', width: '150px',borderRadius:'10px' }} />
          </div>
          <div className="carousel-image">
            <img src={jj2} style={{ height: '100px', width: '150px',borderRadius:'10px'  }} />
          </div>
          <div className="carousel-image">
            <img src={jj3} style={{ height: '100px', width: '150px',borderRadius:'10px'  }} />
          </div>
          <div className="carousel-image">
            <img src={jj4} style={{ height: '80px', width: '150px',borderRadius:'10px' }} />
          </div>
          <div className="carousel-image">
            <img src={jj5} style={{ height: '100px', width: '150px' ,borderRadius:'10px'}} />
          </div>
          <div className="carousel-image">
            <img src={jj6} style={{ height: '100px', width: '150px',borderRadius:'10px' }} />
          </div>
          <div className="carousel-image">
            <img src={jj7} style={{ height: '100px', width: '150px',borderRadius:'10px',background:'transperent' }} />
          </div>
          <div className="carousel-image">
            <img src={jj8} style={{ height: '80px', width: '150px',borderRadius:'10px' }} />
          </div>
          <div className="carousel-image">
            <img src={jj5} style={{ height: '100px', width: '150px' ,borderRadius:'10px'}} />
          </div>
        </Slider>
      </div>
    );
  }
}