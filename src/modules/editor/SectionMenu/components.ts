import { Title } from "@/components/markdown/Title";
import { SubTitle } from "@/components/markdown/SubTitle";
import { Links } from "@/components/markdown/block/Links";

import { v4 } from "uuid";

export type SideMenuMarkdownComponent = {
  id: string;
  text: string;
  PreviewComponent: ({ props }: any) => JSX.Element;
  EditComponent: ({ props }: any) => JSX.Element;
};

export const components: SideMenuMarkdownComponent[] = [
  {
    id: v4(),
    text: "Title",
    PreviewComponent: Title,
    EditComponent: Title,
  },
  {
    id: v4(),
    text: "Subtitle",
    PreviewComponent: SubTitle,
    EditComponent: Title,
  },
  {
    id: v4(),
    text: "Links",
    PreviewComponent: Links,
    EditComponent: Links,
  },
];
