import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import React from "react";
import { CgArrowLeftO, CgCloseO } from "react-icons/cg";
import { MDBody } from "../../components/markdown/MDBody";
import { MDCodeBlock } from "../../components/markdown/MDCodeBlock";
import { MDDivider } from "../../components/markdown/MDDivider";
import { MDHeading } from "../../components/markdown/MDHeading";
import { GithubIssues } from "../../components/shield/GithubIssues";

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
    type: "spring",
  },
};

const drawerAnimation: AnimationProps = {
  variants: {
    open: {
      right: 0,
    },
    closed: {
      right: -500,
    },
  },
  initial: "closed",
  animate: "open",
  exit: "closed",
};

const ComponetDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleHover = () => {
    if (!drawerOpen) setDrawerOpen(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!drawerOpen && (
        <motion.div
          key="show-drawer-icon"
          {...showDrawerAnim}
          className="absolute right-10 top-[50%] translate-y-[-50%]"
        >
          <div onMouseEnter={handleHover}>
            <CgArrowLeftO />
          </div>
        </motion.div>
      )}
      {drawerOpen && (
        <motion.div
          key="component-drawer"
          className="absolute top-0 h-screen w-[400px] bg-neutral"
          {...drawerAnimation}
        >
          <div className="flex justify-between p-4">
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
  );
};

const PreviewWindow = () => {
  return (
    <div className="mx-auto mt-12 flex w-full max-w-screen-md flex-col gap-3 bg-base-300 p-8">
      <h1 className="text-center text-3xl font-bold">Generate ME</h1>
      <h3 className="text-center text-base font-bold">Super cool github project!</h3>
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
      <MDDivider />
      <MDHeading level="h2">h2</MDHeading>
      <MDBody>this is body thingy majingy</MDBody>
      <MDDivider />
      <MDHeading level="h3">h3</MDHeading>
      <MDCodeBlock>code block</MDCodeBlock>
      <MDHeading level="h4">h4</MDHeading>
    </div>
  );
};

const Create = () => {
  return (
    <div className="overflow-x-hidden">
      <PreviewWindow />
      <ComponetDrawer />
    </div>
  );
};

export default Create;
