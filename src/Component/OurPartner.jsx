// // OurPartners.jsx
// import React from 'react';
// import '../Component/ourpartner.css';
// import instasafe from '../../src/Images/instasafe2.jpg'
// import everen from '../../src/Images/evren.png'
// import webonoise from '../../src/Images/webonisepng.png'
// import cobot from '../../src/Images/cobotpng.png'
// import MoreInfo from './Moreinfo';

// const cardsData = [
//   {
//     id: 1,
//     title: 'Title 1',
//     subtitle: 'Subtitle 1',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: instasafe,
//   },
//   {
//     id: 2,
//     title: 'Title 1',
//     subtitle: 'Subtitle 1',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: everen,
//   },
//   // Repeat the data for 11 more cards
//   {
//     id: 3,
//     title: 'Title 2',
//     subtitle: 'Subtitle 2',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: webonoise,
//   },
//   {
//     id: 4,
//     title: 'Title 3',
//     subtitle: 'Subtitle 3',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: cobot,
//   },
//   {
//     id: 5,
//     title: 'Title 1',
//     subtitle: 'Subtitle 1',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: everen,
//   },
//   // Repeat the data for 11 more cards
//   {
//     id: 6,
//     title: 'Title 2',
//     subtitle: 'Subtitle 2',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: cobot,
//   },
//   {
//     id: 7,
//     title: 'Title 3',
//     subtitle: 'Subtitle 3',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: webonoise,
//   },
//   {
//     id: 8,
//     title: 'Title 1',
//     subtitle: 'Subtitle 1',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: instasafe,
//   },
//   // Repeat the data for 11 more cards
//   {
//     id: 9,
//     title: 'Title 2',
//     subtitle: 'Subtitle 2',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: everen,
//   },
//   {
//     id: 10,
//     title: 'Title 3',
//     subtitle: 'Subtitle 3',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: instasafe,
//   },
//   {
//     id: 11,
//     title: 'Title 1',
//     subtitle: 'Subtitle 1',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: webonoise,
//   },
//   // Repeat the data for 11 more cards
//   {
//     id: 12,
//     title: 'Title 2',
//     subtitle: 'Subtitle 2',
//     description: 'Lorem ipsum dolor, sit amet expedita exercitationem...',
//     image: everen,
//   },
// ];

// const OurPartners = () => {
//   return (

// <div class="homesixcontainer">

//   <div class="homesixrow2">
 
//                  <div class="oprow1"><h1 style={{fontSize:'35px',color:'White'}}> Our Partners</h1></div>
                 
              
//                  <div class="oprow2">
//                  {cardsData.map((card) => (
//        <article key={card.id} className="op-card">
//          <div className="op-temporary_text">
//            <img src={card.image} alt={`Image for ${card.title}`} />
//          </div>
//          <div className="op-card_content">
//            <span className="op-card_title">{card.title}</span>
//            <span className="op-card_subtitle">{card.subtitle}</span>
//            <p className="op-card_description">{card.description}</p>
//          </div>
//        </article>
//      ))}
//        </div>
  
               
           
    
//   </div>   
  
//   <div class="homesixrow3">
//     <MoreInfo/>
//     </div>


 
// </div>









//   );
// };

// export default OurPartners;

import React from 'react'
import '../Component/ourpartner.css';
import instasafe from '../../src/Images/instasafe2.jpg'
import everen from '../../src/Images/evren.png'
import webonoise from '../../src/Images/webonisepng.png'
import cobot from '../../src/Images/cobotpng.png'
import MoreInfo from './Moreinfo';
export default function OurPartner() {
  return (
    <div className="newourpartnercontainer">
      <div className="newourpartnercontainerfirstrow">
        <div className="newourpartnercontainerfirstrowcol1">
          <div className="dummy"><h1><center>Our Partners</center></h1>
          <br />
          <p>Collaborating with industry leaders and innovators, our esteemed partners contribute to our shared success, bringing expertise and synergy to every endeavor.</p>
          <hr /></div>
        
      
        </div>
        <div className="newourpartnercontainerfirstrowcol2">
<img src={instasafe} alt="" />
<img src={everen} alt="" />
<img src={webonoise} alt="" />
<img src={cobot} alt="" />
<img src={instasafe} alt="" />
<img src={everen} alt="" />
<img src={webonoise} alt="" />
<img src={cobot} alt="" />
<img src={instasafe} alt="" />
<img src={everen} alt="" />
<img src={webonoise} alt="" />
<img src={cobot} alt="" />

        </div>
      </div>
      <div>
        <MoreInfo/>
      </div>
    </div>
  )
}

