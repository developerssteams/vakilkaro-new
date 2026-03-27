import React from "react";

import TawkTo from "../components/TawkTo";

import Story from "../components/Story";

import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Faq from "../components/Faq";
import Navbar_Section from "../components/Navbar_Section";
import Query_Card from "../components/Query_Card";
import Trademark_Registration from "../components/Trademark_Registration";
import StartupDocument from "../components/StartupDocument";
import VerifiedServicescontent from "../components/VerifiedServicescontent";
import LeadershipSlider from "../components/LeadershipSlider";
function Verified() {
    return (
        <>

            <Navbar_Section />
            <Query_Card />
            <Trademark_Registration />
            <StartupDocument />
            <VerifiedServicescontent />
            <LeadershipSlider />

            {/* <Story /> */}

            <Testimonials />
            <ContactSection />
            <Faq />

            <TawkTo />


        </>
    );
}
export default Verified;