import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Portal } from "../Portal";

const useOutsideClick = (ref: React.MutableRefObject<HTMLDivElement | null>, onClick: () => void) => {
  React.useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClick();
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [ref, onClick]);
};

const OutsideClickContainer = ({ children, onClick }: React.PropsWithChildren<{ onClick: () => void }>) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, onClick);
  return <div ref={ref}>{children}</div>;
};

type DefaultModalProps = {
  id?: string;
  open?: boolean;
  close: () => void;
};

export const DefaultModal = ({ close, id, open, children }: React.PropsWithChildren<DefaultModalProps>) => (
  <AnimatePresence mode="wait">
    {open && (
      <Portal id={id} modal>
        <OutsideClickContainer onClick={close}>
          <motion.div
            key="modal-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-12 left-[50%] h-fit w-full max-w-screen-md translate-x-[-50%] p-4"
          >
            {children}
          </motion.div>
        </OutsideClickContainer>
      </Portal>
    )}
  </AnimatePresence>
);
