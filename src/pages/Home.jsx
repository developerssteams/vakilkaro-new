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
function Home() {
    return (
        <>

             <VerifiedServices />
             <LegalRepresentation />
             <Partner />
             <Journey />
            {/* <StorySection /> */}
            {/* <ServiceSlider /> */}
            {/* <WhyVakilkaro /> */}
            {/* <Timeline /> */}
            {/* <ClientsSection /> */}
            {/* <Testimonials /> */}
            {/* <PopularSearches /> */} 
            {/* <BlogSection /> */}
            <TawkTo />


        </>
    );
}
export default Home;