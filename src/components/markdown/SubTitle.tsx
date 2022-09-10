import React from "react";
import { DefaultBlockProps } from "./types";

type SubHeaderProps = {
  value?: string;
};

export const SubTitle = ({ value = "Super cool github project" }: SubHeaderProps) => {
  return (
    <h2 className="bg-transparent text-center text-base font-bold focus:outline-none">{value}</h2>
  );
};
