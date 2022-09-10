import React from "react";
import { useComponentStore } from "./componentStore";

export const Preview = () => {
  const { selectedComponents } = useComponentStore();
  return (
    <div className="mx-auto flex w-full flex-col gap-3 bg-base-300 p-8">
      {selectedComponents.map(({ id, PreviewComponent }) => (
        <PreviewComponent key={id} />
      ))}
    </div>
  );
};
