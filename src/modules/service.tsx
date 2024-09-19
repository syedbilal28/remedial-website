import { useRouter } from "next/navigation";
import React from "react";

interface ServiceProps {
  title: string;
  content: string;
  image: string;
  indented?: {
    title: string;
    content: string;
  }[];
}

export const Service: React.FC<ServiceProps> = ({
  title,
  content,
  image,
  indented,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (indented) {
      router.push("services/defect-process");
    }
  };

  return (
    <div
      className={`relative group w-full w-[400px] min-h-[300px] ${indented ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <div
        className="w-full h-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl group-hover:opacity-75 transition-opacity duration-300"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></div>
      <div
        className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl text-white text-center p-4"
        style={{ background: "rgba(19, 102, 236, 0.7)" }}
      >
        <p className="text-lg font-semibold opacity-100">{title}</p>
        <p className="text-md opacity-100">{content}</p>
      </div>
    </div>
  );
};
