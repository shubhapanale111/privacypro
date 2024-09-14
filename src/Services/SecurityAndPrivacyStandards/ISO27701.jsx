
import React,{useEffect} from 'react'
import '../SecurityAndPrivacyStandards/iso22301.css'
import image1 from '../../Images/standard-quality-control-collage-concept.jpg'
import isoneed from '../../Images/neediso27001.jpeg'
import '../../Services/PrivacyAssessments/productassessment.css';
import ContactForm from '../../Component/ContactForm';
import iso27001img from '../../Images/iso27701.png'
import is from '../../Images/iso27701sticker.png'
export default function ISO27701() {
  return (
    <div className='is22301container'>
    {/* First row */}
    <div class="is22301firstrow">
      {/* First row column 1 */}
      <div class="is22301scol1">
        <h1><center className='maintitle1'>ISO 27701</center></h1>
        <p className='issubtitle1'>
        ISO 27701, an extension to ISO 27001, is the globally recognized 
        standard for Privacy Information Management Systems (PIMS).
         It outlines the requirements for establishing and maintaining 
         a robust PIMS, emphasizing the responsible handling of personal
          information. By integrating ISO 27701, organizations can enhance
           their privacy management, address regulatory compliance, and 
           foster a trustworthy environment for stakeholders. The standard 
           provides a systematic approach that integrates people, processes, 
           and technology, allowing organizations to effectively manage 
           privacy risks.
        </p>
      </div>
      {/* First row column 2 */}
      <div class="is22301scol2">
        <img src={iso27001img} alt="" className='iso27001img' />
      </div>
    </div>
    {/* End of First row */}
  
    {/* Second row */}
    <div class="is22301secondrow">
      <div class="is22301secondrowcol1">
        <img src={image1} alt="" className='iso22301img2' />
      </div>
      <div class="is22301secondrowcol2">
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px',marginTop:'-5vh' }}>What is ISO/IEC 27701?</h1>
        <p style={{ color: 'black' }}>
        ISO/IEC 27701 is an extension of ISO 27001, focusing specifically on Privacy Information Management Systems (PIMS). It provides a framework for organizations to establish, implement, maintain, and continually improve a Privacy Information Management System. Companies opt for ISO 27701 to adhere to best practices in privacy management, reassure customers, and globally demonstrate compliance with industry standards.

Similar to ISO 27001, ISO 27701 emphasizes risk assessment as a foundational element. The standard aims to quantify risks and vulnerabilities related to an organization's handling of personal information. Assessing the risk associated with the confidentiality, integrity, and availability of personal data allows organizations to implement controls effectively.

By obtaining ISO 27701 certification, companies showcase their commitment to responsible handling of personal information and compliance with privacy laws. The implementation of controls specified in ISO 27701 enables organizations to mitigate privacy risks, enhance data protection, and build trust with stakeholders.
        </p>
      </div>
    </div>
    {/* End of Second row */}
  
    {/* Third row */}
    <div class="is22301thirdrow">
      <div class="is22301thirdrowcol1">
        <h1 class="maintitle3">Why is ISO 27701 recommended for use in organizations?</h1>
        <ul>
                  <li>
                    <strong>Applicability Across Organizations:</strong>
                    ISO 27701 is recommended for organizations of all types and sizes, including government agencies, public and private corporations, and charitable organizations. It provides a versatile framework suitable for diverse sectors.
                  </li>
                  <li>
                    <strong>Guidelines for PII Management:</strong>
                    This standard offers specific guidelines for managing personally identifiable information (PII) within an Information Security Management System (ISMS). It ensures a systematic approach to protecting sensitive data.
                  </li>
                  <li>
                    <strong>ISO 27701 Certification for Improvement:</strong>
                    Organizations seeking to enhance their ISMS can obtain ISO 27701 certification, acting as an extension of ISO 27001 and ISO 27002. This certification demonstrates a commitment to robust privacy management and continuous improvement.
                  </li>
                  <li>
                    <strong>Comprehensive PII Handling Guidelines:</strong>
                    ISO 27701 expands the scope of ISO 27001 by providing additional guidelines for the handling and protection of personally identifiable information (PII). This ensures a comprehensive approach to privacy management.
                  </li>
                  <li>
                    <strong>Risk-Based Information Security Plan:</strong>
                    Businesses of any size and sector can adopt a comprehensive, risk-based information security plan by implementing ISO 27701 Privacy Information Management System (PIMS). It is particularly relevant for organizations processing or managing personal data under an ISO 27001 ISMS.
                  </li>
      </ul>
      </div>
      <div class="is22301thirdrowcol2">
        <img src={isoneed} alt="" className='is22301img3' />
      </div>
    </div>
    {/* End of Third row */}
  
    {/* Fourth row */}
    <div class="is22301fourthrow">
      <div class="is22301fourthrowcol1">
        <h1 className='maintitle44'>How Privacy Pro can help you</h1>
        <p style={{ color: 'navy' }}>
        Privacy Pro, a leading ISO 27001 service provider,
         extends its expertise to ISO 27701 implementation,
          recognizing the challenges associated with adhering
           to these standards. The fundamental goal is to
            assist clients in achieving ISO 27001 certification,
             enhancing credibility through adherence to international 
             standards.
        </p>
        <img src={is} alt="" className='is22301img4' />
      </div>
      <div class="is22301fourthrowcol2">
        <div class="is22301privacyprosinglecolumn">
          <h2 className='maintitle5'style={{marginTop:'-5vh'}}>Strategic Steps for Implementing ISO 27701 Standards:</h2>
          <ol>
            <li><h2><i class="icon fas fa-check-circle"></i> Understanding of ISO 27701 Standards:</h2> Our experts ensure a comprehensive understanding of ISO 27701 standards, laying the foundation for effective implementation.</li>
            <li><h2><i class="icon fas fa-users"></i> Formation of Implementation Team: </h2>Privacy Pro assists in assembling a dedicated team to drive the ISO 27701 standards implementation process successfully.</li>
            <li> <h2><i class="icon fas fa-chart-bar"></i> Gap Analysis:</h2>A thorough gap analysis is performed to identify existing privacy vulnerabilities and define the scope for improvements.</li>
            <li><h2><i class="icon fas fa-bullseye"></i> Definition of ISO 27701 Standards Scope:</h2> Collaboratively defining the scope of ISO 27701 standards, tailored to your organization's specific needs.</li>
            <li><h2><i class="icon fas fa-calendar-alt"></i> Creation of Implementation Plan: </h2>Crafting a detailed plan outlining steps and timelines for seamlessly integrating ISO 27701 standards into your privacy management systems</li>
        </ol>

        <p style={{color:'navy'}}>Our strategic approach ensures a smooth transition to ISO 27701 certification, aligning your organization with best practices for privacy information management.</p>
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
