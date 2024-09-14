
import React, { useEffect, useRef } from 'react';
import '../PrivacyRegulations/saudi.css'
import gdprimg from '../../Images/gdprimg.jpg'
import whatisgdpr from '../../Images/what is gdpr.jpg'
import needgdpr from '../../Images/needgdpr-removebg-preview.png'
import ContactForm from '../../Component/ContactForm';
import pdpa from '../../Images/pdpa.png'
export default function SaudiArabiaDPA() {
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
    <div className='saudicontainer'>
    <div className="saudifirstrow">
                <div className="saudifirstrowcol">
                  <h1><center className='hippamaintitle'>Saudi Arabia Data Privacy Act (PhilippinesDPA)</center></h1>
                  <p className='phsubtitle1'>The Data Privacy Act of 2012 is a comprehensive data protection legislation in the Philippines that governs the processing of personal information by both government and private sector entities. The law aims to protect the fundamental human right to privacy while ensuring the free flow of information to facilitate innovation, growth, and national development.</p>
                </div>
                  <div className="saudifirstrowcol2"> <img src={pdpa} alt="" className='hippaimg'/></div>
    </div>
    <div className="saudithirdrow">
                <div className="saudithirdrowcol1">
                  <h3 >
                    <center className='hippamaintitle'style={{marginTop:'-5vh'}}>What is Saudi Arabia  Data Privacy Act?</center>
                  </h3>
                  <p style={{ color: 'white' }}>
                  The Saudi Arabia  Data Privacy Act, also known as Republic Act 10173, ensures the protection of personal information by establishing general data privacy principles. It outlines the permissible processing of personal data, subject to compliance with the Act's requirements and other relevant laws. The Act is comprehensive, with detailed implementing rules and regulations that prescribe the necessary measures for individuals and entities handling personal data. Adopting international standards, it aims to safeguard individual personal information in various sectors, including information and communications. 
                  </p>
                </div>
                <div className="saudithirdrowcol2">
                  <img src={whatisgdpr} alt="" className='whatissaudi' />
                </div>
    </div>

    <div className="saudifourthrow">
                  <div className="saudifourthrowcol1">
                    <img src={needgdpr} alt="" className='saudineed'/>
                  </div>
                  <div className="saudifourthrowcol2">
                    <h3>
                      <center style={{ paddingTop: '20px', fontSize: '30px',marginTop:'-9vh' }}>Why Is Philippines DPA Compliance Necessary for Your Organization?</center>
                    </h3>
                    <p style={{ color: 'black' }}>
                    <ul>
                          <li>
                            <strong>Legal Requirement:</strong> Compliance with the DPA is a legal obligation. Failure to comply can result in penalties, fines, and other sanctions imposed by the National Privacy Commission (NPC), the government agency responsible for implementing and enforcing the DPA.
                          </li>
                          <li>
                            <strong>Protection of Individual Rights:</strong> The DPA is designed to protect the privacy rights of individuals. Complying with the law demonstrates an organization's commitment to respecting the privacy of its customers, employees, and other stakeholders.
                          </li>
                          <li>
                            <strong>Enhanced Trust and Reputation:</strong> Being DPA compliant can enhance the trust and reputation of an organization. Customers and partners are more likely to trust an entity that takes data protection seriously, particularly in an era of increasing data breaches and privacy concerns.
                          </li>
                          <li>
                            <strong>Global Business Requirements:</strong> If your organization operates internationally, many countries and regions have enacted or are in the process of enacting strict data protection laws. Complying with the DPA can help your organization align with global best practices.
                          </li>
                        </ul>
                    </p>
                  </div>
    </div>
    <div className="saudififthrow">
                    <div className="saudififthrowcol">
                      <div class="gdpranimation2" ref={animationRef}>
                        <div className="brnifitcontent"><center className='phbenifitcontent'>Benefits of<br /> Data Privacy Act<br /> Compliance</center></div>
                        <div class="saudibox saudibox1"><center> <h3 className='gdpranimationText'>Conduct In-depth Assessment </h3> </center> <p className='phsubtitle3'>Our DPA experts conduct a comprehensive compliance evaluation, identifying weaknesses and offering strategic recommendations to enhance your data protection strategy. We're committed to assisting your organization in achieving robust and sustained DPA compliance aligned with regulatory standards and best practices.
                        </p></div>
                        <div class="gdprsaudislide-tr"><center> <h3 className='gdpranimationText'>Develop Customized Strategy:</h3> </center> <p className='phsubtitle3'>We design a DPA compliance plan based on your particular needs because we recognize that every organization is different. Our staff will collaborate with you to pinpoint problem areas and create a thorough compliance plan.</p></div>
                        <div class="gdprsaudislide-right"><center><h3 className='gdpranimationText'>Offer Training Programs: </h3> </center> <p className='phsubtitle3'> We give training courses that help your staff members comprehend the criteria for DPA compliance. Our programs are customized for your company and help guarantee that your employees have the skills necessary to stay in compliance.</p></div>
                        <div class="gdprsaudislide-left"><center><h3 className='gdpranimationText'>Monitor Compliance: </h3> </center> <p className='phsubtitle3'>We provide ongoing oversight of your DPA compliance strategy to guarantee that all regulations are being followed. Any non-compliance will be pointed up by our team, along with suggestions for correction. Frequent monitoring supports DPA compliance by lowering the possibility of expensive data breaches.</p></div>
                        <div class="gdprsaudislide-tl"><center><h3 className='gdpranimationText'>Provide Implementation Support: </h3> </center> <p className='phsubtitle3'>Our staff offers practical assistance and direction during the whole implementation process. We assist you in optimizing your workflow and guarantee that your DPA compliance strategy is carried out successfully.</p></div>
                      </div>
                    </div>
    </div>
    <div className="contactform">
      <ContactForm />
    </div>
  </div>
  );
}

