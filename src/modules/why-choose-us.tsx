import React from "react";
import { WhyChooseUsItem } from "./WhyChooseUsItem";

export const WhyChooseUs = () => {
  const whyChooseUsData: WhyChooseUsItem[] = [
    {
      title: "Experience",
      content:
        "With over 30 years experience in the construction industry, our team has the knowledge and expertise to deliver high quality results.",
    },
    {
      title: "Quality",
      content: "We use the best materials and systems available to ensure that our work is of the highest standard.",
    },
    {
      title: "Reliability",
      content:
        "We pride ourselves on being reliable and professional, and always delivering our projects on time and within budget.",
    },
    {
      title: "Safety",
      content:
        "We are committed to maintaining the highest standards of safety in all our operations, and ensuring the wellbeing of our team and our clients.",
    },
    {
      title: "Professionalism",
      content:
        "We are dedicated to providing a professional and friendly service, and always strive to exceed our clients' expectations.",
    },
    {
      title: "Customer Service",
      content:
        "We are committed to delivering the highest level of customer service, and always aim to build strong and lasting relationships with our clients.",
    },
  ];

  return (
    <div className="px-56 text-center py-10 gap-10 why-choose-us">
    <h2 className="text-[#182A54] leelawadee text-5xl font-bold leading-tight tracking-[-0.015em] pb-10 pt-5">
      Why Choose Us?
    </h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4 choose-us-content">
      {whyChooseUsData.map((item, index) => (
        <WhyChooseUsItem key={index} {...item} />
      ))}
    </div>
  </div>
  )
}