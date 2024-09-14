import React from 'react'
import firstimg from '../Images/best-about-us-pages.jpg'
import secondimg from '../Images/staffasaservice.jpg'
import '../../src/AboutUs/whyprivacypro.css';
import image1 from '../Images/TD0045_SHubhamPanale.jpg'
export default function AboutUs(){
  return (
    <div className='aboutuscontainer'>
        {/* first row */}
      <div class='aboutusfirstrow'>
        {/* first row column1 */}
        <div class="aboutusfirstrowcol1">

        <h1 className='aboutusmainheading'>ABOUT US</h1>
        <p className='aboutussubheading'>Why PrivacyPro Consulting</p>
        <p style={{paddingTop:'10px'}} className="aboutussubcontaint">Welcome to PrivacyPro, where safeguarding our clients' data is not just a commitment but a duty. We specialize in assisting businesses to adhere to cybersecurity and data privacy requirements, boasting a diverse clientele that includes renowned companies like IZMO, Webonise, and MusicBreakR.</p>
        <p style={{paddingTop:'10px'}} className="aboutussubcontaint"> Our track record of success speaks volumes about our dedication to protecting sensitive information.</p>
       
        </div>
         {/* first row column 2 */}
        <div className="aboutusfirstrowcol2">
       <img src={firstimg} alt=" " className='aboutusimage1'  />
        </div>
        </div>
{/* End of first row */}

{/* second row start*/}

     <div className="aboutussecondrow">
      <div className="aboutussecondrowcol1">
        <h1 className='aboutusmainheading2'style={{marginTop:'-5vh'}}><center>OUR MISSION</center></h1>
        <p className='aboutussubheading2'>At PrivacyPro, we are on a mission to bridge the global skills gap in data privacy. Our focus extends beyond mere compliance; we aim to cultivate professionals who not only ensure regulatory adherence but also drive revenue growth, minimize risks, and foster trust. By empowering our community with practical skills, we aim to eliminate the need for costly consultants or internal experts. <p>PrivacyPro is recognized and accredited, solidifying our position as a trusted source for in-depth knowledge on the intricacies of data protection. Our commitment to advancing professions in data privacy is reflected in the excellent guidance and training we provide. With a foundation built on real-world experience, PrivacyPro stands as the most reliable source for corporate privacy solutions.</p> </p>
     
      </div>
      <div className="aboutussecondrowcol2">
        <img src={secondimg} alt="" className='aboutsecondimg'/>
      </div>
    </div>
  <div className="aboutusthirdrow">
    <div className="aboutusthirdrowcol1">
      <h1>Our Leaders</h1>
    </div>
    <div className="aboutusthirdrowcol2">

    <div class="aboutus-card">
                <div class="aboutus-image">
                <div className="aboutusimagecol1">
                  <img src={image1} alt="" className='aboutusimage3'/>
                </div>
                  <div className="aboutusimagecol2">
                    <h1> Lily Jha</h1>
                    <h5>Co Founder CEO InSecSys</h5>
                  </div>
                </div>
                <div class="aboutus-content">
                    

                    <p class="aboutus-desc">
                    
                    Lily Jha is a passionate, dynamic, and dedicated entrepreneur who brings enthusiasm and energy to her ventures. Her orientation towards business is evident in her ability to navigate the challenges of entrepreneurship, driven by a combination of passion, expertise, and complementary skills.

In addition to InSecSys, Lily founded other startups such as OrganicSattva, TripinBudget, and Alpanel Pvt Ltd. She has a diverse educational background,  she is an scholar from Jawahar Navodaya Vidyalaya and graduated from Manipal Institute of Management, Manipal. She also attended Management Development programs at prestigious institutions such as the Indian Institute of Management, Lucknow, focusing on Agriculture and Business Management, and the Indian Institute of Management Bangalore for  Goldman Sachs Entrepreneur Program.

Furthermore, Lily has pursued professional certifications to enhance her expertise, including FSSAI FOSTAC Level 2 in Food Technology and Processing 
                    </p>
                </div>
                </div>
                <div class="aboutus-card">
                <div class="aboutus-image">
                <div className="aboutusimagecol1">
                  <img src={image1} alt="" className='aboutusimage3'/>
                </div>
                  <div className="aboutusimagecol2">
                    <h1>Bibhuti Kumar Jha</h1>
                    <h5>Director of InSecSys</h5>
                  </div>
                </div>
                <div class="aboutus-content">
                    

                    <p class="aboutus-desc">
                    
                    Bibhuti Kumar Jha, is a public administrator and leader, is not only an excellent executor but also a dedicated law enforcer. Beyond the realms of governance, their spiritual pursuits have led them to delve into the profound knowledge of mythological epics. A certified yoga instructor from the prestigious Yoga Vedant Forest Academy, Rishikesh, He is a disciple of Swami Shivananda and spreads his wisdom to the world.
He has been deeply engaged in social work, emphasizing community welfare and societal development. In his second inning,he has has been contributing towards strengthening & reinforcing physical security in organisations aligned with  diminishing boundaries in this digital era complimenting CyberSecurity.
                    </p>
                </div>
                </div>
                <div class="aboutus-card">
                <div class="aboutus-image">
                <div className="aboutusimagecol1">
                  <img src={image1} alt="" className='aboutusimage3'/>
                </div>
                  <div className="aboutusimagecol2">
                    <h1>Sanjeev Kumar</h1>
                    <h5>Head Information Security</h5>
                  </div>
                </div>
                <div class="aboutus-content">
                    

                    <p class="aboutus-desc">
                    
                    Sanjeev Kumar currently holds the position of Head of Information Security, leveraging extensive knowledge in the security domain. He is an ISO 27001 :Lead Auditor and Data Privacy Lead Assessor. He boasts a commendable list of certifications, including the Certified Cloud Security Professional (CCSP), QRadar XDR – SIEM , and the Lean Six Sigma Yellow Belt being the notable few.

His professional trajectory commenced as a Software Support Engineer and evolved around many other industry roles before he joined Indira Group of institutions, pune to transform the IT Landscape, managing Juno ERP, Information Security, IT Strategy, modernising Linux, Microsoft Servers, and more.

Currently, as the Head of Information Security at InSecSys he is responsible for all the service deliveries for customers and ensure customer delight and ample opportunities for gorwth to the associates. He is based in Pune, Maharashtra, expert in solutions such as Logsign SOAR, LOGSIGN SIEM , Crowdstrike Falcon, and implementation of compliance certifications with credential as CISA, Certified Lead Auditor, SOC 2, ISO 27001, and Information Security.
                    </p>
                </div>
                </div>
               
    </div>
  </div>

  <div className="aboutusthirdrow">
    <div className="aboutusthirdrowcol1">
      <h1>Our Advisor</h1>
    </div>
    <div className="aboutusthirdrowcol2">

    <div class="aboutus-card">
                <div class="aboutus-image">
                <div className="aboutusimagecol1">
                  <img src={image1} alt="" className='aboutusimage3'/>
                </div>
                  <div className="aboutusimagecol2">
                    <h1>S Kumar</h1>
                    <h5>Advisory Board Member</h5>
                  </div>
                </div>
                <div class="aboutus-content">
                    

                    <p class="aboutus-desc">
                    
                    Shitanshu Kumar with  19+ years of experience in information security, cloud security, governance, risk management, and technical security services. He has been a notable contributor and Cybersecurity influecer in the Indian Cybersecurity Industry for over a decade.  Hold multiple credentials, including CISA, CISM, CRISC, CEH, ISO 22301 LI, SAFe Architect, and PMI-PMP, that demonstrates his expertise and commitment to the cybersecurity field. 

He  has a proven record of success in managing complex portfolios of IT investments across organizational and geographical boundaries, driving technology strategy and delivering transformation programs aligned to business strategy. Very passionate and action-oriented, with an entrepreneurial mindset and a lifelong learner.
As a digital transformation leader, he excel in managing high-growth, volatile, and ever-demanding business operations. He collaborates with CXOs on business strategy, analysis, planning, and execution, delivering exceptional results with relentless execution. 
                    </p>
                </div>
                </div>
                <div class="aboutus-card">
                <div class="aboutus-image">
                <div className="aboutusimagecol1">
                  <img src={image1} alt="" className='aboutusimage3'/>
                </div>
                  <div className="aboutusimagecol2">
                    <h1>S Gupta</h1>
                    <h5>Advisory Board Member</h5>
                  </div>
                </div>
                <div class="aboutus-content">
                    

                    <p class="aboutus-desc">
                    
                    S Gupta, a seasoned professional, holds a CA, MBA in Finance, and MCom, BCom(Hons) degrees, and is an alumnus of IIM Lucknow. With a wealth of global experience spanning diverse sectors, industries, and geographies, including India, the United States, and the Middle East, he has successfully led APAC and India regional teams.

His proven expertise encompasses a wide range of areas, including Strategy, Controllership, Fund Raising, Finance Modeling, Business Partnering & Development, Project Benchmarking, Investor Relations, Financial Planning & Analysis, International, Direct & Indirect Taxation, Tax Litigations, Transfer Pricing, Performance Reporting, Process Re-Engineering, Treasury Operations & Banking, Project and Change Management, Audits, and ERP implementation. Saurabh Gupta's extensive experience reflects his versatility and ability to navigate complex financial landscapes with proficiency.
                    </p>
                </div>
                </div>
                <div class="aboutus-card">
                <div class="aboutus-image">
                <div className="aboutusimagecol1">
                  <img src={image1} alt="" className='aboutusimage3'/>
                </div>
                  <div className="aboutusimagecol2">
                    <h1>S Prasad</h1>
                    <h5>Advisory Board Member</h5>
                  </div>
                </div>
                <div class="aboutus-content">
                    

                    <p class="aboutus-desc">
                    
                    S Prasad brings over 17 years of experience to the table, demonstrating a keen ability to establish businesses from the ground up. His knack for understanding and adapting strategies in response to the evolving dynamics of the business landscape is a testament to his adaptability.
A proven track record of leading, building, managing, and growing independent business units.
Strong teamwork skills coupled with the ability to handle diverse responsibilities, with each assignment involving the management and development of sales and partner ecosystems.

                    </p>
                </div>
                </div>
               
    </div>
  </div>
      </div>
    
  )
}