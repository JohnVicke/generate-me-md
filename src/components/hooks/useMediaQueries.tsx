import React from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export const useIsMobile = () => useMediaQuery("(min-width: 640px)");
export const useIsTablet = () => useMediaQuery("(min-width: 768px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
