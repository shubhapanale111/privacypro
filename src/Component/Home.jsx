import React from 'react';
import '../Component/Home.css';
import Carousel from './Carousel';
import ContactForm from './ContactForm';
import Services from './Services';
import anim2 from '../Images/bgvideonew.mp4';
import Moreinfo from './Moreinfo';

export default function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted playsInline className="background-video" style={{height:'75vh'}}>
        <source src={anim2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" style={{ height: '75vh' }}>
        <h1 className="tagline">Privacy Protected, Proven by Privacy Pro</h1>
      </div>
      {/* <img src={HomeImage} alt='Home Image' className='homeimage' */}
      <br /><br />
      <div className="carousle">
       
        <Carousel />
      </div>
      <br />
      <div className="contactform">
     <ContactForm/>
      </div>
      <div className='servicestext'><h1  style={{color:'black'}}> Our Services</h1></div>
      <div className="services" >
     
        <Services/>
      </div>

<div className="content">Our Partners</div>
      <div className="ourpartners">
        
              <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>


        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>

        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>

        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>

        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>

        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
        <div class="cardpartner">
          <a class="card1partner" href="#">
            <p>This is heading</p>
            <p class="small">Card description with lots of great facts and interesting details.</p>
            <div class="go-corner" href="#">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="moreinfo">
<Moreinfo/>
      </div>
    </div>
  );
}
