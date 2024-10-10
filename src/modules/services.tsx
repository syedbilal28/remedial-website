import React from "react";
import { Service } from "./service";

export const Services = () => {
  const servicesData = [
    {
      title: "Structural Repairs",
      content:
        `Our structural repair services address issues such as cracks, settlement, and structural
        weaknesses in buildings. We use advanced techniques to restore the integrity and safety of
        your property, including reinforcement of beams, columns, and walls. Our team ensures
        that all repairs meet the highest industry standards, providing long-lasting solutions for
        both residential and commercial structures.`,
      image: "/new/1.png",
    },
    {
      title: "Waterproofing",
      content:
        `We offer comprehensive waterproofing solutions to protect your property from water
        damage. Our services include basement waterproofing, balcony and roof membrane
        installations, and crack injections. By preventing water infiltration, we help safeguard the
        structural integrity of your building, reducing the risk of mold, mildew, and further
        deterioration.`,
      image: "/new/waterproofing.jpg",
    },
    {
      title: "Foundation Stabilization",
      content:
        `Foundation issues can lead to severe structural damage if left unaddressed. Our foundation
        stabilization services involve methods such as underpinning, slab jacking, and pier
        installation to correct foundation settlement and movement. We conduct thorough
        assessments to determine the most effective approach, ensuring a stable and secure
        foundation for your building.`,
      image: "/new/46.png",
    },
    {
      title: "Concrete Repairs and Restoration",
      content:
        `Our concrete repair and restoration services address a range of issues, including spalling,
        cracking, and surface defects. We use high-quality materials and proven techniques to
        restore concrete surfaces, ensuring durability and enhancing the appearance of your
        structures. Whether it’s a parking deck, walkway, or structural element, we provide
        solutions that meet your specific needs.`,
      image: "/new/40.png",
    },
    {
      title: "Crack Injection",
      content:
        `Cracks in concrete and masonry can compromise the strength and waterproofing of your
        building. We utilize epoxy and polyurethane injection methods to fill and seal cracks,
        preventing water infiltration and restoring the structural integrity of the affected areas. Our
        crack injection services are suitable for various applications, including walls, floors, and
        ceilings.`,
      image: "/new/crack-injection.png",
    },
    {
      title: "Facade and Cladding Repairs",
      content:
        `Over time, building façades and cladding can experience damage due to weathering, water
        intrusion, and structural movement. Our façade and cladding repair services include the
        replacement of damaged elements, re-sealing joints, and applying protective coatings. 
        We work to restore the appearance and functionality of your building's exterior, enhancing
        both aesthetics and performance.`,
      image: "/new/facade repair.jpg",
    },
    {
      title: "Corrosion Control",
      content:
        `Corrosion can severely affect the durability and safety of reinforced concrete structures.
        Our corrosion control services involve the application of protective coatings, cathodic
        protection systems, and other methods to prevent and mitigate corrosion. We tailor our
        approach to the specific needs of your structure, ensuring long-term protection against
        environmental elements.`,
      image: "/new/corrosion-control.webp",
    },
    {
      title: "Defect Process",
      content:
        `Our defect process is a systematic approach to identify, assess, and rectify construction
        defects efficiently and effectively. We ensure that all defects are addressed promptly to
        maintain the structural integrity and aesthetic appeal of your property.`,
      image: "/new/25.png",
      indented: [
        {
          title: "Identification of Defects",
          content: `The first step in our defect process is identifying potential defects in the structure. This is
          done through thorough inspections conducted by our experienced team. We use advanced
          tools and techniques, such as thermal imaging and moisture meters, to detect issues like
          water leaks, cracks, and structural anomalies that may not be visible to the naked eye.`
        },
        {
          title: "Assessment and Analysis",
          content: `Once a defect is identified, we perform a detailed assessment to determine its severity,
          cause, and impact on the building. This involves structural analysis, material testing, and
          reviewing construction documentation to understand the root cause of the defect. We then
          provide a comprehensive report outlining the findings and the potential consequences if the
          defect is not addressed.`
        },
        {
          title: "Development of Repair Strategy",
          content: `Based on the assessment, we develop a tailored repair strategy to address the defect. Our
          approach is designed to provide a durable and cost-effective solution, ensuring that the
          repair not only rectifies the current defect but also prevents future occurrences. The repair
          strategy includes the selection of appropriate materials, techniques, and procedures to
          restore the affected area to its original condition.`
        },
        {
          title: "Execution of Repairs",
          content: `Our skilled team executes the repairs with precision and care, following the repair strategy
          developed during the assessment phase. We use high-quality materials and industry-best
          practices to ensure that the repairs meet all relevant standards and regulations. During this
          stage, we maintain clear communication with the client to keep them informed of the
          progress and any additional findings.`
        },
        {
          title: "Quality Control and Verification",
          content: `After the repairs are completed, we conduct a thorough quality control inspection to verify
          that the defect has been effectively addressed. This includes testing and monitoring to
          ensure the repaired area meets structural and aesthetic standards. We provide a detailed
          report of the completed repairs, including photographic evidence and any necessary
          documentation for future reference.`
        },
        {
          title: "Follow-Up and Maintenance",
          content: `To ensure the longevity of the repairs, we offer follow-up inspections and maintenance
          services. Our team schedules periodic check-ups to monitor the repaired areas, addressing
          any new issues that may arise. This proactive approach helps maintain the structural
          integrity and appearance of your property over time.`
        }
      ]
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-10 @container px-56 items-center services">
    <h1 className="text-[#182A54] leelawadee tracking-light text-5xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
      What We Do
    </h1>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5 w-full">
      {servicesData.map((service) => (
        <Service key={service.title} {...service} />
      ))}
    </div>
  </div>
  )
}