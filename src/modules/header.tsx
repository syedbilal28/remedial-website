'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex roboto-regular items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf3] px-6 py-3 md:px-10 md:py-4">
      <div className="flex items-center gap-4 text-[#0d131b] items-end">
        <div className="w-64 h-10">
          <Image
            src={"/logo/logo.png"}
            alt="logo"
            width={300}
            height={100}
          />
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex leelawadee items-center font-bold gap-6 md:gap-9">
          <a className="text-[#0d131b] text-base md:text-lg leading-normal" href="/">
            Home
          </a>
          <a className="text-[#0d131b] text-base md:text-lg leading-normal" href="/#about-us">
            About Us
          </a>
          <a className="text-[#0d131b] text-base md:text-lg leading-normal" href="/sectors">
            Sectors
          </a>
          {/* Commented due to Testimonials being removed */}
          {/* <a className="text-[#0d131b] text-base md:text-lg font-medium leading-normal" href="/#testimonials">
            Testimonials
          </a> */}
        </div>
        <div className="flex gap-2">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1366ec] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={() => router.push("/contact")}
          >
            <span className="truncate text-lg">Contact</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="flex md:hidden items-center">
        <button
          className="text-[#0d131b] text-xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Hamburger Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-lg z-10 p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              className="text-[#0d131b] text-lg font-medium leading-normal"
              href="/"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              className="text-[#0d131b] text-lg font-medium leading-normal"
              href="/#about-us"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              className="text-[#0d131b] text-lg font-medium leading-normal"
              href="/sectors"
              onClick={toggleMenu}
            >
              Sectors
            </a>
            {/* Removed since Testimonials are removed */}
            {/* <a
              className="text-[#0d131b] text-lg font-medium leading-normal"
              href="/#testimonials"
              onClick={toggleMenu}
            >
              Testimonials
            </a> */}
            <button
              className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#1366ec] text-[#f8f9fc] text-sm font-bold leading-normal"
              onClick={() => {
                router.push("/contact");
                toggleMenu();
              }}
            >
              <span className="truncate text-lg">Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
