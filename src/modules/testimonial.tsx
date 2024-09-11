import React from 'react';

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  testimony: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, name, role, testimony }) => {
  return (
    <div className="max-w-md rounded-xl overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 rounded-full mx-auto mt-6"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {role}
          </div>
          <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
            {name}
          </h3>
          <p className="mt-2 text-gray-600">{testimony}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
