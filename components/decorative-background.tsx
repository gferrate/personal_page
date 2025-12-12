"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DecorativeBackgroundProps {
  color?: string;
  count?: number;
}

export default function DecorativeBackground({
  color = "bg-gray-500",
  count = 3,
}: DecorativeBackgroundProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        const isCircle = Math.random() > 0.5;
        const size = Math.random() * 80 + 40;

        return (
          <div
            key={i}
            className={cn(
              "absolute transform transition duration-500 group-hover:rotate-12 group-hover:scale-125 pointer-events-none backdrop-blur-lg bg-white/30 border border-white/40 shadow-lg opacity-10",
              color
            )}
            style={{
              width: isCircle ? `${size}px` : `${Math.random() * 80 + 40}px`,
              height: isCircle ? `${size}px` : `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              borderRadius: isCircle ? "99999px" : "0px",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        );
      })}
    </>
  );
}
