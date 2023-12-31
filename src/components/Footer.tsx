import React from "react";

export default function Footer() {
  return (
    <div className="w-full absolute bottom-14 z-50">
      <div className="w-full flex flex-row justify-center items-center h-14 bg-primary px-6 text-zinc-400 fixed z-[2]">
        <div className="text-sm md:text-md">
          © 2023 <span className="text-white  font-medium">Miro</span> • All
          rights reserved.
        </div>
      </div>
    </div>
  );
}
