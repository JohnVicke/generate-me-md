import { RiDeleteBin2Fill, RiDragMoveFill, RiEdit2Fill } from "react-icons/ri";
import { useComponentStore } from "../componentStore";
import { SideMenuMarkdownComponent } from "./components";

type SelectComponent = (component: SideMenuMarkdownComponent) => void;

type MenuItemProps = {
  component: SideMenuMarkdownComponent;
  onClick?: SelectComponent;
  editable?: boolean;
  isActive?: boolean;
};

export const MenuItem = ({ component, editable, onClick, isActive }: MenuItemProps) => {
  const { removeComponent } = useComponentStore();

  const classes = `mr-2 flex w-full cursor-pointer items-center rounded-lg bg-neutral p-4 ${isActive ? "border" : ""}`;

  return (
    <div
      className={classes}
      onClick={() => {
        if (onClick) onClick(component);
      }}
    >
      {editable && <RiDragMoveFill className="mr-2" size="1.5em" />}
      <p className="text-lg">{component.text}</p>
      {editable && (
        <div className="ml-auto flex gap-2">
          <RiDeleteBin2Fill size="1.5em" onClick={() => removeComponent(component.id)} />
        </div>
      )}
    </div>
  );
};
