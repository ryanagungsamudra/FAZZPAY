import React from "react";
import Image from "next/image";

import dashboard from "../../assets/home/grid.png";
import transfer from "../../assets/home/arrow-up-side.svg";
import topup from "../../assets/home/plus.png";
import profile from "../../assets/home/user.png";
import logout from "../../assets/home/log-out.png";
import arrowdown from "../../assets/home/arrow-down.png";
import arrowup from "../../assets/home/arrow-up.png";
import graphic from "../../assets/home/graphic.png";
import samuel from "../../assets/samuel.png";
import spotify from "../../assets/spotify.png";
import netflix from "../../assets/netflix.png";
import boby from "../../assets/boby.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SidebarLeft from "@/components/SidebarLeft";

export default function Transfer() {
  const navbarClass = {
    color: "navbar bg-secondary/80 fixed top-0 left-0 z-50s py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-primary",
  };
  const sidebarLeftClass = {
    logout: "inline-flex w-full mt-[20rem]",
  }
  return (
    <>
      <Navbar navbarClass={navbarClass} />

      <div className="container mx-auto mt-[5rem] md:flex md:px-[6rem]">
        {/* Left Side Start */}
        <SidebarLeft sidebarLeftClass={sidebarLeftClass}/>
        {/* Left Side End */}

        {/* Right Side Start */}
        <div className="w-full md:w-[70%] md:border">
          <div className="flex items-center pl-6 pt-[2rem] md:hidden">
            <div className="w-[50%] flex-1">
              <h1>
                Hello, <br />
                <span className="font-bold">Ryan Agung Samudra</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center pl-6 w-[89vw] h-[20vh] mt-6 rounded-[20px] bg-primary mx-auto md:w-full md:h-[190px] md:justify-between md:pl-[5rem] md:hidden">
            <div className="md:w-1/2">
              <p className="w-full text-secondary font-normal text-sm pt-4 md:text-[18px]">
                Balance
              </p>
              <h1 className="w-full text-secondary font-bold text-2xl md:text-[40px] md:py-5">
                Rp120.000
              </h1>
              <p className="w-full text-secondary font-semibold text-sm pb-4 md:text-[14px]">
                +62 813-9387-7946
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] rounded-[10px] md:w-[162px] md:mb-2 md:mr-10 md:px-[0] md:bg-secondary/20 md:border-secondary md:text-secondary md:text-[18px]">
                Transfer
              </div>
              <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] rounded-[10px] md:w-[162px] md:mt-2 md:mr-10 md:px-[0] md:bg-secondary/20 md:border-secondary md:text-secondary md:text-[18px]">
                Top Up
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6 md:hidden">
            <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] mr-2 rounded-[10px]">
              Transfer
            </div>
            <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] ml-2 rounded-[10px]">
              Top Up
            </div>
          </div>
          <div className="md:flex md:mt-[2rem]">
            {/* main-center start */}
            <div className="md:w-full">
              <div>
                <h1 className="font-bold text-[18px] w-full px-[2.5rem]">
                  Search Receiver
                </h1>
                <div className="relative w-[92%] mx-auto">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="rounded-xl my-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search receiver here"
                    required
                  />
                  <button
                    type="button"
                    className="flex absolute inset-y-0 right-0 items-center pr-3"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Transaction history start */}
              <div className="flex flex-wrap pb-10">
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image className="w-[60%] p-2" src={samuel} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Samuel Suhi</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%] ">
                    <Image className="w-[60%] p-2" src={spotify} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Spotify</h1>
                    <p className="text-sm font-normal">Subscription</p>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image className="w-[60%] p-2" src={netflix} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Netflix</h1>
                    <p className="text-sm font-normal">Subscription</p>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image className="w-[60%] p-2" src={boby} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image className="w-[60%] p-2" src={boby} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image className="w-[60%] p-2" src={boby} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                </div>
              </div>
              {/* Transaction history end */}
            </div>
            {/* main-center-end */}
          </div>
        </div>
        {/* Right Side End */}
      </div>

      <Footer />
    </>
  );
}
