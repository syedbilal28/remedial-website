import React from "react";

export interface WhyChooseUsItem {
  title: string;
  content: string;
}

export const WhyChooseUsItem: React.FC<WhyChooseUsItem> = ({ title, content }) => (
  <div className="flex flex-1 gap-3 rounded-lg border border-[#cfd8e7] bg-[#f8f9fc] p-4 flex-col justify-center min-w-[10rem]">
    <div className="flex flex-col gap-1">
      <h2 className="text-[#0d131b] text-base font-bold leading-tight">{title}</h2>
      <p className="text-[#4c6a9a] text-sm font-normal leading-normal">{content}</p>
    </div>
  </div>
);