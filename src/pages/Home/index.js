import { lazy } from "react";
import CookieConsent from "react-cookie-consent";


import IntroContent from "../../content/IntroContent.json";
// import ContactContent from "../../content/ContactContent.json";

import Members from "../Members/index";

// Theories for Change
import ExpressionOfDemand from "../../content/theories_for_change/ExpressionOfDemand.json";
import DiscoveryOfDemand from "../../content/theories_for_change/DiscoveryOfDemand.json"
import DemandOnAir from "../../content/theories_for_change/DemandOnAir.json";
import DonationAsPrecondition from "../../content/theories_for_change/DonationAsPrecondition.json"

// const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <p>
        <u>
        Current development status:
        </u>
      </p>
      <a href="https://vimeo.com/526183104" target="_blank" rel="noreferer"><p>|{">"} (silent) video demo</p></a>
      <a href="https://soundcloud.com/atyilmaz/expression-of-demand-in-action-audio-record" target="_blank" rel="noreferer"><p>|{">"} voice record for it</p></a>
      
      
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="science_bridging_cultures_cover.jpg"
        id="intro"
      />
      
      <ContentBlock
              type="left"
              title={ExpressionOfDemand.title}
              content={ExpressionOfDemand.text}
              section={ExpressionOfDemand.section}
              icon="waving.svg"
              id="expression_of_demand"
            />

            <ContentBlock
            type="left"
            title={DiscoveryOfDemand.title}
            content={DiscoveryOfDemand.text}
            icon="discovery_of_demand.svg"
            id="discovery_of_demand"
          />

      
<ContentBlock
        type="left"
        title={DemandOnAir.title}
        content={DemandOnAir.text}
        icon="impact-oriented-demand_annotated.svg"
        id="demand_on_air"
      />


<ContentBlock
              type="left"
              title={DonationAsPrecondition.title}
              content={DonationAsPrecondition.text}
              section={DonationAsPrecondition.section}
              icon="reflection_around_values.svg"
              id="donation_as_precondition"
            />

<CookieConsent
  location="bottom"
  buttonText="hmm, I see."
  cookieName="cookieForImpact"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  Collaborators of this site use actual cookies to feed their appetites.{" "}
  <span style={{ fontSize: "10px" }}>hoping that clicking such buttons in general, will not contribute to a future reflex or conditioning on clicking to first button appearing on a malicious site to get more space.</span>
</CookieConsent>
      {/* <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}

    <h3>Collaborators of now</h3> 
  
    <br></br>
      <h4> and the future </h4>
    <br></br>
        <strong>we are shuffled</strong>, 
        <br></br>
        each time
         you visit us. <br></br><br></br>
         apart from
         
         <a href="https://youtu.be/EUN1ClT9i9w?t=76s" target="_blank" rel="noreferer">
           <strong> 
             <u> love,</u>
           </strong>
         </a>
         
         
         <br></br>
         <strong>time</strong> is the only <br></br>
        authority
        <br></br> <br></br>
        
        <strong> around here.</strong> <br></br><br></br>
  <Members/>
    </Container>
  );
};

export default Home;
