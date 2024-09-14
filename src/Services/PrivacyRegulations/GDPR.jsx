
import React, { useEffect, useRef } from 'react';
import '../PrivacyRegulations/gdpr.css'
import gdprimg from '../../Images/gdprimg.jpg'
import whatisgdpr from '../../Images/what is gdpr.jpg'
import needgdpr from '../../Images/needgdpr-removebg-preview.png'
import ContactForm from '../../Component/ContactForm';
export default function GDPR() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const animationRef = useRef(null);
  useEffect(() => {
    const currentRef = animationRef.current;
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationRef.current.classList.add('start-animation');
        } else {
          animationRef.current.classList.remove('start-animation');
        }
      });
    };
    const options = {
        threshold: 0.30,
      };
    const observer = new IntersectionObserver(callback, options);

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationRef]);
  return (
    <div className='gdprcontainer'>
    
      <div className="gdprfirstrow">
        <div className="gdprfirstrowcol">
          <h1><center className='maintitle'>General Data Protection Regulation(GDPR)</center></h1>
     <p className='subtitle'>Ensuring compliance with the General Data Protection Regulation (GDPR) is imperative for any business or organization entrusted with handling personal data, irrespective of geographical location. This mandatory adherence to GDPR standards may pose challenges for enterprises, yet it also provides a valuable opportunity to showcase a steadfast commitment to safeguarding individuals' data. Embracing GDPR principles not only aligns with regulatory requirements but also underscores a dedication to the highest standards of data protection.</p>
          </div>
        <div className="gdprfirstrowco2">   </div>
      </div>
      <div className="gdprsecondrow">
        <div className="gdprsecondrowcol1">
          <img src={gdprimg} alt=""  className='gdprimg'/>
        </div>
        <div className="gdprsecondrowcol2"> 
        <h3 >           <center className='maintitle'>GDPR Regulation</center>
         </h3>
         <p className='subtitle22'>         Ensuring compliance with the General Data Protection Regulation (GDPR) is imperative for any business or organization that processes personal data, 
         irrespective of its geographical location.
         </p><p className='subtitle22'>
          While the mandatory nature of GDPR adherence may pose challenges for enterprises, it simultaneously offers a unique opportunity to showcase unwavering commitment to safeguarding individuals' sensitive information. </p><p className='subtitle22'>Embracing GDPR guidelines not only fulfills regulatory requirements but also reinforces an organization's dedication to maintaining the highest standards of data protection and privacy.
         </p></div>
      </div>
      <div className="gdprthirdrow">
        <div className="gdprthirdrowcol1"> <h3 style={{ }}>  <center className='maintitle2'>What is the General Data Protection Regulation?</center>
        </h3>
      <p className='subtitle2'>The 1995 Data Protection Directive has been succeeded by the General Data Protection Regulation (GDPR), representing the new European Union data privacy framework. Under this regulation, a pivotal emphasis is placed on affording individuals greater control over their data, necessitating explicit consent from customers before the collection, storage, or utilization of their information by companies.
In order to ensure compliance with the GDPR, organizations are mandated to undertake various measures. These encompass the establishment of both organizational and technical safeguards to secure personal data, a comprehensive assessment of existing data protection policies, and the appointment of a designated data protection officer. Adherence to these requirements not only aligns entities with regulatory obligations but also underscores their commitment to upholding robust data protection standards. </p></div>
        <div className="gdprthirdrowcol2">
       <img src={whatisgdpr} alt="" className='whatisgdpr'/>
        </div>
      </div>
      <div className="gdprfourthrow">
        <div className="gdprfourthrowcol1">
<img src={needgdpr} alt="" className='needgdpr'/>
        </div>
        <div className="gdprfourthrowcol22">
        <h3 >  <center className='maintitle'>Why Is GDPR Compliance Necessary For Your Organization?</center>
        </h3>
        <div class="info-container">
        <div class="point">
            <h2 className='submaintitle'>Cybersecurity Enhancement:</h2>
            <p className='subsubtitle'>GDPR compliance necessitates robust cybersecurity measures, reducing the risk of data breaches and enhancing overall digital security for your organization.</p>
        </div>

        <div class="point">
            <h2 className='submaintitle'>Data Privacy Assurance:</h2>
            <p className='subsubtitle'>GDPR ensures a heightened level of data privacy for individuals. By complying with its regulations, your organization demonstrates a commitment to respecting and safeguarding the privacy of personal information.</p>
        </div>

        <div class="point">
            <h2 className='submaintitle'>Data Protection Mechanisms:</h2>
            <p className='subsubtitle'>Implementing GDPR-compliant practices involves establishing effective data protection mechanisms. This not only aligns with legal requirements but also builds trust with clients and stakeholders.</p>
        </div>

        <div class="point">
            <h2  className='submaintitle'>Mitigation of Financial Risks:</h2>
            <p  className='subsubtitle'>Non-compliance with GDPR carries substantial financial risks. Fines and penalties for violations can be severe, reaching up to €20 million or 4% of your company's global annual revenue. Ensuring compliance is a proactive measure to mitigate these financial risks</p>
        </div>
    </div>
        </div>
      </div>
     
      <div className="gdprfifthrow">
        <div className="gdprfifthrowcol">
        <div class="gdpranimation2" ref={animationRef}>
          <div className="maintitlegdpr">
<h1><center className='maintitle4'>Benifits of<br/> General Data Protection<br/> Regulation</center></h1></div>
   <div class="gdprbox gdprbox1"><center> <h3 className='gdpranimationText'>Conduct In-depth Assessment </h3> </center> <p className='phsubtitle3'>Our GDPR experts conduct a comprehensive compliance evaluation, identifying weaknesses and offering strategic recommendations to enhance your data protection strategy. We're committed to assisting your organization in achieving robust and sustained GDPR compliance aligned with regulatory standards and best practices.
</p></div>  
      <div class="gdprrslide-tr"><center> <h3 className='gdpranimationText'>Develop Customized Strategy:</h3> </center> <p className='phsubtitle3'>We design a GDPR compliance plan based on your particular needs because we recognize that every organization is different. Our staff will collaborate with you to pinpoint problem areas and create a thorough compliance plan.</p></div>
      <div class="gdprrslide-right"><center><h3 className='gdpranimationText'>Offer Training Programs: </h3> </center> <p className='phsubtitle3'> We give training courses that help your staff members comprehend the criteria for GDPR compliance. Our programs are customized for your company and help guarantee that your employees have the skills necessary to stay in compliance.</p></div>
      <div class="gdprrslide-left"><center><h3 className='gdpranimationText'>Monitor Compliance: </h3> </center> <p className='phsubtitle3'>We provide ongoing oversight of your GDPR compliance strategy to guarantee that all regulations are being followed. Any non-compliance will be pointed up by our team, along with suggestions for correction. Frequent monitoring supports GDPR compliance by lowering the possibility of expensive data breaches.</p></div>
      <div class="gdprrslide-tl"><center><h3 className='gdpranimationText'>Provide Implementation Support: </h3> </center> <p className='phsubtitle3'>Our staff offers practical assistance and direction during the whole implementation process. We assist you in optimizing your workflow and guarantee that your GDPR compliance strategy is carried out successfully.</p></div>
   </div>
        </div>
      </div>
      <div className="contactform">
        <ContactForm/>
      </div>
    </div>
  );
}
