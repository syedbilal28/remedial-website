import ContactForm from "@/modules/contact-form";
import { ContactInfo } from "@/modules/contact-info";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col flex-1">
              <div className="@container">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 py-10">
                  <div
                    className="w-full max-w-7xl bg-center bg-no-repeat aspect-video bg-cover rounded-xl justify-start"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/68ba9469-40ab-4877-84b9-eb0896e9c897.png")',
                    }}
                  ></div>
                  <div className="w-full-max-w-xl px-4">
                    <ContactForm/>
                  </div>
                  
                </div>
              </div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
