// // TextAnim.jsx
// import React from "react";
// import Typed from "react-typed";
// import "../Component/anim.css"; // Import your specific styles

// function TextAnim() {
//     return (
//       <div className="text-anim">
     
//           <h1 className="titleanim">React Typing Animation Effect</h1>
    
//         <div className="animated-typing">
//           <Typed
//             strings={[
//               "I'm a Full Stack Developer",
//               "I Love Software Development",
//               "I Love All My Subscribers",
//             ]}
//             typeSpeed={150}
//             backSpeed={100}
//             loop
//           />
//         </div>
//         <div className="buttons">
//           <button className="btn-pink">Learn More</button>
//           <button className="btn-purple">Talk To Us Now</button>
//         </div>
//       </div>
//     );
//   }
  
//   export default TextAnim;
import React from 'react'
import "../Component/anim.css";
import anim2 from '../Images/bgvideonew.mp4';
export default function TextAnim() {
  return (
    <div className='animcontainer'>
      <div className='inner-container'>
      <video autoPlay loop muted playsInline className="background-video" style={{height:'100%'}}>
                        <source src={anim2} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
      </div>
    </div>
  )
}
