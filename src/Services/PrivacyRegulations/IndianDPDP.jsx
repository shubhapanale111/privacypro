
import React, { useEffect, useRef } from 'react';
import '../../Services/PrivacyRegulations/indiadpdp.css';
import '../../Services/PrivacyRegulations/gdpr.css';
import ContactForm from '../../Component/ContactForm';
import firstimg from '../../Images/rm373batch3-socialmediapost-05.jpg'
import gdprimg from '../../Images/gdprimg.jpg'
import whatisgdpr from '../../Images/what is gdpr.jpg'
import needgdpr from '../../Images/needgdpr-removebg-preview.png'
export default function IndianDPDP() {
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
    <div className='indiadpdpcontainer'>
    
      <div className="indiadpdpfirstrow">
        <div className="indiadpdpfirstrowcol">
          <h1><center className='maintitle'>India DPDP (Digital Personal Data Protection Act)</center></h1>
     <p  className='subtitle'>A proposed law in India called the Digital Personal Data Protection Act (DPDPA) seeks to control the gathering, use, and preservation of personal information about individuals. It provides guidelines for the management of personal data, encourages accountability and transparency in data processing, and gives people the power to manage their own data. The goal of the measure is to safeguard people's privacy and it applies to all organizations that handle personal data, including governments and companies.</p>
          </div>
        <div className="indiadpdpfirstrowcol2">   </div>
      </div>
     
      <div className="indiadpdpthirdrow">
        <div className="indiadpdpthirdrowcol1"> <h3 >  <center className='maintitle2'>What is Digital Personal Data Protection Act?</center>
        </h3>
      <p className='subtitle2'>The Digital Personal Data Protection Act, or DPDPA for short, is a measure that was introduced in India to safeguard people's freedom and rights to privacy with regard to their personal data. The bill defines a number of professions, including "Data Fiduciary," that are connected to the processing of personal data. The DPDPA seeks to control digital personal information and offer remedies for infractions.

The measure mandates that before collecting, keeping, or processing an individual's personal data, businesses must get that person's express consent.  The Bill suggests a minimum fine of Rs 50 crore and a maximum fine of Rs 250 crore for organizations that breach the established criteria. Additionally, entities are required to erase user data if it is no longer needed for the intended purpose. The DPDPA aims to make it easier to process personal data lawfully while maintaining
 </p></div>
        <div className="indiadpdpthirdrowcol2">
       <img src={whatisgdpr} alt="" className='whatisgdpr'/>
        </div>
      </div>
      <div className="indiadpdpfourthrow">
        <div className="indiadpdpfourthrowcol1">
<img src={needgdpr} alt="" className='needdpdp'/>
        </div>
        <div className="indiadpdpfourthrowcol22">
        <h3 >  <center className='maintitle'>The Effects of DPDPA on You and Your Company</center>
        </h3>
        <div class="info-container">
        <div class="point">
            <h2 className='submaintitle'>Monitoring Third Party Consent Managers:</h2>
            <p className='subsubtitle'> Implementing effective monitoring systems for third-party consent managers is crucial for ensuring compliance with data protection regulations. Regular audits and reviews of their processes and practices can help identify and rectify any potential privacy risks or violations.</p>
        </div>

        <div class="point">
            <h2 className='submaintitle'>Management of Consent and Procurement:</h2>
            <p className='subsubtitle'>Successful management of consent and procurement involves aligning organizational procurement practices with data protection regulations. It includes adopting standardized bidding documents that consider privacy aspects and incorporating consent management into the procurement lifecycle.</p>
        </div>

        <div class="point">
            <h2 className='submaintitle'>Appointment of DPO and Independent Data Auditor :</h2>
            <p className='subsubtitle'>The appointment of a Data Protection Officer (DPO), based in India, is a mandatory requirement for significant data fiduciaries. Additionally, engaging an independent data auditor enhances accountability and ensures adherence to the Data Protection Bill's provisions.</p>
        </div>

        <div class="point">
            <h2  className='submaintitle'>Conducting DPIAs:</h2>
            <p  className='subsubtitle'>Conducting Data Protection Impact Assessments (DPIAs) is a proactive measure to identify and mitigate privacy risks associated with data processing activities. DPIAs facilitate compliance with data protection laws by assessing the necessity, proportionality, and potential risks of data processing.</p>
        </div>
    </div>
        </div>
      </div>
      <div className="indiadpdpfifthrow">
        <div className="indiadpdpfifthrowcol">
        <div class="gdpranimation2" ref={animationRef}>
<h1 ><center className='maintitle4'>Benifits of<br/> DPDPA <br/> Act</center></h1>
   <div class="gdpr2box gdpr2box1"><center> <h3 className='gdpranimationText'>Outstanding Industry Experts:</h3> </center> <p className='phsubtitle3'>Our cybersecurity solutions are curated and implemented by a team of outstanding industry experts, ensuring that your digital assets receive the highest level of protection and strategic guidance in the ever-evolving threat landscape.
</p></div>  
      <div class="gdpr2slide-tr"><center> <h3 className='gdpranimationText'>A wide variety of foreign clients:</h3> </center> <p className='phsubtitle3'>With a diverse client base spanning across borders, we have earned the trust of numerous foreign clients, showcasing our global reach and ability to cater to the cybersecurity needs of organizations worldwide .</p></div>
      <div class="gdpr2slide-right"><center><h3 className='gdpranimationText'>Integrated Legal & Cybersecurity Expertise:</h3> </center> <p className='phsubtitle3'> Our unique strength lies in seamlessly integrating legal and cybersecurity expertise, ensuring a comprehensive approach to safeguarding your data and operations in compliance with global privacy regulations.</p></div>
      <div class="gdpr2slide-left"><center><h3 className='gdpranimationText'>Large Corporation Trusts Us:</h3> </center> <p className='phsubtitle3'>The confidence of large corporations in our cybersecurity solutions is a testament to our proven track record in providing robust protection and maintaining the trust of major players in the business landscape.</p></div>
      <div class="gdpr2slide-tl"><center><h3 className='gdpranimationText'>Innovative Privacy Tools:</h3> </center> <p className='phsubtitle3'>Embrace innovation with our cutting-edge privacy tools designed to enhance your digital security posture. These tools, as highlighted by privacy experts, offer advanced features to counteract modern threats and protect sensitive information effectively.</p></div>
   </div>
        </div>
      </div>
      <div style={{paddingBottom:'2vh'}}>
        <ContactForm/>
      </div>
    </div>
  );
}