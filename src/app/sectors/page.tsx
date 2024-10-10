import Head from "next/head";
import React from "react";
import "../styles/globals.css";

export default function Sectors() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] overflow-x-hidden">
      <Head>
        <title>South Coast Remedial - Sectors</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>

      <div className="layout-container flex h-full grow flex-col roboto-regular">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-w-[100vw] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 hero"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("/new/8.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center w-2/6 backdrop-blur-sm hero-content">
                    <h1 className="text-white leelawadee text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Sectors
                    </h1>
                    <h2 className="text-white text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      We work across the residential, commercial, public and high-rise sectors,
                      providing remedial solutions and structural repair services to meet the needs of our client
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Residential Section */}
            <section className="my-10 px-40">
              <h3 className="text-[#182A54] leelawadee text-5xl font-bold mb-4">Residential</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <img
                    src="/homeowners.jpg"
                    alt="Homeowners"
                    className="rounded-lg mb-2"
                  />
                  <h4 className="text-xl font-semibold">Homeowners</h4>
                  <p className="text-gray-600">
                    We provide homeowners with a range of remedial solutions
                    from small repairs to major structural works.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="/apartments.jpg"
                    alt="Residential Apartments"
                    className="rounded-lg mb-2"
                  />
                  <h4 className="text-xl font-semibold">
                    Residential Apartments
                  </h4>
                  <p className="text-gray-600">
                    We work with strata managers and body corporates to deliver
                    high-quality remedial solutions to apartment buildings.
                  </p>
                </div>
              </div>
            </section>

            {/* Commercial Section */}
            <section className="my-10 px-40">
              <h3 className="text-[#182A54] leelawadee text-5xl font-bold mb-4">Commercial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <img
                    src="/office.jpg"
                    alt="Commercial premises"
                    className="rounded-lg mb-2"
                  />
                  <h4 className="text-xl font-semibold">Commercial premises</h4>
                  <p className="text-gray-600">
                    We provide commercial property owners with a range of
                    remedial solutions.
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="/highrise.jpg"
                    alt="High-rise premises"
                    className="rounded-lg mb-2"
                  />
                  <h4 className="text-xl font-semibold">High-rise premises</h4>
                  <p className="text-gray-600">
                    Our team has extensive experience working on high-rise
                    buildings to address structural defects.
                  </p>
                </div>
              </div>
            </section>

            {/* Public Sector Section */}
            <section className="my-10 px-40">
              <h3 className="text-[#182A54] leelawadee text-5xl font-bold mb-4">Public sector</h3>
              <p className="text-gray-600">
                We provide a range of remedial solutions to the public sector,
                including local councils and government departments.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
