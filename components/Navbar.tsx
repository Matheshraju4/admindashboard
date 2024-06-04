"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div
        className="bg-black  text-white flex flex-col text-lg md:text-xl font-extrabold p-2 md:p-4 rounded-md m-4 mb-0 "
        onClick={() => router.push("/")}
      >
        Nextjs Projects
      </div>
    </div>
  );
};

export default Navbar;
