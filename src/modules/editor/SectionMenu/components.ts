import { Title } from "@/components/markdown/Title";
import { SubTitle } from "@/components/markdown/SubTitle";
import { SubTitleEdit } from "@/components/markdown/SubTitleEdit";
import { Links } from "@/components/markdown/block/Links";

import { v4 } from "uuid";
import { TitleEdit } from "@/components/markdown/TitleEdit";
import { UpdateFunctionSignatures } from "../componentStore";

export type SideMenuMarkdownComponent = {
  id: string;
  text: string;
  PreviewComponent: ({ props }: any) => JSX.Element;
  EditComponent: ({ props }: any) => JSX.Element;
  value?: any;
  updateFunction: keyof UpdateFunctionSignatures;
};

export const components: SideMenuMarkdownComponent[] = [
  {
    id: v4(),
    text: "Title",
    PreviewComponent: Title,
    EditComponent: TitleEdit,
    updateFunction: "updateTitleComponent",
  },
  {
    id: v4(),
    text: "Subtitle",
    PreviewComponent: SubTitle,
    EditComponent: SubTitleEdit,
    updateFunction: "updateSubTitleComponent",
  },
  {
    id: v4(),
    text: "Links",
    PreviewComponent: Links,
    EditComponent: Links,
    updateFunction: "updateTitleComponent",
  },
];
