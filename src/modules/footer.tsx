import Image from "next/image";
import React from "react";

export const Footer = () => (
  <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
    <div className="w-full w-[100vw] mx-auto px-56 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 text-[#0d131b]">
          <div className="w-12 h-12">
            <Image
              src={"/logo.PNG"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-[#182A54] text-4xl leelawadee font-bold leading-tight tracking-[-0.015em]">
            South Coast Remedial
          </h2>
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/#about-us" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Services
            </a>
          </li>
          <li>
            <a href="/sectors" className="hover:underline me-4 md:me-6">
              Sectors
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="https://remedial-website.vercel.app/" className="hover:underline">
          South Coast Remedial™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
);
