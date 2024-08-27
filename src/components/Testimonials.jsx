import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../CSS/Testimonials.css'; 

import { Navigation, Pagination } from 'swiper/modules';

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        title: "Marketing Director at XYZ Corp"
    },
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "Jane Doe",
        title: "CEO of ABC Inc"
    },
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "Michael Brown",
        title: "Marketing Manager at 123 Company"
    },
    // Add more testimonials as needed
];

const TestimonialSlider = () => {
    return (
        <>
            <div className="case-studies-header" style={{marginTop: "80px"}}>
                <h2 className="case-studies-title">Testimonials</h2>
                <p className="case-studies-subtitle">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
            </div>
        <div className="testimonial-section">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="testimonial-swiper"
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 2.5,
                    },
                }}

            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <p>{testimonial.text}</p>
                        </div>
                        <div className="test_head">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    );
};

export default TestimonialSlider;