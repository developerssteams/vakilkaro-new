import React from "react";
import "../Navbar_Section.css";

function Navbar_Section() {
    return (
        <>
            <section className="category-section">
                <div className="category-box">
                    <ul className="category-list">
                        <li>Registrations</li>
                        <li>NGO</li>
                        <li>License/Certificate</li>
                        <li>IP & Trademark</li>
                        <li>Income Tax Filing</li>
                        <li>GST Filing</li>
                        <li>ROC & Compliance</li>
                        <li>Funding/IPO</li>
                        <li>Legal Drafting & Notices</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Navbar_Section;