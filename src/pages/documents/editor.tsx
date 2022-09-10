import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { RiCloseCircleFill, RiEdit2Fill } from "react-icons/ri";
import React, { Suspense } from "react";
import { CgArrowLeftO, CgCloseO, CgDribbble } from "react-icons/cg";
import { GoGitPullRequest } from "react-icons/go";
import { GithubIssues } from "@/components/markdown/block/shields/GithubIssues";
import { Header } from "@/components/markdown/Header";
import { SubHeader } from "@/components/markdown/SubHeader";
import { LinksController } from "@/components/markdown/block/Links";

const showDrawerAnim: AnimationProps = {
  variants: {
    open: {
      right: 10,
    },
    closed: {
      right: -30,
    },
  },
  initial: "closed",
  animate: "open",
  transition: {
    delay: 0.3,
    type: "spring",
  },
};

const drawerAnimation: AnimationProps = {
  variants: {
    open: {
      right: 0,
    },
    closed: {
      right: -400,
    },
  },
  initial: "closed",
  animate: "open",
  exit: "closed",
  transition: {
    type: "spring",
    damping: 20,
  },
};

const ComponetDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!drawerOpen && (
          <motion.div key="show-drawer-icon" {...showDrawerAnim}>
            <div className="flex cursor-pointer items-center gap-2" onClick={openDrawer}>
              <CgArrowLeftO /> <p className="font-bold">Template</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {drawerOpen && (
          <motion.div
            key="component-drawer"
            className=" h-[50%] w-[400px] rounded-lg bg-neutral p-4"
            {...drawerAnimation}
          >
            <div className="flex justify-between pb-4">
              <button onClick={() => setDrawerOpen(false)} className="">
                <CgCloseO />
              </button>
              <h1>Components</h1>
              <div />
            </div>
            <GithubIssues username="JohnVicke" repo="klask-backend" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const PreviewWindow = () => {
  return (
    <div className="mx-auto mt-12 flex w-full flex-col gap-3 bg-base-300 p-8">
      <Header />
      <SubHeader />
      <div className="align-center flex justify-center gap-2">
        <GithubIssues username="JohnVicke" repo="klask-backend" />
        <GithubIssues username="JohnVicke" repo="klask-backend" />
      </div>
      <LinksController />
    </div>
  );
};

const Editor = () => {
  const session = useSession();

  if (session.status === "loading") {
    return <div>loading</div>;
  }

  if (session.status === "unauthenticated") {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="grid grid-cols-[200px_1fr_1fr] px-4">
      <div>secionmenu</div>
      <div>editor</div>
      <div className="relative">
        <PreviewWindow />
      </div>
    </div>
  );
};

export default Editor;
