import React, { useId } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  id?: string;
  modal?: boolean;
};

export const Portal = ({ children, id, modal }: React.PropsWithChildren<PortalProps>) => {
  const el = document.createElement("div");
  const wrapper = React.useRef<HTMLElement>(el);
  const uId = useId();

  React.useEffect(() => {
    const current = wrapper.current;
    current.className = modal ? "modal-overlay" : "";
    current.setAttribute("id", id ?? uId);
    document.body.appendChild(current);

    return () => {
      document.body.removeChild(current);
    };
  }, [wrapper, id, uId]);

  if (!wrapper.current) return null;

  return ReactDOM.createPortal(children, wrapper.current);
};
