import React from "react";
import { Service } from "./service";

export const Services = () => {
  const servicesData = [
    {
      title: "Concrete Repairs",
      content:
        " Restoration and maintenance of concrete surfaces. This includes repairing cracks, spalling, and other forms of concrete damage to ensure durability and safety.",
      image: "/concrete-repairs.jfif",
    },
    {
      title: "Structural Repairs",
      content:
        "Solutions for repairing and reinforcing building structures, including beams, columns, and load-bearing walls. Address issues like cracks, settlement, and subsidence.",
      image: "/structural-repairs.png",
    },
    {
      title: "Protective Coatings",
      content:
        "Protective Coatings are a type of coating that is applied to a surface to protect it from damage, wear, and tear, and other environmental factors.",
      image: "/protective-coating.jpg",
    },
    {
      title: "Water Proofing",
      content:
        "Comprehensive waterproofing solutions to prevent water ingress. This includes basement waterproofing, roof repairs, and surface treatments to protect buildings from moisture damage.",
      image: "/waterproofing.jpg",
    },
    {
      title: "Foundation Stabilisation",
      content:
        "Methods to stabilize and strengthen building foundations. Services include underpinning, soil stabilization, and foundation repair to address problems like shifting or settling.",
      image: "/foundation-stabilisation.jpg",
    },
    {
      title: "Damp Proofing",
      content:
        "Installation of damp-proof courses and membranes to prevent and address rising damp and penetrating damp issues in buildings.",
      image: "/damp-proofing.jpg",
    },
    {
      title: "Crack Injection",
      content:
        "Techniques for repairing cracks in walls and foundations using epoxy or polyurethane injections to restore structural integrity.",
      image: "/crack-injection.jpg",
    },
    {
      title: "Building Inspection",
      content:
        "Thorough inspections to identify underlying issues and recommend appropriate remedial actions. This includes structural assessments and moisture investigations.",
      image: "/building-inspection.png",
    },
    {
      title: "Custom Remedial Solutions",
      content:
        "Tailored solutions for unique or complex remedial problems, ensuring that every issue is addressed with the most effective strategy.",
      image: "/custom-remedial-solution.jpg",
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