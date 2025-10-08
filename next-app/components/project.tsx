"use client";

import React from "react";
import DecorativeBackground from "./decorative-background";

interface ProjectProps {
  title: string;
  subtitle: string;
  link: string;
  color: string;
  starred?: boolean;
  isNew?: boolean;
}

export default function Project({
  title,
  subtitle,
  link,
  color,
  starred,
  isNew,
}: ProjectProps) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="w-full bg-gray-100 rounded-xl p-4 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out transform hover:rotate-2 overflow-hidden group select-none relative"
    >
      {/* Badge */}
      {(starred || isNew) && (
        <div
          className={`absolute top-0 right-0 text-xs rounded-bl-lg px-2 border-l border-gray-300 border-b z-10 py-px ${
            isNew ? "bg-green-200" : "bg-yellow-200"
          }`}
        >
          {isNew ? "🎉 new" : "⭐️ starred"}
        </div>
      )}

      <DecorativeBackground color={color} count={4} />

      <div className="text-base font-bold mt-1 uppercase relative z-10 text-gray-900">
        {title}
      </div>
      <div className="text-sm text-gray-800 mt-2 relative z-10">{subtitle}</div>
    </div>
  );
}
