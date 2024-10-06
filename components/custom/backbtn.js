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
      {/* <Button onClick={() => router.push()}>
        <ArrowBigRightDash className="h-5 w-5 mr-2"/> Next
      </Button> */}
    </div>
  );
};

export default Backbtn;
