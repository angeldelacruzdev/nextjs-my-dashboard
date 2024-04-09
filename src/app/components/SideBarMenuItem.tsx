"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SideBarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  sibTitle: string;
}

export const SideBarMenuItem = ({
  path,
  icon,
  title,
  sibTitle,
}: SideBarMenuItemProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${
        currentPath === path ? "bg-blue-800" : ""
      } hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {sibTitle}
        </span>
      </div>
    </Link>
  );
};
