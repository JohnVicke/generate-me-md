import React from "react";
import { CgCopy } from "react-icons/cg";
import { FadeIn } from "../FadeIn";

export const MDCodeBlock = ({ children }: React.PropsWithChildren) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative rounded-lg bg-base-200 p-3 font-mono"
    >
      <FadeIn show={hover}>
        <div className="absolute top-2 right-3 cursor-pointer rounded-lg border border-neutral bg-base-100 p-2">
          <CgCopy />
        </div>
      </FadeIn>
      {children}
    </div>
  );
};
