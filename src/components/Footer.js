import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-white/40">
          Made by Sandeep Reehal
        </span>
        <a
          href="https://github.com/reehals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-accent transition-colors"
        >
          <AiFillGithub className="text-xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
