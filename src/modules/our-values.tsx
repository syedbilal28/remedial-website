import React from "react";
import { Value } from "./value";

export const OurValues = () => {
    const valuesData = [
        {
            title: "Integrity",
            value: "We conduct our business with honesty and transparency, ensuring that our clients receive fair and accurate information."
        },
        {
            title: "Excellence",
            value: "We strive for excellence in every project, using the latest techniques and highest quality materials to deliver superior results."
        },
        {
            title: "Customer Focus",
            value: "Our clients are at the heart of everything we do. We listen to their needs, provide tailored solutions, and ensure their complete satisfaction."
        },
        {
            title: "Innovation",
            value: "We embrace new technologies and methods to improve our services and stay ahead in the industry."
        }
    ]
    return (
        <div className="px-56 text-center py-10">
            <h2 className="text-white text-[32px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
            Our Values
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4">
            {valuesData.map((item, index) => (
                <Value key={index} {...item} />
            ))}
            </div>
        </div>
    )
}