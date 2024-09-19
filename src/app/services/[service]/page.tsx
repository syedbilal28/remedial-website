import { Header } from "@/modules/header";
import Head from "next/head";


export default function ServicePage() {

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">
      <Head>
        <title>South Cost Remedial | Service</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>
      <div className="layout-container flex h-full grow flex-col font-sans">
        <Header />
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1">
            <div className="px-56 py-10" id="about-us">
              <h1 className="text-[#0d131b] text-4xl font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
                Defect Process
              </h1>
              <div className="flex flex-col text-justify gap-8 text-md">
                <div>
                  <p className="text-lg">
                    Our defect process is a systematic approach to identify,
                    assess, and rectify construction defects efficiently and
                    effectively. We ensure that all defects are addressed
                    promptly to maintain the structural integrity and aesthetic
                    appeal of your property. Here is a detailed breakdown of our
                    defect process:
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    Identification of Defects
                  </p>
                  <p className="py-5 text-lg">
                    The first step in our defect process is identifying
                    potential defects in the structure. This is done through
                    thorough inspections conducted by our experienced team. We
                    use advanced tools and techniques, such as thermal imaging
                    and moisture meters, to detect issues like water leaks,
                    cracks, and structural anomalies that may not be visible to
                    the naked eye.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Assessment and Analysis
                  </h3>
                  <p className="py-5 text-lg">
                    Once a defect is identified, we perform a detailed
                    assessment to determine its severity, cause, and impact on
                    the building. This involves structural analysis, material
                    testing, and reviewing construction documentation to
                    understand the root cause of the defect. We then provide a
                    comprehensive report outlining the findings and the
                    potential consequences if the defect is not addressed.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Development of Repair Strategy
                  </h3>
                  <p className="py-5 text-lg">
                    Based on the assessment, we develop a tailored repair
                    strategy to address the defect. Our approach is designed to
                    provide a durable and cost-effective solution, ensuring that
                    the repair not only rectifies the current defect but also
                    prevents future occurrences. The repair strategy includes
                    the selection of appropriate materials, techniques, and
                    procedures to restore the affected area to its original
                    condition.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Execution of Repairs
                  </h3>
                  <p className="py-5 text-lg">
                    Our skilled team executes the repairs with precision and
                    care, following the repair strategy developed during the
                    assessment phase. We use high-quality materials and
                    industry-best practices to ensure that the repairs meet all
                    relevant standards and regulations. During this stage, we
                    maintain clear communication with the client to keep them
                    informed of the progress and any additional findings.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Quality Control and Verification
                  </h3>
                  <p className="py-5 text-lg">
                    After the repairs are completed, we conduct a thorough
                    quality control inspection to verify that the defect has
                    been effectively addressed. This includes testing and
                    monitoring to ensure the repaired area meets structural and
                    aesthetic standards. We provide a detailed report of the
                    completed repairs, including photographic evidence and any
                    necessary documentation for future reference.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Follow-Up and Maintenance
                  </h3>
                  <p className="py-5 text-lg">
                    To ensure the longevity of the repairs, we offer follow-up
                    inspections and maintenance services. Our team schedules
                    periodic check-ups to monitor the repaired areas, addressing
                    any new issues that may arise. This proactive approach helps
                    maintain the structural integrity and appearance of your
                    property over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
