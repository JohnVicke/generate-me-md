import { AnimationProps, motion } from "framer-motion";
import { useComponentStore } from "../componentStore";
import { components, SideMenuMarkdownComponent } from "./components";
import { CurrentComponents } from "./CurrentComponents";
import { MenuItem } from "./MenuItem";

export type SelectComponent = (component: SideMenuMarkdownComponent) => void;

type CompaniesListProps = {
  selectComponent: SelectComponent;
};

const ComponentsList = ({ selectComponent }: CompaniesListProps) => {
  return (
    <div className="mx-2 flex flex-col gap-2">
      {components.map((component) => (
        <MenuItem onClick={selectComponent} key={component.id} component={component} />
      ))}
    </div>
  );
};

const animation: AnimationProps = {
  animate: {
    x: 0,
  },
  initial: {
    x: -320,
  },
  exit: {
    x: -320,
  },
};

type SectionMenuProps = {
  hideMenu: () => void;
};

export const SectionMenu = ({ hideMenu }: SectionMenuProps) => {
  const { selectedComponents, reOrderComponents, selectComponent } = useComponentStore();
  return (
    <motion.div key="section-menu" {...animation} className="h-full w-80 overflow-y-auto bg-base-200 px-2">
      <div className="flex flex-col gap-4">
        <button className="btn btn-ghost ml-auto" onClick={hideMenu}>
          hide menu
        </button>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm">Move or edit your current components</p>
          <CurrentComponents reOrder={reOrderComponents} components={selectedComponents} />
        </div>
        <div className="divider" />
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm">Select a component to add it to your readme</p>
          <ComponentsList selectComponent={selectComponent} />
        </div>
      </div>
    </motion.div>
  );
};
