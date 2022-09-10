import React from "react";
import { useComponentStore } from "./componentStore";

type PreviewProps = {
  viewAll: boolean;
};

export const Preview = ({ viewAll }: PreviewProps) => {
  const { activeComponent, selectedComponents } = useComponentStore();

  return (
    <div className="mx-auto flex w-full flex-col gap-3 bg-base-300 p-8">
      {selectedComponents
        .filter((c) => (viewAll ? true : c.id === activeComponent?.id))
        .map(({ id, PreviewComponent, value }) => (
          <PreviewComponent key={id} value={value} />
        ))}
    </div>
  );
};
