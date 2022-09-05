import React from "react";
import { Shield, ShieldStyle } from "./Shield";

type GithubIssuesProps = {
  username: string;
  repo: string;
  style?: ShieldStyle;
};

export const GithubIssues = ({ username, repo, style }: GithubIssuesProps) => {
  const href = `https://github.com/${username}/${repo}/issues`;
  const src = `https://img.shields.io/github/issues/${username}/${repo}`;

  return <Shield href={href} src={src} style={style} />;
};
