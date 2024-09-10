import React from "react";
import { Service } from "./service";

export const Services = () => {
  const servicesData = [
    {
      title: "Concrete Repairs",
      content:
        " Restoration and maintenance of concrete surfaces. This includes repairing cracks, spalling, and other forms of concrete damage to ensure durability and safety.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },
    {
      title: "Structural Repairs",
      content:
        "Solutions for repairing and reinforcing building structures, including beams, columns, and load-bearing walls. Address issues like cracks, settlement, and subsidence.",
      image: "https://cdn.usegalileo.ai/stability/9da9f811-28f2-4880-bf26-0c3bf6238456.png",
    },
    {
      title: "Protective Coatings",
      content:
        "Protective Coatings are a type of coating that is applied to a surface to protect it from damage, wear, and tear, and other environmental factors.",
      image: "https://cdn.usegalileo.ai/stability/82256744-82d2-46ab-9e15-420297ff99fc.png",
    },
    {
      title: "Water Proofing",
      content:
        "Comprehensive waterproofing solutions to prevent water ingress. This includes basement waterproofing, roof repairs, and surface treatments to protect buildings from moisture damage.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },
    {
      title: "Foundation Stabilisation",
      content:
        "Methods to stabilize and strengthen building foundations. Services include underpinning, soil stabilization, and foundation repair to address problems like shifting or settling.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },
    {
      title: "Damp Proofing",
      content:
        "Installation of damp-proof courses and membranes to prevent and address rising damp and penetrating damp issues in buildings.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },
    {
      title: "Crack Injection",
      content:
        "Techniques for repairing cracks in walls and foundations using epoxy or polyurethane injections to restore structural integrity.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },
    {
      title: "Building Inspection",
      content:
        "Thorough inspections to identify underlying issues and recommend appropriate remedial actions. This includes structural assessments and moisture investigations.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },
    {
      title: "Custom Remedial Solutions",
      content:
        "Tailored solutions for unique or complex remedial problems, ensuring that every issue is addressed with the most effective strategy.",
      image: "https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png",
    },

  ];

  return (
    <div className="flex flex-col gap-10 py-10 @container px-40 items-center">
    <h1 className="text-[#0d131b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
      What we do
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {servicesData.map((service) => (
        <Service key={service.title} {...service} />
      ))}
    </div>
  </div>
  )
}