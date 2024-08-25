import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../CSS/CaseStudies.css'; // Custom styles

const caseStudiesData = [
    {
        title: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        linkText: "Learn more",
        linkUrl: "#",
    },
    {
        title: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        linkText: "Learn more",
        linkUrl: "#",
    },
    {
        title: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        linkText: "Learn more",
        linkUrl: "#",
    },
];

const CaseStudies = () => {
    return (
        <section className="case-studies">
            <div className="case-studies-header">
                <h2 className="case-studies-title">Case Studies</h2>
                <p className="case-studies-subtitle">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div>
            <div className="case-studies-content">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { // for tablets and above
                            slidesPerView: 3,
                        },
                    }}
                >
                    {caseStudiesData.map((study, index) => (
                        <SwiperSlide key={index}>
                            <div className="case-study-card">
                                <p>{study.title}</p>
                                <a href={study.linkUrl} className="learn-more" style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                                    {study.linkText} <span className="arrow">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                                            <path d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z" fill="#B9FF66" />
                                        </svg>

                                    </span>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CaseStudies;
