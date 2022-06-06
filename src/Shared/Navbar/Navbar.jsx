import React from "react";
import "./Navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsHandbag } from "react-icons/bs";
import Logo from "../../Asset/Icon/DeviciLogo.jpg";

const Navbar = () => {
  return (
    <div class="navbar container h-20 mx-auto bg-transparent">
      <div class="navbar-start flex-shrink">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-md font-semibold" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-md font-semibold" href="/">
                Product
              </a>
            </li>
            <li>
              <a className="text-md font-semibold" href="/">
                Log In
              </a>
            </li>
            <li>
              <a className="text-md font-semibold" href="/">
                About
              </a>
            </li>
            <li className="flex flex-row">
              <button class="btn inline-block btn-ghost btn-circle">
                <AiOutlineHeart className="text-2xl" />
              </button>
              <button class="btn inline-block btn-ghost btn-circle">
                <TbArrowsShuffle className="text-2xl" />
              </button>
              <button class="btn inline-block btn-ghost btn-circle bag-icon">
                <BsHandbag className="text-2xl" />
                <span className="bg_primary rounded-full text-white w-6 h-6 text-xs p-1 product-in-cart">
                  2
                </span>
              </button>
            </li>
          </ul>
        </div>
        <a
          className="text-md font-semibold"
          href="/"
          class="btn btn-ghost normal-case text-md"
        >
          <img className="h-9" src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-end ">
        <div class="  lg:hidden">
          <button class="btn btn-ghost lg:hidden  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a className="text-md font-semibold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-md font-semibold" href="/">
              Product
            </a>
          </li>
          <li>
            <a className="text-md font-semibold" href="/">
              Log In
            </a>
          </li>
          <li>
            <a className="text-md font-semibold" href="/">
              About
            </a>
          </li>
        </ul>
      </div>
      <div class="lg:navbar-end shrink-0">
        <div class="form-control hidden lg:inline-block">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered rounded-sm"
          />
        </div>
        <button class="btn hidden lg:inline-block rounded-none bg-black text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="ml-5 hidden lg:inline-block">
          <button class="btn btn-ghost btn-circle">
            <AiOutlineHeart className="text-2xl" />
          </button>
          <button class="btn btn-ghost btn-circle">
            <TbArrowsShuffle className="text-2xl" />
          </button>
          <button class="btn btn-ghost btn-circle bag-icon">
            <BsHandbag className="text-2xl" />
            <span className="bg_primary rounded-full text-white w-6 h-6 text-xs p-1 product-in-cart">
              2
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
