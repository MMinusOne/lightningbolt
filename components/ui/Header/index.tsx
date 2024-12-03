"use client";

import { SignedIn, SignedOut, useUser, useClerk } from "@clerk/nextjs";
import { FaSignOutAlt } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import { useThemeStore } from "../../state/themeStore";
import { FaArrowDown } from "react-icons/fa6";
import ThemeOptions from "./ThemeOptions";
import UserAvatar from "./UserAvatar";
import Links from "./Links";

export default function Header() {
  const { user } = useUser();
  const { openSignIn, signOut } = useClerk();
  const { theme, updateTheme } = useThemeStore();

  return (
    <div className="bg-base-100 shadow-2xl rounded-2xl navbar">
      <div className="flex-1 gap-1">
        <details className="flex md:hidden dropdown">
          <summary className="m-1 btn btn-circle btn-ghost">
            <BiDotsHorizontal />
          </summary>
          <ul className="z-[1] bg-base-100 shadow p-2 rounded-box w-52 dropdown-content menu">
            <Links isMobile={true}/>
          </ul>
        </details>
        <a className="gap-0 font-bold text-xl btn btn-ghost" href="/">
          App<span className="text-primary">Name</span>
        </a>
        <Links isMobile={false}/>
      </div>
      <div className="flex-none gap-2">
        <div className="md:flex hidden dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-outline">
            Theme <FaArrowDown />
          </button>
          <ul
            tabIndex={0}
            className="z-[1] gap-1 bg-base-100 shadow mt-3 p-4 rounded-box w-52 dropdown-content menu"
          >
            <ThemeOptions theme={theme} updateTheme={updateTheme} />
          </ul>
        </div>
        <SignedIn>
          <div className="md:flex hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="a"
              className="avatar btn btn-circle btn-ghost"
            >
              <UserAvatar user={user} />
            </div>
            <ul
              tabIndex={0}
              className="z-[1] bg-base-100 shadow mt-3 p-4 rounded-box w-52 dropdown-content menu menu-sm"
            >
              <li onClick={() => signOut()}>
                <a className="text-error">
                  <FaSignOutAlt />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </SignedIn>
        <SignedOut>
          <button
            onClick={() => openSignIn()}
            className="md:flex hidden btn btn-primary"
          >
            Sign In
          </button>
        </SignedOut>
      </div>
    </div>
  );
}
