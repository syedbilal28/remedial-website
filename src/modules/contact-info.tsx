import React from "react";

export const ContactInfo = () => (
  <>
    <h3 className="text-[#182A54] leelawadee tracking-light text-3xl font-bold leading-tight px-4 text-left pb-2 pt-5">
      Or, reach out directly
    </h3>
    <div className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-[72px] py-2">
      <div
        className="text-[#0d131c] flex items-center justify-center rounded-lg bg-[#e6ecf4] shrink-0 size-12"
        data-icon="Phone"
        data-size="24px"
        data-weight="regular"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d131c] text-base font-medium leading-normal line-clamp-1">
          (02) 4257 1001
        </p>
        <p className="text-[#47699e] text-sm font-normal leading-normal line-clamp-2">
          Mon-Fri, 9am-5pm
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-[72px] py-2">
      <div
        className="text-[#0d131c] flex items-center justify-center rounded-lg bg-[#e6ecf4] shrink-0 size-12"
        data-icon="EnvelopeOpen"
        data-size="24px"
        data-weight="regular"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d131c] text-base font-medium leading-normal line-clamp-1">
        office@southcoastremedial.com
        </p>
        <p className="text-[#47699e] text-sm font-normal leading-normal line-clamp-2">
          Mon-Fri, 9am-5pm
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-14">
      <div
        className="text-[#0d131c] flex items-center justify-center rounded-lg bg-[#e6ecf4] shrink-0 size-10"
        data-icon="MapPin"
        data-size="24px"
        data-weight="regular"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
        </svg>
      </div>
      <p className="text-[#0d131c] text-base font-normal leading-normal flex-1 truncate">
      Unit 2 Princes Highway Woonona, NSW, 2517
      </p>
    </div>
  </>
);
