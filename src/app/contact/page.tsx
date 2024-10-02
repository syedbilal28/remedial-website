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
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col flex-1">
              <div className="@container">
                <div className="flex flex-row justify-center items-center gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/68ba9469-40ab-4877-84b9-eb0896e9c897.png")',
                    }}
                  ></div>
                  <ContactForm/>
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
