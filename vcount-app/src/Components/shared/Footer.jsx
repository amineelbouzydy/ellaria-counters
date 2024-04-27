import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
  <footer className="footer bg-cyan-200 text-center text-white mt-10 ">
    <div className=" pt-9 w-full">
      <div className="mb-1 w-full flex justify-center ">
        <div className='w-3/5 md:w-1/4 flex '>
        <a href='https://www.facebook.com/ELLARIASYSTEMS' className="w-1/4 flex justify-center  text-xl text-neutral-800 dark:text-neutral-200">
        <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/ellaria.systems/' className="w-1/4 flex justify-center  text-xl text-neutral-800 dark:text-neutral-200">
        <FaInstagram />
        </a>
        <a href='https://www.linkedin.com/company/ellaria-systems/' className="w-1/4 flex justify-center text-xl text-neutral-800 dark:text-neutral-200">
        <FaLinkedinIn />
        </a>
        <a  href='https://wa.link/vkjpo3' className="w-1/4 flex justify-center text-xl text-neutral-800 dark:text-neutral-200">
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
        href="mailto: info@ellariasystems.com"
      > info@ellariasystems.com</a>
    </div>
    <div
      className="bg-neutral-300 pb-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      Fix:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="tel:05235-64821"
      > 05235-64821</a>
    </div>
    
    {/* <!--Copyright section--> */}
    <div
      className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      © 2024 Copyright:
      <a
        className="text-neutral-800 dark:text-neutral-400"
        href="/"
      >Ellaria Systems</a>
    </div>
  </footer>
  );
}