import React from "react";
import { DefaultBlockProps } from "./types";

type HeaderProps = {
  text?: string;
};

export const Header = ({ text = "Generate ME" }: HeaderProps) => {
  return <h1 className="bg-transparent text-center text-3xl font-bold focus:outline-none">{text}</h1>;
};
