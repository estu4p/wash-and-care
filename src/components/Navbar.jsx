"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/images";
import { NAV_LINKS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
    if (window.scrollY > 20) {
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
      {/* nav */}
      <nav
        className={`w-full padding-container z-40 navbar ${
          scroll
            ? "fixed py-2 bg-biru-300 bg-opacity-40 backdrop-filter backdrop-blur-xl"
            : "bg-transparent absolute py-5"
        }`}
      >
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
            {/*             
            <Link
              href="/"
              className="py-3 px-6 rounded-32 bg-blue-200 bg-opacity-60 text-white font-semibold text-sm hover:bg-green-200"
            >
              Sign Up
            </Link> */}
          </div>
          <FontAwesomeIcon
            onClick={handleNav}
            icon={faBars}
            className="text-biru-700 w-7 h-7 lg:hidden"
          />
        </div>
      </nav>
      {/* Nav mobile */}
      <nav
        className={
          nav
            ? "fixed top-0 left-0 right-0 w-full min-h-1/2 shadow-lg bg-blue-100 z-50 ease-in-out transition-all duration-300 bg-opacity-40 backdrop-filter backdrop-blur-xl"
            : "ease-in-out transition-all duration-300 fixed left-0 right-0 top-[-100%]"
        }
      >
        <div className="padding-container max-container">
          <div className="flexBetween py-5">
            <Link href="/" className="flexCenter gap-3 ">
              <Image src={logo} alt="Logo WNC" width={48} height={48} />
              <span className="font-bold text-xl text-biru-700">
                Wash & Care
              </span>
            </Link>
            <FontAwesomeIcon
              onClick={handleNav}
              icon={faXmark}
              className="text-biru-700 w-7 h-7 lg:hidden"
            />
          </div>
          <div className="flex flex-col gap-6 mt-6 mb-10">
            <div className="flexBetween flex-col gap-14">
              <ul className="flexBetween flex-col gap-4 font-semibold text-biru-700 text-sm">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="rounded-32 bg-white bg-opacity-25 border border-blue-400 border-opacity-40 py-2 px-4 hover:bg-opacity-40"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
              {/* <Link
                href="/"
                className="py-3 px-6 rounded-32 bg-hijau-200 border border-blue-800 text-biru-700 font-semibold text-sm hover:bg-green-200"
              >
                Sign Up
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
