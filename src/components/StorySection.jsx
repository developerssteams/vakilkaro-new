import React from "react";
import "../App.css";
import storyVideo from "../assets/video/june-ai.mp4"; // apni image ka path yahan lagao


const StorySection = () => {
    return (
        <section className="story-wrapper">
            <div className="story-container">
                {/* Left Content */}
                <div className="story-left">
                    <h2 className="story-title">
                        Our <span>Story!</span>
                    </h2>

                    <p className="story-desc">
                        We are on a mission to make Entrepreneurship easier and affordable
                        to millions. IndiaFilings provides a simple and intuitive platform
                        for setting up a business and managing compliance. We started our
                        journey in 2014 and bootstrapped the business till 2022, serving
                        over <b>1 lakh</b> businesses. In 2022, we raised funding from
                        institutional investors to further our mission.
                    </p>

                    <button className="buttonheader">
                        Know more →
                    </button>
                </div>

                {/* Right Image */}
                {/* <div className="story-right">
                    <video src={storyImg} alt="story" className="story-img" />
                </div> */}
                <div className="story-right">
                    <video
                        className="story-img"
                        src={storyVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                    />
                </div>

            </div>
        </section>
    );
};

export default StorySection;
