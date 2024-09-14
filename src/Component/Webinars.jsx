import React,{useEffect} from 'react'
import '../Component/webinar.css'
import webinar from '../Images/webinar.png'
import webinarimg1 from '../Images/webinarimg1.jpeg'
import webinarimg2 from '../Images/webinarimg2.jpeg'
export default function Webinars() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div class="webinarcontainer">
    <div class="wcrow1">
        
    </div>
    <div class="wcrow2">
        
                    <div class="webinar-card">
                <div class="webinar-image"><img src={webinarimg1} alt="" className='webimg'/></div>
                <div class="webinar-content">
                    <a href="#">
                    <span class="webinar-title">
                        How to start Complience Journey...
                    </span>
                    </a>

                    <p class="webinar-desc">
                    <b className='namee'>Shitanshi Kumar</b><br />
                    CISO and DPO at InSecSys Private Limited.
                    </p>

                    <a class="webinar-action" href="#">
                    Register Now
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div class="webinar-card">
                <div class="webinar-image"><img src={webinarimg1} alt="" className='webimg'/></div>
                <div class="webinar-content">
                    <a href="#">
                    <span class="webinar-title">
                        How to start Complience Journey...
                    </span>
                    </a>

                    <p class="webinar-desc">
                    <b className='namee'>Shitanshi Kumar</b><br />
                    CISO and DPO at InSecSys Private Limited.
                    </p>

                    <a class="webinar-action" href="#">
                    Register Now
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div class="webinar-card">
                <div class="webinar-image"><img src={webinarimg2} alt="" className='webimg2'/></div>
                <div class="webinar-content">
                    <a href="#">
                    <span class="webinar-title">
                        Navigating ISO 27001 for robust Infromation Security
                    </span>
                    </a>

                    <p class="webinar-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium 
                    </p>

                    <a class="webinar-action" href="#">
                    Register Now
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div class="webinar-card">
                <div class="webinar-image"><img src={webinarimg1} alt="" className='webimg'/></div>
                <div class="webinar-content">
                    <a href="#">
                    <span class="webinar-title">
                        How to start Complience Journey...
                    </span>
                    </a>

                    <p class="webinar-desc">
                    <b className='namee'>Shitanshi Kumar</b><br />
                    CISO and DPO at InSecSys Private Limited.
                    </p>

                    <a class="webinar-action" href="#">
                    Register Now
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div class="webinar-card">
                <div class="webinar-image"><img src={webinarimg1} alt="" className='webimg'/></div>
                <div class="webinar-content">
                    <a href="#">
                    <span class="webinar-title">
                        How to start Complience Journey...
                    </span>
                    </a>

                    <p class="webinar-desc">
                    <b className='namee'>Shitanshi Kumar</b><br />
                    CISO and DPO at InSecSys Private Limited.
                    </p>

                    <a class="webinar-action" href="#">
                    Register Now
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div class="webinar-card">
                <div class="webinar-image"><img src={webinarimg1} alt="" className='webimg'/></div>
                <div class="webinar-content">
                    <a href="#">
                    <span class="webinar-title">
                        How to start Complience Journey...
                    </span>
                    </a>

                    <p class="webinar-desc">
                    <b className='namee'>Shitanshi Kumar</b><br />
                    CISO and DPO at InSecSys Private Limited.
                    </p>

                    <a class="webinar-action" href="#">
                    Register Now
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>


    </div>
  </div>
  
  )
}
