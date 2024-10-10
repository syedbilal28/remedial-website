'use client';
import { useRouter } from "next/navigation";
import React from "react";

export const GetStarted = () => {
  const router = useRouter();

  return (
    <div className="@container px-56 get-started">
      <div className="flex flex-col items-center justify-end gap-6 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#182A54] tracking-light text-5xl leelawadee font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Ready to get started?
          </h1>
          <p className="text-[#0d131b] text-base font-normal leading-normal max-w-[720px]">
            Let&lsquo;s talk about your project.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1366ec] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
              <span
                className="truncate"
                onClick={() => router.push("/contact")}
              >
                Contact us
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
