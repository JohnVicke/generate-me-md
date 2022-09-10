import React from "react";
import { useComponentStore } from "./componentStore";

export const Editor = ({}) => {
  const { activeComponent, ...rest } = useComponentStore();

  if (!activeComponent) {
    return <div className="h-full border bg-base-200"></div>;
  }

  const { EditComponent } = activeComponent;

  return (
    <div className="h-full border bg-base-200 p-4">
      <EditComponent
        id={activeComponent.id}
        value={activeComponent.value}
        handleChange={rest[activeComponent.updateFunction]}
      />
    </div>
  );
};
