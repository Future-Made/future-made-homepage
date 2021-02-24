import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";

// Theories for Change
import ExpressionOfDemand from "../../content/theories_for_change/ExpressionOfDemand.json";
import DemandOnAir from "../../content/theories_for_change/DemandOnAir.json";
import DiscoveryOfCollectiveDemand from "../../content/theories_for_change/DiscoveryOfCollectiveDemand.json"
import DonationAsPrecondition from "../../content/theories_for_change/DonationAsPrecondition.json"

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />

      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
              type="left"
              title={ExpressionOfDemand.title}
              content={ExpressionOfDemand.text}
              section={ExpressionOfDemand.section}
              icon="graphs.svg"
              id="expression_of_demand"
            />
{/* 
          <ContentBlock
        type="left"
        title={DemandOnAir.title}
        content={DemandOnAir.text}
        icon="waving.svg"
        id="demand-on-air"
      /> */}

      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="product"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />

      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        content2={MissionContent.text2}
        icon="product-launch.svg"
        id="mission"
      /> */}

      
<ContentBlock
        type="left"
        title={DemandOnAir.title}
        content={DemandOnAir.text}
        icon="impact-oriented-demand_annotated.svg"
        id="demand_on_air"
      />


<ContentBlock
        type="left"
        title={DiscoveryOfCollectiveDemand.title}
        content={DiscoveryOfCollectiveDemand.text}
        icon="discovery_of_collective_demand.svg"
        id="discovery_of_collective_demand"
      />


{/* TODO: add "reflection around values" */}

<ContentBlock
              type="left"
              title={DonationAsPrecondition.title}
              content={DonationAsPrecondition.text}
              section={DonationAsPrecondition.section}
              icon="reflection_around_values.svg"
              id="donation_as_precondition"
            />


      {/* <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
