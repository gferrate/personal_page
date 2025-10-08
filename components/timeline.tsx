import React from "react";
import ExperienceCard from "./experience-card";

interface TimelineItem {
  name: string;
  degree: string;
  country: string;
  year: number;
  color: string;
  href: string;
  image: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
}

function LinePath({
  dashed = false,
  circles = "all",
}: {
  dashed?: boolean;
  circles?: "all" | "left" | "right";
}) {
  return (
    <svg height="8" width="40" className="transform rotate-90 md:rotate-0">
      <line
        x1="0"
        y1="4"
        x2="40"
        y2="4"
        stroke="gray"
        strokeWidth="3"
        strokeDasharray={dashed ? "4, 3" : ""}
      />
      {(circles === "all" || circles === "left") && (
        <circle cx="0" cy="4" r="3" fill="gray" stroke="gray" strokeWidth="1" />
      )}
      {(circles === "all" || circles === "right") && (
        <circle
          cx="40"
          cy="4"
          r="3"
          fill="gray"
          stroke="gray"
          strokeWidth="1"
        />
      )}
    </svg>
  );
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="mt-5 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
      <LinePath dashed circles="right" />
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0"
        >
          <ExperienceCard {...item} />
          {index !== items.length - 1 && <LinePath />}
        </div>
      ))}
      <LinePath dashed circles="left" />
    </div>
  );
}
