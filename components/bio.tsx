import React from "react";
import DecorativeBackground from "./decorative-background";

interface BioProps {
  title: string;
  paragraphs: readonly string[];
}

export default function Bio({ title, paragraphs }: BioProps) {
  return (
    <div className="rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-500 relative group overflow-hidden bg-white hover:rotate-2 hover:scale-105 transform text-gray-900">
      <DecorativeBackground color="bg-green-500" count={5} />
      <p className="font-medium mb-2 text-gray-900 relative z-10">{title}</p>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mt-2 text-gray-900 relative z-10">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
