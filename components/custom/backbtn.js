"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ArrowBigLeftDash } from "lucide-react";

const Backbtn = () => {
  const router = useRouter();
  return (
    <div>
      <Button onClick={() => router.back()}>
        <ArrowBigLeftDash className="h-5 w-5 mr-2"/> Back
      </Button>
    </div>
  );
};

export default Backbtn;
