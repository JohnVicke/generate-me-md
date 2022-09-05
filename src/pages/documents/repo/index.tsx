import React from "react";
import { trpc, inferQueryOutput } from "../../../utils/trpc";
import { GoMarkGithub, GoGitPullRequest } from "react-icons/go";
import { v4 } from "uuid";

type GithubRepo = inferQueryOutput<"github.getRepos">[0];

const GithubRepoList = ({ repos, loading }: { loading: boolean; repos?: GithubRepo[] }) => {
  return (
    <div className="flex max-h-96 max-w-screen-md flex-col overflow-y-auto bg-base-300 p-2">
      {repos
        ? repos.map((repo) => {
            return (
              <div className="m-2 flex items-center justify-between rounded-xl bg-base-200 p-4" key={repo.id}>
                <div className="flex items-center">
                  <GoMarkGithub size="2em" />
                  <div className="mr-2" />
                  <h3 className="text-lg font-bold">{repo.name}</h3>
                </div>
                <button className="btn btn-ghost">Open pull request</button>
              </div>
            );
          })
        : Array.from({ length: 4 })
            .map(() => v4())
            .map((uuid) => {
              return <div key={uuid} className="shimmer m-2 h-20 rounded-xl bg-base-200 p-4" />;
            })}
    </div>
  );
};

const ReposPage = () => {
  const { data, isLoading } = trpc.useQuery(["github.getRepos"], { retry: false });
  return (
    <div>
      <h1>repos</h1>
      <GithubRepoList repos={data} loading={isLoading} />
    </div>
  );
};

export default ReposPage;
