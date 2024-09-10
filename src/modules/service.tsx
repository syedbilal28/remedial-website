import React from "react";

interface ServiceProps {
  title: string;
  content: string;
  image: string;
}

export const Service: React.FC<ServiceProps> = ({ title, content, image }) => (
  <div className="flex flex-col gap-3 pb-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    ></div>
    <div>
      <p className="text-[#0d131b] text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-[#4c6a9a] text-sm font-normal leading-normal">
        {content}
      </p>
    </div>
  </div>
);
