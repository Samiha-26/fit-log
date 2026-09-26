import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-10 px-4 py-6">
      <div className="grid grid-cols-1 items-center gap-4 border-t border-gray-800 pt-6 md:grid-cols-2">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <Image src={logo} alt="logo" width={30} height={30} />
          <h1 className="font-bold text-white">FITLOG</h1>
        </div>

        <div className="text-center text-sm text-gray-500 md:text-right">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;