"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "bg-[#ccff00]/10 text-[#ccff00] font-semibold rounded-full"
      : "text-gray-400 hover:text-white rounded-full";
  };

  return (
    <div className="navbar bg-base-100 px-6 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/workouts" className={getLinkClass("/workouts")}>
                Workouts
              </Link>
            </li>

            <li>
              <Link href="/my-plan" className={getLinkClass("/my-plan")}>
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog Logo" width={30} height={30} />
          <span className="text-xl font-bold">FITLOG</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-2 px-1">
          <li>
            <Link href="/workouts" className={getLinkClass("/workouts")}>
              Workouts
            </Link>
          </li>

          <li>
            <Link href="/my-plan" className={getLinkClass("/my-plan")}>
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-sm gap-2 font-normal">
          Plan
          <span className="badge badge-sm rounded-full border-none bg-[#ccff00] text-black">
            0
          </span>
        </button>

        <button className="btn btn-ghost btn-sm gap-2 font-normal">
          Saved
          <span className="badge badge-sm rounded-full border border-gray-500 bg-transparent text-current">
            0
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
