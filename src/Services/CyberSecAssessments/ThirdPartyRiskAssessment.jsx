import React,{useEffect} from 'react';
import '../../Services/CyberSecAssessments/tprm.css';
import ContactForm from '../../Component/ContactForm';
import firstimg from '../../Images/wepik-export-20231128051511KxTv.jpeg'
import img2 from '../../Images/tprmsticker3.png'
import img3 from '../../Images/1_Fbe1C6BvEScpshkMwH5oSQ.png'
import '../../Services/PrivacyAssessments/productassessment.css';
import tprm from '../../Images/tprm.png'
import riskman from '../../Images/riskman.png'

export default function ThirdPartyRiskAssessment() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tprmcontainer">
      {/* first row start */}
      <div className="tprmfirstrow">
        <div className="tprmfirstrowcol1">
          <h1 className='tprmmaintitle1'>Third-Party Risk Assessment</h1>
          <p style={{color:'white'}}>An evaluation of third-party risk looks at all the considerations that need to be made when outsourcing a given product or service to a third party. Through a third-party risk assessment, an attempt is made to analyze the risk associated with a third-party vendor who will be providing a good or service to your business. It is important to understand the risks associated with these outsourcing decisions. Every outsourced interaction with a third party entails a substantial risk.</p>
        </div>
        <div className="tprmfirstrowcol2">
          <img src={tprm} alt="" className='tprmimg' />
        </div>
      </div>
        {/* first row End */}
          {/* Second row start */}
      <div className="tprmsecondrow">
        <div className="tprmsecondrowcolumn1">
          <h1 className='tprmmaintitle2'style={{marginTop:'-8vh'}}>What is Risk Assessment by a Third Party?</h1>
          <p className='tprmsubtitle2'>Numerous companies assign different tasks to other entities according to their competence. A supplier, vendor, subcontractor, contract manufacturer, reseller, distributor, partner, captive, or affiliate are a few examples of these third parties.  An organization's third-party risk assessment focuses on the vendor risk that arises from its relationships with suppliers, vendors, service providers, and the supply chain. It is a crucial aspect of a larger collection of strategies for managing third-party risk.</p>
        </div>
        <div className="tprmsecondrowcolumn2">
          <img src={riskman} alt="" className='tprmfirstimg'/>
        </div>
      </div>
        {/* Second row End */}
          {/* Third row start */}
      <div className="tprmthirdrow">
        <div className="tprmthirdrowcolumn1">
          <img src={img2} alt="" className='tprmfirstimg2'/>
        </div>
        <div className="tprmthirdrowcolumn2">
          <h1 className='tprmmaintitle1'style={{marginTop:'-10vh'}}> Why is Third-Party Risk Assessment necessary for your organization?</h1>
          <p className='tprmsubtitle1' style={{color:'white'}}>
          <ol>
  <li><strong>Protect Against Income Loss:</strong> Third-party providers are essential for innovation and development, but over-reliance on them can lead to income loss. Regular risk assessments help identify and mitigate financial risks associated with third-party relationships.</li>

  <li><strong>Prevent Operational Disruptions:</strong> Assessing third-party risks is crucial to avoid operational disruptions. Understanding potential hazards allows organizations to implement strategies for maintaining operational continuity and resilience.</li>

  <li><strong>Ensure Regulatory Compliance:</strong> Third-party risk assessments help organizations comply with regulations. Monitoring and evaluating risks associated with third parties contribute to regulatory adherence and reduce the likelihood of legal actions.</li>

  <li><strong>Safeguard Reputation and Security:</strong> Conducting risk assessments on third parties is essential to protect the organization's reputation and security. Identifying and addressing potential risks, including privacy and security concerns, helps in maintaining credibility and trust.</li>
</ol>

             </p>
        </div>
      </div>
        {/* Third row End */}
          {/* Fourth row start */}
      <div className="tprmfourthrow">
        <div className="tprmfourthrowcolumn1">
          <h1 className='tprmmaintitle2'style={{marginTop:'-10vh'}}>How does the assessment of third-party risk affect your company?</h1>
          <p style={{ paddingTop: '10px', color: 'black' }}>1. It gives you control over a system that enables you to regularly keep an eye on many parties and potential threats.</p>
          <p style={{ paddingTop: '10px', color: 'black' }}>2. It affects the scope of your analysis while enhancing your ability to predict and assess risks related to third parties, both internal and external.</p>
          <p style={{ paddingTop: '10px', color: 'black' }}>3. It helps you collect and analyze data on third-party risks in a macro-level way for a variety of assessments, which will enhance the company's future vendor choices.</p>
          <p style={{ paddingTop: '10px', color: 'black' }}>4. It enables you to check the efficacy of the risk assessment parameters, revealing the quality and reliability of your information.</p>
        </div>
        <div className="tprmfourthrowcolumn2">
          <img src={img3} alt="" className='tprmfirstimg2'/>
        </div>
      </div>
  {/* Fourth row End */}  
  {/* Sixth row start */}
      <div class="tprmsixthrow">
    <div class="tprmsixthrowcol1">
    <h1 className='tprmmaintitle2'style={{marginTop:'-10vh'}}> Benefits of Third-Party Risk Assessment </h1>
         <ol className='tprmsubtitle2'>
          <li>
          An evaluation of third-party risk looks at all the considerations that need to be made when outsourcing a given product or service to a third party. Through a third-party risk assessment, an attempt is made to analyze the risk associated with a third-party vendor who will be providing a good or service to your business. It is important to understand the risks associated with these outsourcing decisions. Every outsourced interaction with a third party entails a substantial risk.
          </li>
          <li>
          Reducing risks: You may keep a standard across all vendors by determining the exact risk for each provider. This will lower potential risks because you can draft contracts that ensure all vendors follow business standards in general.
          </li>
          <li>
          Compliance: Businesses that fail to comply with government regulations face significant difficulties. In addition to harsh penalties, sanctions may damage your reputation with clients and business associates. 
          </li>
         </ol>
    </div>
      
    <div class="tprmsixthrowcol2">
    <img src={firstimg} alt="" className='tprmfirstimg6'/>
    </div>
  </div>
  {/* Sixth row End */}
  
    {/* Contact form start */}
      <div className="tprmcontact-container">
        <ContactForm />
      </div>
{/* Contact form End     */}
</div>
// Tprm Main Container End
  );
}