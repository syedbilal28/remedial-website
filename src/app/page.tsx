'use client'
import { GetStarted } from "@/modules/get-started";
import { Hero } from "@/modules/hero";
import { Services } from "@/modules/services";
import { WhyChooseUs } from "@/modules/why-choose-us";
import Head from "next/head";
import { OurValues } from "@/modules/our-values";
import { Mission } from "@/modules/mission";
import { Vision } from "@/modules/vision";
import './styles/globals.css';
import './styles/carousel.css'

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden">
      <Head>
        <title>South Coast Remedial</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>
      <div className="layout-container flex h-full grow flex-col font-sans">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1">
            <Hero />
            <Services />
            <WhyChooseUs />
            <Mission/>
            <Vision/>
            <OurValues />
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
}
