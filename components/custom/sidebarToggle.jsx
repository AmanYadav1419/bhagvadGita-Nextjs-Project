"use client";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";

const SidebarToggle = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <div>
      {/* toggle button */}
      <ArrowLeftIcon
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={cn(
          "text-gray-400 transition-all cursor-pointer text-3xl",
          !isSidebarOpen && "rotate-180"
        )}
      />
    </div>
  );
};

export default SidebarToggle;
