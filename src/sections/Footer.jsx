import { logo } from "@/assets/images";
import { FOOTER_LINKS } from "@/constants";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container padding-container mt-[120px] mb-8">
      <div className="flex items-start justify-between flex-wrap ">
        {/* left */}
        <div className="text-start max-w-80 mb-14 ">
          <Link href="/" className="flexStart gap-3 ">
            <Image src={logo} alt="Logo WNC" className="w-12 h-12" />
            <span className="font-bold text-xl text-biru-700">Wash & Care</span>
          </Link>
          <p className="text-sm text-biru-100 mt-6 mb-10 leading-6">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flexStart gap-6">
            <FontAwesomeIcon icon={faFacebookF} width={32} height={32} />
            <FontAwesomeIcon icon={faInstagram} width={32} height={32} />
            <FontAwesomeIcon icon={faTwitter} width={32} height={32} />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-wrap gap-x-20 gap-y-10 ">
          {FOOTER_LINKS.map((item) => (
            <div className="h-auto">
              <h4
                key={item.type}
                className="font-semibold text-biru-700 text-lg capitalize"
              >
                {item.type}
              </h4>
              {item.link.map((item) => (
                <div className="flex flex-col capitalize " key={item.key}>
                  <a href={item.href} className="mt-4 text-sm text-biru-100 ">
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="border-b border-gray-300 mt-6 mb-3" />
      <span className="text-biru-200">2024 | Reza Ganteng</span>
    </footer>
  );
};

export default Footer;
