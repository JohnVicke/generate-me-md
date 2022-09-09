import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { Suspense } from "react";
import { CgArrowLeftO, CgCloseO, CgDribbble } from "react-icons/cg";
import { GoGitPullRequest } from "react-icons/go";
import { MDBody } from "@/components/markdown/MDBody";
import { MDCodeBlock } from "@/components/markdown/MDCodeBlock";
import { MDDivider } from "@/components/markdown/MDDivider";
import { MDHeading } from "@/components/markdown/MDHeading";
import { GithubIssues } from "@/components/markdown/shields/GithubIssues";

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
    <div className="mx-auto mt-12 flex w-full max-w-screen-md flex-col gap-3 bg-base-300 p-8">
      <input
        type="text"
        placeholder="Generate ME"
        className="bg-transparent text-center text-3xl font-bold focus:outline-none"
      />
      <input
        type="text"
        placeholder="Super cool github project"
        className="bg-transparent text-center text-base font-bold focus:outline-none"
      />
      <div className="align-center flex justify-center gap-2">
        <GithubIssues username="JohnVicke" repo="klask-backend" />
        <GithubIssues username="JohnVicke" repo="klask-backend" />
      </div>
      <div className="align-center flex justify-center gap-2">
        <a className="font-bold text-blue-400" href="">
          Contribute
        </a>
        <span>·</span>
        <a className="font-bold text-blue-400" href="">
          Community
        </a>
        <span>·</span>
        <a className="font-bold text-blue-400" href="">
          Documentation
        </a>
      </div>
    </div>
  );
};

const DocumentControls = () => {
  return (
    <div className="flex gap-2">
      <button className="btn btn-accent">Templates</button>
      <button className="btn btn-primary">
        <GoGitPullRequest className="mr-2 text-xl" />
        New pull request
      </button>
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
    <div className="relative">
      <div className="flex gap-2">
        <PreviewWindow />
      </div>
    </div>
  );
};

export default Editor;
