import React, { useEffect, useRef } from 'react';
import '../LeadershipSlider.css';
import bgCardImage from '../assets/bg-card.png';
import personImage from '../assets/person.png';

const ExpertSlider = () => {
    const sliderRef = useRef(null);
    const animationDuration = 10;

    const experts = [
        {
            id: 1,
            name: "CA Rupal Saini",
            rating: 5.0,
            reviews: 856,
            experience: "10+ Years",
            bgImage: bgCardImage,
            personImage: personImage
        },
        {
            id: 2,
            name: "CA Vikram Singh",
            rating: 4.9,
            reviews: 720,
            experience: "12+ Years",
            bgImage: bgCardImage,
            personImage: personImage
        },
        {
            id: 3,
            name: "CA Priya Sharma",
            rating: 5.0,
            reviews: 932,
            experience: "8+ Years",
            bgImage: bgCardImage,
            personImage: personImage
        },
        {
            id: 4,
            name: "CA Rajat Verma",
            rating: 4.8,
            reviews: 645,
            experience: "15+ Years",
            bgImage: bgCardImage,
            personImage: personImage
        }
    ];

    // Duplicate for seamless looping - EXACTLY like HTML
    const duplicatedExperts = [...experts, ...experts];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // EXACT animation like HTML (18s linear infinite)
        slider.style.animation = 'slide 18s linear infinite';

        // Cleanup
        return () => {
            slider.style.animation = '';
        };
    }, []);

    return (
        <section className="expert-section">
            {/* NO slider-container div - EXACT like HTML */}
            <div className="slider" ref={sliderRef}>
                {duplicatedExperts.map((expert, index) => (
                    <div className="slide" key={`${expert.id}-${index}`}>
                        {/* BACK IMAGE CARD - EXACT like HTML */}
                        <div
                            className="bg-card"
                            style={{
                                background: `url(${expert.bgImage}) center/cover no-repeat`
                            }}
                        ></div>

                        {/* PERSON IMAGE - EXACT like HTML */}
                        <div className="person-img">
                            <img
                                src={expert.personImage}
                                alt={expert.name}
                            />
                        </div>

                        {/* INFO CARD - EXACT like HTML */}
                        <div className="info-card">
                            <div className="rating">
                                ⭐ {expert.rating} <span>({expert.reviews})</span>
                                <div className="arrow">›</div>
                            </div>

                            <h2>{expert.name}</h2>

                            <p><strong>Experience :</strong> {expert.experience}</p>
                            <p><strong>Expertise :</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertSlider;