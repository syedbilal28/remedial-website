import React from "react";
import { CheckCircleFilled } from '@ant-design/icons';

export interface ValuesItem {
    title: string;
    value: string;
}

export const Value: React.FC<ValuesItem> = ({title, value}) => (
    <div className="flex items-start space-x-4 p-1 text-left max-w-[350px]">
        <div className="flex-shrink-0">
            <CheckCircleFilled style={{ color: "#1366EC", fontSize: "40px" }} />
        </div>
        <div className="flex-grow">
            <h2 className="text-lg font-bold text-[#0d131b] leading-tight mb-1 py-2">{title}</h2>
            <p className="text-md">{value}</p>
        </div>
    </div>
)