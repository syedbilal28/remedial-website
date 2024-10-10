import React from "react";

export const Hero = () => (
  <div className="@container">
    <div className="@[480px]:p-4">
      <div
        className="flex min-w-[100vw] sm:p-0 flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 hero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/new/4.png")',
        }}
      >
        <div className="flex flex-col gap-2 text-center w-2/6 backdrop-blur-sm hero-content">
          <h1 className="text-white text-6xl font-black leelawadee leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            South Coast Remedial
          </h1>
          <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            We are a construction remedial business located in the Illawarra,
            South Coast, and Southern Highlands. We specialise in concrete
            cancer repair, structural repairs, protective coatings,
            waterproofing, and joint sealing. We provide our clients with a
            professional and reliable service, using the best materials and
            systems available.
          </h2>
        </div>
      </div>
    </div>
  </div>
);
