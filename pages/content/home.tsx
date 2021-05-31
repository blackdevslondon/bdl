import { Navbar } from "../../components/navbar";
import AboutSection from "../../components/aboutSection";
import { OurMissionSection } from "../../components/ourMissionSection";
import { OurTeamSection } from "../../components/ourTeamSection";
import { OurVisionSection } from "../../components/ourVisionSection";
import { ContactUsSection } from "../../components/contactUsSection";
import { QuotableSection } from "../../components/quotableSection";
import { BigFooterSection } from "../../components/bigFooterSection";
import { SmallFooterSection } from "../../components/smallFooterSection";

const Home = () => (
  <div>
    <Navbar />
    <div className="sm:container sm:mx-auto md:container md:mx-auto">
      <AboutSection />
      <OurMissionSection />
      <OurTeamSection />
      <OurVisionSection />
      <ContactUsSection />
      <QuotableSection />
      <BigFooterSection />
      <SmallFooterSection />
    </div>
  </div>
);
export default Home;
