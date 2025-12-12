import React from "react";
import Image from "next/image";
import DecorativeBackground from "./decorative-background";

interface ExperienceCardProps {
  name: string;
  degree: string;
  country: string;
  year: number;
  color: string;
  href: string;
  image: string;
}

export default function ExperienceCard({
  name,
  degree,
  country,
  year,
  color,
  href,
  image,
}: ExperienceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-48 bg-white rounded-xl p-3 flex flex-col items-start shadow-md hover:shadow-lg transition duration-500 relative overflow-hidden hover:rotate-6 hover:scale-105 transform group z-20 select-none text-gray-900"
    >
      <DecorativeBackground color={color} count={3} />

      <div className="flex justify-start items-center space-x-2 z-10 relative">
        <div className="w-8 h-8 relative rounded-full overflow-hidden flex-none">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
        <div className="text-xs text-gray-500 uppercase">{name}</div>
      </div>

      <div className="text-sm mt-2 text-left z-10 relative text-gray-900">
        {degree}
      </div>
      <div className="text-sm text-blue-600 mt-1 z-10 relative font-medium">
        {country}, {year}
      </div>
    </a>
  );
}
