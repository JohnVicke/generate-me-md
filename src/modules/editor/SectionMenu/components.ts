import { Title } from "@/components/markdown/Title";
import { SubTitle } from "@/components/markdown/SubTitle";
import { v4 } from "uuid";

export type SideMenuMarkdownComponent = {
  id: string;
  text: string;
  previewComponent: ({ props }: any) => JSX.Element;
  editComponent: ({ props }: any) => JSX.Element;
};

export const components: SideMenuMarkdownComponent[] = [
  {
    id: v4(),
    text: "Title",
    previewComponent: Title,
    editComponent: Title,
  },
  {
    id: v4(),
    text: "Subtitle",
    previewComponent: SubTitle,
    editComponent: Title,
  },
];
