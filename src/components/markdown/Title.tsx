import React from "react";
import { DefaultBlockProps } from "./types";

type HeaderProps = {
  value?: string;
};

export const Title = ({ value = "Generate ME" }: HeaderProps) => {
  return (
    <h1 className="bg-transparent text-center text-3xl font-bold focus:outline-none">{value}</h1>
  );
};
