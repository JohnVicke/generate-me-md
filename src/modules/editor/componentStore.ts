import { v4 } from "uuid";
import create from "zustand";
import { SideMenuMarkdownComponent } from "./SectionMenu/components";

type SideMenuMarkdownComponentAddInput = Omit<SideMenuMarkdownComponent, "id">;

type UpdateFunction<T, U> = { name: string; signature: T; value: U };

type UpdateTitleComponent = UpdateFunction<(id: string, title: string) => void, string>;
type UpdateSubtitleComponent = UpdateFunction<(id: string, subTitle: string) => void, string>;

type UpdateFunctions = {
  updateTitleComponent: UpdateTitleComponent;
  updateSubTitleComponent: UpdateSubtitleComponent;
};

export type UpdateFunctionSignatures = {
  [key in keyof UpdateFunctions]: UpdateFunctions[key]["signature"];
};

// TODO: Make selectedComponets be an map instead of an array for O(1) lookup

type ComponentState = UpdateFunctionSignatures & {
  activeComponent?: SideMenuMarkdownComponent;
  selectedComponents: SideMenuMarkdownComponent[];
  selectComponent: (component: SideMenuMarkdownComponentAddInput) => void;
  removeComponent: (id: string) => void;
  reOrderComponents: (components: SideMenuMarkdownComponent[]) => void;
  setActiveComponent: (id: string) => void;
};

export const useComponentStore = create<ComponentState>()((set) => ({
  selectedComponents: [],
  activeComponent: undefined,
  selectComponent: (input) =>
    set((state) => {
      const component = { ...input, id: v4() };
      return {
        selectedComponents: [...state.selectedComponents, component],
        activeComponent: component,
      };
    }),
  removeComponent: (id) =>
    set((state) => ({
      selectedComponents: state.selectedComponents.filter((component) => component.id !== id),
    })),
  reOrderComponents: (components) => set(() => ({ selectedComponents: components })),
  setActiveComponent: (id) =>
    set((state) => ({
      activeComponent: state.selectedComponents.find((c) => c.id === id),
    })),
  updateTitleComponent: (id, title) =>
    set((state) => {
      const components = state.selectedComponents.map((c) =>
        c.id === id ? { ...c, value: title } : c,
      );
      return { selectedComponents: components };
    }),
  updateSubTitleComponent: (id, subTitle) =>
    set((state) => {
      const components = state.selectedComponents.map((c) =>
        c.id === id ? { ...c, value: subTitle } : c,
      );
      return { selectedComponents: components };
    }),
}));
