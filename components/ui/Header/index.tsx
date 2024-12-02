"use client";

import { SignedIn, SignedOut, useUser, useClerk } from "@clerk/nextjs";
import { FaSignOutAlt, FaHeart } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import { useThemeStore } from "../../state/themeStore";
import { FaArrowDown, FaCheck } from "react-icons/fa6";
import NextImage from "next/image";
import { themes } from "@/constants/themes";

export default function Header() {
  const { user } = useUser();
  const { openSignIn, signOut } = useClerk();
  const { theme, updateTheme } = useThemeStore();

  const links = [
    { href: "/terms", label: "Terms" },
    { href: "/social", label: "Social" },
    { href: "/about", label: "About" },
    {
      href: "/donate",
      label: "Donate",
      icon: <FaHeart className="fill-primary" />,
      className: "bg-opacity-40 btn btn-primary",
    },
  ];

  const renderLinks = (isMobile = false) =>
    links.map(({ href, label, icon, className = "btn btn-ghost" }) => (
      <a
        key={href}
        className={`${isMobile ? "" : "md:flex hidden"} ${className}`}
        href={href}
      >
        {label} {icon}
      </a>
    ));

  const renderThemeOptions = () =>
    themes.map((selectedTheme) => (
      <li key={selectedTheme} onClick={() => updateTheme(selectedTheme)}>
        <a className="text-start capitalize">
          {theme === selectedTheme && <FaCheck />}
          {selectedTheme}
        </a>
      </li>
    ));

  const renderUserAvatar = () => (
    <div className="rounded-full w-10">
      {user?.imageUrl ? (
        <NextImage alt="User Image Profile" src={user?.imageUrl} />
      ) : (
        <div className="avatar online placeholder">
          <div className="bg-neutral rounded-full w-16 text-neutral-content">
            <span className="text-xl">
              {user?.username
                ?.split(/[ ]+/)
                .map((e, i) => (i <= 2 ? e : undefined))
                .filter(Boolean)}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-base-100 shadow-2xl rounded-2xl navbar">
      <div className="flex-1 gap-1">
        <details className="flex md:hidden dropdown">
          <summary className="m-1 btn btn-circle btn-ghost">
            <BiDotsHorizontal />
          </summary>
          <ul className="z-[1] bg-base-100 shadow p-2 rounded-box w-52 dropdown-content menu">
            {renderLinks(true)}
          </ul>
        </details>
        <a className="gap-0 font-bold text-xl btn btn-ghost" href="/">
          App<span className="text-primary">Name</span>
        </a>
        {renderLinks()}
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
            {renderThemeOptions()}
          </ul>
        </div>
        <SignedIn>
          <div className="md:flex hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="a"
              className="avatar btn btn-circle btn-ghost"
            >
              {renderUserAvatar()}
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
