import React from "react";
import { trpc } from "../../../utils/trpc";

const ReposPage = () => {
  const repos = trpc.useQuery(["github.getRepos"], { retry: false });
  console.log(repos);
  return (
    <div>
      <h1>repos</h1>
      {repos.data?.map((repo) => {
        return (
          <div key={repo.id}>
            <h1>{repo.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ReposPage;
