import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import ContactForm from './Component/ContactForm';
import Services from './Component/Services';

import DPOservice from './Services/PrivacyComplience/DPOservice';
import PrivacyProgramDevelopement from './Services/PrivacyComplience/PrivacyProgramDevelopement';
import StaffAugumentation from './Services/PrivacyComplience/StaffAugumentation';
import TextAnim from './Component/TextAnim';



import PrivacyRiskAssessment from './Services/PrivacyAssessments/PrivacyRiskAssessment';
import ProductAssessment from './Services/PrivacyAssessments/ProductAssessment';
import RegulatoryAssessment from './Services/PrivacyAssessments/RegulatoryAssessment';
import Header from './Component/Header';


import UnderWork from './Component/UnderWork';



import CyberSecurityMaturityAssessment from './Services/CyberSecAssessments/CyberSecurityMaturityAssessment';
import ThirdPartyRiskAssessment from './Services/CyberSecAssessments/ThirdPartyRiskAssessment';



import CISO from './Services/CyberSecurityServices/CISO';
import CyberStrategyAndGoverenace from './Services/CyberSecurityServices/CyberStrategyAndGoverenace';
import InformationRiskManagement from './Services/CyberSecurityServices/InformationRiskManagement';
import VAPT from './Services/CyberSecurityServices/VAPT';



import CriticalSecControl from './Services/SecurityAndPrivacyStandards/CriticalSecControl';
import ISO27001 from './Services/SecurityAndPrivacyStandards/ISO27001';
import ISO27701 from './Services/SecurityAndPrivacyStandards/ISO27701';
import ISO22301 from './Services/SecurityAndPrivacyStandards/ISO22301';
import ISO27017 from './Services/SecurityAndPrivacyStandards/ISO27017';



import GDPR from './Services/PrivacyRegulations/GDPR';
import IndianDPDP from './Services/PrivacyRegulations/IndianDPDP';
import PhilippinesDPA from './Services/PrivacyRegulations/PhilippinesDPA';
import SaudiArabiaDPA from './Services/PrivacyRegulations/SaudiArabiaDPA';
import UAEDPA from './Services/PrivacyRegulations/UAEDPA';
import Hippa from './Services/PrivacyRegulations/Hippa';


import LandingPage from './Component/Landingpage';
import Navbar from './Component/Navbar';
import MoreInfo from './Component/Moreinfo';

import ContactUssecond from './Component/ContactUs';
import Webinars from './Component/Webinars';

import AboutUs from './AboutUs/WhyPrivacyPro';

function App() {
  return (
    <Router>
      {/* <Header /> */}
    <Navbar/>
 
        <Routes>
          <Route path="/index" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/whyprivacypro" element={<AboutUs />} />

          <Route path="/underwork" element={<UnderWork />} />
          {/* <Route path="/contactus" element={<ContactForm />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/anim" element={<MoreInfo />} />
          <Route path="/contactus" element={<ContactUssecond />} />
          <Route path="/webinars" element={<Webinars />} />

          <Route path="/services/dpo" element={<DPOservice />} />
          <Route path="/services/privacyprogram" element={<PrivacyProgramDevelopement />} />
          <Route path="/services/staffaugumentation" element={<StaffAugumentation />} />

          <Route path="/services/privacyriskassessment" element={<PrivacyRiskAssessment />} />
          <Route path="/services/productassessment" element={<ProductAssessment />} />
          <Route path="/services/regulatoryassessment" element={<RegulatoryAssessment />} />

          <Route path="/services/csma" element={<CyberSecurityMaturityAssessment />} />
          <Route path="/services/tprm" element={<ThirdPartyRiskAssessment />} />


          <Route path="/services/ciso" element={<CISO />} />
          <Route path="/services/csag" element={<CyberStrategyAndGoverenace />} />
          <Route path="/services/inforisk" element={<InformationRiskManagement />} />
          <Route path="/services/vapt" element={<VAPT />} />
          


         
          <Route path="/services/iso22301" element={<ISO22301 />} />
          <Route path="/services/cis" element={<CriticalSecControl />} />
          <Route path="/services/iso27001" element={<ISO27001 />} />
          <Route path="/services/iso27017" element={<ISO27017 />} /> 
          <Route path='/services/iso27701' element={<ISO27701/>}/>


          <Route path="/services/gdpr" element={<GDPR />} /> 
          <Route path='/services/dpdp' element={<IndianDPDP/>}/>
          <Route path='/services/philippines' element={<PhilippinesDPA/>}/>
          <Route path='/services/saudidpa' element={<SaudiArabiaDPA/>}/>
          <Route path='/services/uaedpa' element={<UAEDPA/>}/>
          <Route path='/services/hipaa' element={<Hippa/>}/>
        </Routes>
   
      
      <Footer />
    </Router>
  );
}

export default App;
