import React from "react";
import DecorativeBackground from "./decorative-background";
import { ProjectT } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Project({ project }: { project: ProjectT }) {
  const { title, subtitle, link, color, pill } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-white rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out transform hover:rotate-2 overflow-hidden group select-none relative block"
    >
      {/* Badge */}
      {(pill === "starred" || pill === "new") && (
        <div
          className={cn(
            "absolute top-0 right-0 text-xs rounded-bl-lg px-2 border-l border-gray-300 border-b z-10 py-px",
            pill === "new" ? "bg-green-200" : "bg-yellow-200"
          )}
        >
          {pill === "new" ? "🎉 new" : "⭐️ starred"}
        </div>
      )}

      <DecorativeBackground color={color} count={4} />

      <div className="text-base font-bold mt-1 uppercase relative z-10 text-gray-900">
        {title}
      </div>
      <div className="text-sm text-gray-800 mt-2 relative z-10">{subtitle}</div>
    </a>
  );
}
