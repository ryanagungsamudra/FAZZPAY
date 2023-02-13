'use client'
import React from "react";
import Image from "next/image";

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
import { redirect } from "next/navigation";

export default function Confirmation() {
  const navbarClass = {
    color: "navbar bg-secondary/80 fixed top-0 left-0 z-50s py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-primary",
  };
  const sidebarLeftClass = {
    logout: "inline-flex w-full mt-[23rem]",
  }
  // Private route
  const isLogin = localStorage.getItem('@userLogin')
  if (!isLogin || isLogin == null || isLogin == undefined) {
    redirect('/')
  }
  return (
    <>
      <Navbar navbarClass={navbarClass} />

      <div className="container mx-auto mt-[5rem] md:flex md:px-[6rem] md:pb-10">
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
              {/* Transfer detail start */}
              <h1 className="font-bold text-[18px] w-full px-[2.5rem]">
                Transfer to
              </h1>

              <div className="flex flex-wrap pb-[1.5rem] mt-[1.5rem] mx-6">
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image className="w-[60%] p-2" src={samuel} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Samuel Suhi</h1>
                    <p className="text-sm font-normal">+62 813-8492-9994</p>
                  </div>
                </div>
              </div>

              {/* Details start */}
              <h1 className="font-bold text-[18px] w-full px-[2.5rem]">
                Details
              </h1>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">Amount</p>
                <p className="font-medium text-[18px]">Rp100.000</p>
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">
                  Balance Left
                </p>
                <p className="font-medium text-[18px]">Rp20.000</p>
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">
                  Date & Time
                </p>
                <p className="font-medium text-[18px]">May 11, 2020 - 12.20</p>
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">Notes</p>
                <p className="font-medium text-[18px]">For buying some socks</p>
              </div>
              {/* Details end */}

              <div className="btn btn-primary bg-primary normal-case mt-6 flex w-[90%] mb-8 rounded-2xl mx-auto md:ml-[38rem] md:w-1/6 md:mt-12">
                <p>Confirm</p>
              </div>

              {/* Transfer detail end */}
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
