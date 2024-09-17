'use client';
import React, { useState } from 'react';
import TestimonialCard from './testimonial';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  testimony: string;
}

const testimonialsData: Testimonial[] = [
  {
    image: '"https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg"',
    name: 'Branson Cook',
    role: 'Actor',
    testimony: 'Radio telescope something incredible is waiting to be known...'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg',
    name: 'Jane Doe',
    role: 'Entrepreneur',
    testimony: 'The vastness of space can only be comprehended by the paroxysm of thought...'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg',
    name: 'John Smith',
    role: 'Scientist',
    testimony: 'Exploring the boundaries of human knowledge in the field of astrophysics...'
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='text-center py-10' id="testimonials">
        <h2 className="text-[#0d131b] text-[32px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Testimonials
        </h2>
        <div className="testimonial-carousel px-56">
      <button onClick={handlePrev} className="prev-btn">❮</button>
      <TestimonialCard {...testimonialsData[currentIndex]} />
      <button onClick={handleNext} className="next-btn">❯</button>
    </div>
    </div>
    
  );
};

export default TestimonialCarousel;
