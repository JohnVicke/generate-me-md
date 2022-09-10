import { v4 } from "uuid";
import create from "zustand";
import { SideMenuMarkdownComponent } from "./SectionMenu/components";

type SideMenuMarkdownComponentAddInput = Omit<SideMenuMarkdownComponent, "id">;

interface ComponentState {
  activeComponentId?: string;
  selectedComponents: SideMenuMarkdownComponent[];
  selectComponent: (component: SideMenuMarkdownComponentAddInput) => void;
  removeComponent: (id: string) => void;
  reOrderComponents: (components: SideMenuMarkdownComponent[]) => void;
  setActiveComponentId: (id: string) => void;
}

export const useComponentStore = create<ComponentState>()((set) => ({
  selectedComponents: [],
  activeComponentId: undefined,
  selectComponent: (input) =>
    set((state) => ({ selectedComponents: [...state.selectedComponents, { ...input, id: v4() }] })),
  removeComponent: (id) =>
    set((state) => ({ selectedComponents: state.selectedComponents.filter((component) => component.id !== id) })),
  reOrderComponents: (components) => set(() => ({ selectedComponents: components })),
  setActiveComponentId: (id) => set(() => ({ activeComponentId: id })),
}));
