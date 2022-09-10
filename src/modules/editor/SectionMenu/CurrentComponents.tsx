import { Reorder } from "framer-motion";
import { useComponentStore } from "../componentStore";
import { SideMenuMarkdownComponent } from "./components";
import { MenuItem } from "./MenuItem";

type CurrentComponentsProps = {
  components?: SideMenuMarkdownComponent[];
  reOrder: (components: SideMenuMarkdownComponent[]) => void;
};

export const CurrentComponents = ({ reOrder, components }: CurrentComponentsProps) => {
  const { activeComponent, setActiveComponent } = useComponentStore();
  if (!components) return null;

  return (
    <Reorder.Group values={components} onReorder={reOrder} axis="y" className="mx-2 flex flex-col gap-2">
      {components?.map((component) => (
        <Reorder.Item key={component.id} value={component}>
          <div onClick={() => setActiveComponent(component.id)}>
            <MenuItem isActive={activeComponent?.id === component.id} editable component={component} />
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
