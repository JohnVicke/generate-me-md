import React from "react";
import { motion, AnimatePresence, AnimationProps } from "framer-motion";

type FadeInProps = {
  show: boolean;
};

const animation: AnimationProps = {
  variants: {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  },
  initial: "hide",
  animate: "show",
  exit: "hide",
};

export const FadeIn = ({ show, children }: React.PropsWithChildren<FadeInProps>) => (
  <AnimatePresence mode="wait">{show && <motion.div {...animation}>{children}</motion.div>}</AnimatePresence>
);
