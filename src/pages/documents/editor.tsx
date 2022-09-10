import { useComponentStore } from "@/modules/editor/componentStore";
import { Editor } from "@/modules/editor/Editor";
import { Preview } from "@/modules/editor/Preview";
import { SectionMenu } from "@/modules/editor/SectionMenu/SectionMenu";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React from "react";

const EditorPage = () => {
  const [previewViewAll, setPreviewViewAll] = React.useState(false);
  const [showSectionMenu, setShowSectionMenu] = React.useState(true);

  const session = useSession();

  if (session.status === "loading") {
    return <div>loading</div>;
  }

  if (session.status === "unauthenticated") {
    return <div>Not authenticated</div>;
  }

  return (
    <LayoutGroup>
      <div className="grid h-[calc(100vh-100px)] grid-cols-[auto_1fr_1fr] gap-2 px-4 pt-4">
        <AnimatePresence initial={false} mode="wait">
          {showSectionMenu ? (
            <motion.div layout>
              <p>Sections</p>
              <SectionMenu hideMenu={() => setShowSectionMenu(false)} />
            </motion.div>
          ) : (
            <button onClick={() => setShowSectionMenu(true)}>show</button>
          )}
        </AnimatePresence>
        <motion.div layout>
          <p>Editor</p>
          <Editor />
        </motion.div>
        <motion.div layout>
          <div className="flex justify-between">
            <p>Preview</p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setPreviewViewAll(!previewViewAll)}
            >
              {previewViewAll ? "View current component" : "View full"}
            </button>
          </div>
          <Preview viewAll={previewViewAll} />
        </motion.div>
      </div>
    </LayoutGroup>
  );
};

export default EditorPage;
