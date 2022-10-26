import React from "react";
import { MoonLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex items-center justify-center space-x-2 h-screen">
      <h1 className="font-bols text-green-600 text-[70px] animate-pulse">
        Loading{" "}
      </h1>
      <MoonLoader size={80} color={"#9AC0B5"} loading />
    </div>
  );
}

export default Loading;
