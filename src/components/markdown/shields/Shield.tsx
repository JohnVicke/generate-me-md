import React from "react";

export type ShieldStyle = "for-the-badge" | "plastic" | "flat" | "flat-square" | "social";

export type ShieldProps = {
  href: string;
  src: string;
  style?: ShieldStyle;
};

export const Shield = ({ href, src, style = "for-the-badge" }: ShieldProps) => {
  return (
    <a href={href}>
      <img src={`${src}?style=${style}`} />
    </a>
  );
};
