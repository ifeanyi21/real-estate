import React from "react";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-slate-900 p-14 text-white text-center">
      <div className="flex justify-center items-end">
        <div>
          <FaHome size={70} />
        </div>

        <div className="uppercase ml-2">
          <p className="text-2xl">Real Estate</p>
        </div>
      </div>
      <div className="mt-3">
        <address>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            incidunt architecto soluta laboriosam, perspiciatis, aspernatur
            officiis esse.
          </p>
        </address>
        <div className="text-lg">
          <div className="flex justify-center items-center mb-3">
            <FaMailBulk />
            <a
              href="mailto:support@findhouses.com"
              target="_blank"
              rel="noreferrer"
              className="text-white ml-2"
            >
              support@findhouses.com
            </a>
          </div>
          <div className="flex justify-center items-center">
            <FaPhone />
            <a
              href="tel:+456 875 369 208"
              target="_blank"
              rel="noreferrer"
              className="text-white ml-2"
            >
              +456 875 369 208
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 ">Copyright © {year} - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
