"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import SidebarToggle from "./sidebarToggle";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chaptersData, setChaptersData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchChapters = async () => {
      const chapters = await fetch(
        "https://vedicscriptures.github.io/chapters"
      );
      const data = await chapters.json();
      setChaptersData(data);
    };
    fetchChapters();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <SidebarToggle
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        id="sidebarContent"
        className={`${
          !isSidebarOpen ? "hidden md:flex w-0" : "block"
        } flex flex-col gap-3 p-5 border-r shadow-sm transition-all duration-300`}
      >
        <h2 className="text-3xl">Chapters</h2>
        {chaptersData.map((chapter, index) => (
          <div
            className={`${
              !isSidebarOpen ? "hidden w-0 md:flex " : "block"
            } flex flex-col transition-all duration-300`}
            key={index}
          >
            <Link href={`/${index + 1}`}>
              {index + 1}. {chapter.translation}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
