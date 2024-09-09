import React from "react";

export const Hero = () => (
  <div className="@container">
    <div className="@[480px]:p-4">
      <div
        className="flex min-h-[94vh] min-w-[100vw] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 hero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/hero.jpg")',
        }}
      >
        <div className="flex flex-col gap-2 text-center w-2/6 backdrop-blur-sm">
          <h1 className="text-white text-6xl font-black font-sans leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
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
        {/* <div className="flex-wrap gap-3 flex justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1366ec] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Learn more about us</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e7ecf3] text-[#0d131b] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Our services</span>
          </button>
        </div> */}
      </div>
    </div>
  </div>
);
