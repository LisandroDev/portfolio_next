"use client";

import { useState } from "react";

interface Props {
  id: string;
  label: string;
}

export const ScrollTo = ({ id, label }: Props) => {
  const [current, setCurrent] = useState("welcome");
  const sectionsId = ["welcome", "projects", "contact"];

  const handleClick = () => {
    if (sectionsId.indexOf(current) === sectionsId.length - 1) {
      document
        .getElementById(sectionsId[0])
        ?.scrollIntoView({ behavior: "smooth" });
      setCurrent(sectionsId[0]);
    } else {
      document
        .getElementById(sectionsId[sectionsId.indexOf(current) + 1])
        ?.scrollIntoView({ behavior: "smooth" });
      setCurrent(sectionsId[sectionsId.indexOf(current) + 1]);
    }
  };

  return (
    <button className="animate-bounce" onClick={() => handleClick()}>
      <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg
          className={`w-6 h-6 ${current === 'contact' ? 'rotate-180' : ''} text-violet-500`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </button>
  );
};
