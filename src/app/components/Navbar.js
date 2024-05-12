import React from "react";
import { FaInfinity } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div class="px-[80px] bg-black">
      <header>
        <nav
          class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-black
        "
        >
          <div>
            <a href="#" class="flex justify-center items-center">
              <FaInfinity size={30} />
              Anime.
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            class="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <a
                  class="md:p-4 py-2 block hover:text-purple-400 uppercase"
                  href="#home"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  class="md:p-4 py-2 block hover:text-purple-400 uppercase"
                  href="#anime"
                >
                  anime
                </a>
              </li>
              <li>
                <a
                  class="md:p-4 py-2 block hover:text-purple-400 uppercase"
                  href="#action"
                >
                  action
                </a>
              </li>
              <li>
                <a
                  class="md:p-4 py-2 block hover:text-purple-400 uppercase"
                  href="#child"
                >
                  child
                </a>
              </li>
              <li>
                <a
                  class="md:p-4 py-2 block hover:text-purple-400 uppercase"
                  href="#family"
                >
                  family
                </a>
              </li>
            </ul>
          </div>
          <div class="nav-icons flex gap-[20px]">
            <FaBars />
            <FaSearch />
            <FaHeart />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
