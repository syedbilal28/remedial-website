import { GetStarted } from "@/modules/get-started";
import { Header } from "@/modules/header";
import { Hero } from "@/modules/hero";
import { Services } from "@/modules/services";
import { WhyChooseUs } from "@/modules/why-choose-us";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?display=swap&family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
        />
        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </Head>
      <div className="layout-container flex h-full grow flex-col">
        <Header/>
        <div className="px-40 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1">
            <Hero/>
            <Services/>
            <WhyChooseUs/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/stability/4e01be9c-d202-4da8-9263-19d5a09ed0e3.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/stability/52a221ed-7164-4938-88c9-511222f7f24f.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/stability/3833b532-3e82-42c7-8699-64d9bc15f019.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/stability/9a75f695-920f-4773-be1a-0276f9bc581d.png")',
                  }}
                ></div>
              </div>
            </div>
            <GetStarted/>
          </div>
        </div>
      </div>
    </div>
  );
}
