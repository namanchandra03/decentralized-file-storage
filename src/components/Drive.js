import React from "react";
import DrivePortion from "./main-file-system/AllFiles";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export default function Drive() {
  return (
    <div className="tw-flex tw-h-screen ">
      <Sidebar />
      <div className="tw-flex-1 tw-bg-gray-100">
        <Navbar />
        <div className=" tw-w-full "><DrivePortion/></div>
      </div>
    </div>
  );
}
