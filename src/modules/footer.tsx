import React from "react";

export const Footer = () => (
  <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
    <div className="w-full w-[100vw] mx-auto px-56 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 text-[#0d131b]">
          <div className="w-8 h-8">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#0d131b] text-2xl font-bold leading-tight tracking-[-0.015em]">
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
