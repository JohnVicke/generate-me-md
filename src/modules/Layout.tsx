import { Navbar } from "@/components/Navbar";
import React from "react";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-16">{children}</div>
    </div>
  );
};
