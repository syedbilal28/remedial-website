import { ContactInfo } from '@/modules/contact-info';
import { Header } from '@/modules/header';
import Head from 'next/head';
import React from 'react';

export default function ContactUs() {
    return (
        <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      </Head>
      <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Header/>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col flex-1">
              <div className="@container">
                <div className="flex flex-row gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/68ba9469-40ab-4877-84b9-eb0896e9c897.png")' }}
                  ></div>
                  <div className="flex flex-col justify-center items-center gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <h1
                      className="text-[#0d131c] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
                    >
                      Let&lsquo;s talk about your next project
                    </h1>
                    <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                      <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                          className="text-[#47699e] flex border-none bg-[#e6ecf4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                          data-icon="MagnifyingGlass"
                          data-size="20px"
                          data-weight="regular"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                              d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          placeholder="What can we help you with?"
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border-none bg-[#e6ecf4] focus:border-none h-full placeholder:text-[#47699e] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                          value=""
                        />
                        <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#e6ecf4] pr-2">
                          <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#79abfc] text-[#0d131c] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                          >
                            <span className="truncate">Get in touch</span>
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <ContactInfo/>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
