import React from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/images";
import { NAV_LINKS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="absolute w-full padding-container py-5 z-50">
      <div className="flexBetween max-container">
        <Link href="/" className="flexCenter gap-3 ">
          <Image src={logo} alt="Logo WNC" width={48} height={48} />
          <span className="font-bold text-xl text-biru-700">Wash & Care</span>
        </Link>
        <div className="hidden lg:flexBetween gap-14">
          <ul className="flexBetween gap-6 font-semibold text-white text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="rounded-32 bg-white bg-opacity-25 border border-white border-opacity-40 py-2 px-4 hover:bg-opacity-40"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Link
            href="/"
            className="py-3 px-6 rounded-32 bg-hijau-200 text-hijau-700 font-semibold text-sm hover:bg-green-200"
          >
            Sign Up
          </Link>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="text-biru-700 w-7 h-7 lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
