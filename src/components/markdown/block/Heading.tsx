import React from "react";
import { FadeIn } from "../../FadeIn";
type MDHeadingLevels = "h2" | "h3" | "h4";

type MDHeadingProps = {
  level: MDHeadingLevels;
};

type MDHeadingStyles = {
  [key in MDHeadingLevels]: string;
};

const headingStyles: MDHeadingStyles = {
  h2: "text-2xl font-bold",
  h3: "text-xl font-bold",
  h4: "text-lg font-bold",
};

export const MDHeading = ({ level: Level, children }: React.PropsWithChildren<MDHeadingProps>) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <FadeIn show={hover}>
        <a className="absolute left-[-22px] top-[50%] translate-y-[-50%] text-sm" href="">
          🔗
        </a>
      </FadeIn>
      <Level className={headingStyles[Level]}>{children}</Level>
    </div>
  );
};
