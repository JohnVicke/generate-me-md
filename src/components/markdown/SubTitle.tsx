import React from "react";
import { DefaultBlockProps } from "./types";

type SubHeaderProps = {
  text?: string;
};

export const SubTitle = ({ text = "Super cool github project" }: SubHeaderProps) => {
  return <h2 className="bg-transparent text-center text-base font-bold focus:outline-none">{text}</h2>;
};
