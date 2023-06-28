import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Outlet component renders the childen set in RootLayout */}
    </>
  );
}
