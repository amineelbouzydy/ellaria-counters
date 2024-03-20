import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
  <footer className="footer bg-cyan-200 text-center text-white ">
    <div className=" pt-9 w-full">
      <div className="mb-1 w-full flex justify-center ">
        <div className='w-3/5 md:w-1/4 flex '>
        <a className="w-1/4 flex justify-center  text-xl text-neutral-800 dark:text-neutral-200">
        <FaFacebookF />
        </a>
        <a className="w-1/4 flex justify-center  text-xl text-neutral-800 dark:text-neutral-200">
        <FaInstagram />
        </a>
        <a className="w-1/4 flex justify-center text-xl text-neutral-800 dark:text-neutral-200">
        <FaLinkedinIn />
        </a>
        <a className="w-1/4 flex justify-center text-xl text-neutral-800 dark:text-neutral-200">
        <FaWhatsapp />
        </a>
        </div>
      </div>
    </div>
    <div
      className="bg-neutral-300 p-3 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      Email:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://tw-elements.com/"
      > info@ellariasystems.com</a>
    </div>
    <div
      className="bg-neutral-300 pb-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      Fix:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://tw-elements.com/"
      > 05235-64821</a>
    </div>
    
    {/* <!--Copyright section--> */}
    <div
      className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      © 2023 Copyright:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="https://tw-elements.com/"
      >TW Elements</a>
    </div>
  </footer>
  );
}