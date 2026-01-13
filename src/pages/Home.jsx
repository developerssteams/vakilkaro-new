import React from "react";
import HeaderSection from "../components/HeaderSection";

import WhyVakilkaro from "../components/WhyVakilkaro";
import Timeline from "../components/Timeline";
// import ClientsSection from "../components/ClientsSection";
// import Testimonials from "../components/Testimonials";
import PopularSearches from "../components/PopularSearches";
import TawkTo from "../components/TawkTo";
import StorySection from "../components/StorySection";
// import ServiceSlider from "../components/ServiceSlider";
import VerifiedServices from "../components/VerifiedServices";
import LegalRepresentation from "../components/LegalRepresentation";
import Partner from "../components/Partner";
import Journey from "../components/Journey";
import Story from "../components/Story";
import CallToAction from "../components/CallToAction";
import ExpertSlider from "../components/LeadershipSlider";
import Advocates from "../components/Advocates";
import VakilKaroWay from "../components/VakilKaroWay";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Faq from "../components/Faq";
function Home() {
    return (
        <>

            <VerifiedServices />
            <LegalRepresentation />
            <Partner />
            <Journey />
            <Story />
            {/* <StorySection /> */}
            {/* <ServiceSlider /> */}
            <WhyVakilkaro />
            <CallToAction />
            <ExpertSlider />
            <Advocates />
            <VakilKaroWay />
            <Testimonials />
            <ContactSection />
            <Faq />
            {/* <Timeline /> */}
            {/* <ClientsSection /> */}
            {/* <PopularSearches /> */}
            {/* <BlogSection /> */}
            <TawkTo />


        </>
    );
}
export default Home;