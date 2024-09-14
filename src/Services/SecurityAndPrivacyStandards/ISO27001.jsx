import React,{useEffect} from 'react'
import '../SecurityAndPrivacyStandards/iso27001.css'
import image1 from '../../Images/standard-quality-control-collage-concept.jpg'
import isoneed from '../../Images/neediso27001.jpeg'
import '../../Services/PrivacyAssessments/productassessment.css';
import is from '../../Images/iso27001.png'
import ContactForm from '../../Component/ContactForm';
import iso27001img from '../../Images/iso27001image.jpg'

export default function ISO27001() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='is27001container'>
    {/* First row */}
    <div class="is27001firstrow">
      {/* First row column 1 */}
      <div class="is27001scol1">
        <h1><center className='maintitle1'>ISO 27001</center></h1>
        <p className='issubtitle1'>
          The ISO/IEC 27001 regulation is the global benchmark for information security.
          It lists the prerequisites for an effective Information Security Management System (ISMS).
          With the help of ISO 27001's optimal approach, which integrates people, processes, and technology,
          organizations can take control of their information security.
        </p>
      </div>
      {/* First row column 2 */}
      <div class="is27001scol2">
        <img src={iso27001img} alt="" className='iso27001img' />
      </div>
    </div>
    {/* End of First row */}
  
    {/* Second row */}
    <div class="is27001secondrow">
      <div class="is27001secondrowcol1">
        <img src={image1} alt="" className='iso27001img2' />
      </div>
      <div class="is27001secondrowcol2">
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px',marginTop:'-5vh' }}>What is ISO 27001?</h1>
        <p style={{ color: 'black' }}>
          The International Organization for Standardization created the ISO 27001 certification program.
          Some companies choose to apply the standard to benefit from best practices, while others want to certify themselves
          to reassure customers and clients. ISO 27001 focuses on risk assessment, helping companies quantify risks and
          vulnerabilities to their information assets. Controls can then be implemented to reduce these risks.
        </p>
      </div>
    </div>
    {/* End of Second row */}
  
    {/* Third row */}
    <div class="is27001thirdrow">
      <div class="is27001thirdrowcol1">
        <h1 class="maintitle3">Why is ISO 27701 recommended for use in organizations?</h1>
        <ul>
          <li>
            <strong>Applicability Across Organizations:</strong> ISO 27701 is recommended for organizations of all types and sizes, including government agencies, public and private corporations, and charitable organizations.
          </li>
          <li>
            <strong>Guidelines for PII Management:</strong> It provides guidelines specifically for managing personally identifiable information (PII) within an Information Security Management System (ISMS).
          </li>
          <li>
            <strong>ISO 27701 Certification for Improvement:</strong> Organizations aiming to enhance their ISMS can obtain ISO 27701 certification, which serves as an extension of ISO 27001 and ISO 27002.
          </li>
          <li>
            <strong>Comprehensive PII Handling Guidelines:</strong> ISO 27701 extends the scope of ISO 27001 by offering additional guidelines for the handling and protection of personally identifiable information (PII).
          </li>
          <li>
            <strong>Risk-Based Information Security Plan:</strong> Businesses, irrespective of size and sector, can adopt a comprehensive, risk-based information security plan by implementing ISO 27701 Privacy Information Management System (PIMS). Any organization processing or managing personal data under an ISO 27001 ISMS is subject to its provisions.
          </li>
        </ul>
      </div>
      <div class="is27001thirdrowcol2">
        <img src={isoneed} alt="" className='iso27001img3' />
      </div>
    </div>
    {/* End of Third row */}
  
    {/* Fourth row */}
    <div class="is27001fourthrow">
      <div class="is27001fourthrowcol1">
        <h1 className='maintitle44'>How Privacy Pro can help you</h1>
        <p style={{ color: 'navy' }}>
          Privacy Pro, a prominent ISO 27001 service provider, recognizes the hurdles associated with implementing ISO 27001 standards.
          Our fundamental goal is to assist clients in obtaining ISO 27001 certification, enhancing the credibility that comes with adherence to international standards.
        </p>
        <img src={is} alt="" className='iso27001img4' />
      </div>
      <div class="is27001fourthrowcol2">
        <div class="is27001privacyprosinglecolumn">
          <h2 className='maintitle5'style={{marginTop:'-5vh'}}>Strategic Steps for Implementing ISO 27001 Standards:</h2>
          <ol>
            <li><h2>Understanding of ISO 27001 Standards:</h2> Our experts ensure a thorough comprehension of ISO 27001 standards, laying the foundation for effective implementation.</li>
            <li><h2> Formation of Implementation Team: </h2>Privacy Pro assists in assembling a dedicated team to drive the ISO 27001 standards implementation process successfully.</li>
            <li> <h2> Gap Analysis:</h2> A comprehensive gap analysis is performed to identify existing security vulnerabilities and define the scope of improvements.</li>
            <li><h2>Definition of ISO 27001 Standards Scope:</h2> We work collaboratively to precisely define the scope of ISO 27001 standards, tailoring them to your organization's specific needs.</li>
            <li><h2> Creation of Implementation Plan: </h2>A detailed plan is crafted, outlining the steps and timeline for the seamless integration of ISO 27001 standards into your information security management systems.</li>
          </ol>
          <p style={{ color: 'navy' }}>Our strategic approach ensures a smooth transition to ISO 27001 certification, aligning your organization with the best practices advocated for information security management.</p>
        </div>
      </div>
    </div>
    {/* End of Fourth row */}
  
    {/* Contact form */}
    <div className="contactformmiso27001">
      <ContactForm />
    </div>
  </div>
  
  )
}
