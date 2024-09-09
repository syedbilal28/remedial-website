import React from "react";

export const Services = () => (
    <div className="flex flex-col gap-10 px-4 py-10 @container">
              <h1 className="text-[#0d131b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                What we do
              </h1>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/stability/88b1f868-f851-499a-bc5d-8ffcd9cc4f2f.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0d131b] text-base font-medium leading-normal">
                      Concrete Cancer Repair
                    </p>
                    <p className="text-[#4c6a9a] text-sm font-normal leading-normal">
                      Concrete Cancer is a term used to describe the corrosion
                      of steel reinforcement within a concrete structure. It is
                      caused by the exposure of the steel to water and oxygen,
                      resulting in the formation of rust.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/stability/9da9f811-28f2-4880-bf26-0c3bf6238456.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0d131b] text-base font-medium leading-normal">
                      Structural Repairs
                    </p>
                    <p className="text-[#4c6a9a] text-sm font-normal leading-normal">
                      Structural Repairs are a type of repair work that is
                      carried out on a building or other structure to address
                      problems such as cracks, settlement, or other issues that
                      affect its stability or integrity.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/stability/82256744-82d2-46ab-9e15-420297ff99fc.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0d131b] text-base font-medium leading-normal">
                      Protective Coatings
                    </p>
                    <p className="text-[#4c6a9a] text-sm font-normal leading-normal">
                      Protective Coatings are a type of coating that is applied
                      to a surface to protect it from damage, wear, and tear,
                      and other environmental factors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
)