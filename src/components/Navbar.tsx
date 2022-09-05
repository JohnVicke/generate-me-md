import { trpc } from "@/utils/trpc";
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { GoMarkGithub, GoGitPullRequest } from "react-icons/go";
import Link from "next/link";

export const Navbar = () => {
  const meQuery = trpc.useQuery(["profile.me"], { retry: false });

  return (
    <div className="navbar fixed top-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/" passHref>
          <a className="btn btn-ghost text-xl normal-case">GenerateME</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/documents">
              <button className="btn btn-secondary">My Documents</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {meQuery.isLoading ? (
          <BiLoaderCircle />
        ) : (
          <>
            {meQuery.error?.message === "UNAUTHORIZED" && <a className="btn">Get started </a>}
            {meQuery.data?.image && (
              <div className="avatar w-12">
                <img className="rounded-full" src={meQuery.data.image} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
