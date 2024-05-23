"use client";
import React, { useEffect, useState } from "react";
import { logo } from "@/assets/images";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS_2 } from "@/constants";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav && !e.target.closest(".navbar")) {
        setNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nav]);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full padding-container fixed py-2 shadow-lg bg-white z-50 ease-in-out transition-all duration-300 ${
          scroll ? "" : "py-5 shadow-none"
        }`}
      >
        <div className="flexBetween max-container">
          <Link href="/" className="flexCenter gap-3 ">
            <Image src={logo} alt="Logo WNC" className="h-12 w-12" />
            <span className="font-bold text-xl text-biru-700">Wash & Care</span>
          </Link>
          <ul className="hidden lg:flex gap-6 text-biru-700">
            {NAV_LINKS_2.map((link) => (
              <li className="cursor-pointer" key={link.key}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <FontAwesomeIcon
            onClick={handleNav}
            icon={faBars}
            className="text-biru-700 w-7 h-7 lg:hidden cursor-pointer"
          />
        </div>
      </nav>
      {/* Nav mobile */}
      <nav
        className={
          nav
            ? "fixed top-0 left-0 right-0 w-full h-fit shadow-lg bg-white z-50 ease-in-out transition-all duration-300"
            : "ease-in-out transition-all duration-300 fixed left-0 right-0 top-[-100%]"
        }
      >
        <div className="padding-container max-container">
          <div className="flexBetween py-5">
            <Link href="/" className="flexCenter gap-3 ">
              <Image src={logo} alt="Logo WNC" className="w-12 h-12" />
              <span className="font-bold text-xl text-biru-700">
                Wash & Care
              </span>
            </Link>
            <FontAwesomeIcon
              onClick={handleNav}
              icon={faXmark}
              className="text-biru-700 w-7 h-7 lg:hidden cursor-pointer"
            />
          </div>
          <div className=" mb-10 w-full h-[50vh]">
            <ul className="flex items-center justify-evenly h-full flex-col font-semibold text-biru-700 text-lg">
              {NAV_LINKS_2.map((link) => (
                <li className="cursor-pointer" key={link.key}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
