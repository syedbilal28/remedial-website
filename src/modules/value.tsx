import React from "react";
import { CheckCircleFilled } from '@ant-design/icons';

export interface ValuesItem {
    title: string;
    value: string;
}

export const Value: React.FC<ValuesItem> = ({title, value}) => (
    <div className="grid grid-rows-3 grid-flow-col gap-4 p-1 text-left">
        <div className="p-1 w-full rounded-xl row-span-3">
            <CheckCircleFilled style={{ color: "#1366EC", fontSize: "40px" }} />
        </div>
        <div className="p-1 w-full rounded-xl col-span-2 text-[#0d131b] text-base font-bold leading-tight text-xl flex">
            <h2>{title}</h2>
        </div>
        <div className="p-1 w-full rounded-xl row-span-2 col-span-2 text-md">{value}</div>
    </div>
)