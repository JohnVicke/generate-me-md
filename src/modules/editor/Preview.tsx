import { LinksController } from "@/components/markdown/block/Links";
import { GithubIssues } from "@/components/markdown/block/shields/GithubIssues";
import { Title } from "@/components/markdown/Title";
import { SubTitle } from "@/components/markdown/SubTitle";
import React from "react";

export const Preview = ({ components }: { components: [] }) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-3 bg-base-300 p-8">
      <Title />
      <SubTitle />
      <div className="align-center flex justify-center gap-2">
        <GithubIssues username="JohnVicke" repo="klask-backend" />
        <GithubIssues username="JohnVicke" repo="klask-backend" />
      </div>
      <LinksController />
    </div>
  );
};
