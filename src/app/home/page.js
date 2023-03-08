'use client'
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import SidebarLeft from "@/components/SidebarLeft";
import { redirect, useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import axios from "axios";
import { _renderCurrency } from "@/utils/Currency/number";

export default function Home() {
  const navbarClass = {
    color: "navbar bg-secondary/80 fixed top-0 left-0 z-50s py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-primary",
    nav: "hidden",
    outline: "outline outline-primary/60 outline-2"
  };
  const route = useRouter()

  // GET USER DATA WITH AXIOS
  const url = process.env.NEXT_PUBLIC_API_URL
  const userId = Cookies.get('userLogin')
  const [dataUser, setDataUser] = useState([])
  useEffect(() => {
    axios.get(`${url}/api/users/${userId}`)
      .then(res => setDataUser(res.data.data))
      .catch((err) => console.log(err))
  }, [url, userId])

  // Private route
  const isLogin = Cookies.get('userLogin')
  if (!isLogin || isLogin == null || isLogin == undefined) {
    redirect('/login')
  }
  return (
    <>
      <Navbar navbarClass={navbarClass} />
      <div className="container mx-auto mt-[5rem] md:flex md:px-[6rem] md:pb-[2rem]">

        {/* Left Side Start */}
        <SidebarLeft />
        {/* Left Side End */}

        {/* Right Side Start */}
        <div className="w-full md:w-[70%]">
          <div className="flex items-center pl-6 pt-[2rem] md:hidden">
            <div className="w-[50%] flex-1">
              <h1>
                Hello, <br />
                <span className="font-bold">Ryan Agung Samudra</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center ml-6 w-full h-[20vh] mt-14 rounded-[20px] bg-primary mx-auto md:w-full md:h-[190px] md:justify-between md:pl-[5rem]">
            <div className="md:w-1/2">
              <p className="w-full text-secondary font-normal text-sm pt-4 md:text-[18px]">
                Balance
              </p>
              <h1 className="w-full text-secondary font-bold text-2xl md:text-[40px] md:py-5">
                {`${_renderCurrency(dataUser.balance)}`}
              </h1>
              <p className="w-full text-secondary font-semibold text-sm pb-4 md:text-[14px]">
                {dataUser.phone}
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <div onClick={() => { route.push('/transfer') }} className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] rounded-[10px] md:w-[162px] md:mb-2 md:mr-10 md:px-[0] md:bg-secondary/20 md:border-secondary md:text-secondary md:text-[18px]">
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
          <div className="w-full md:flex md:mt-[1.5rem] md:border-2 md:rounded-[20px] md:ml-6 md:pr-8 md:shadow-lg">
            {/* main-center start */}
            <div className="hidden md:block md:w-1/2 md:text-center mt-[2.3rem]">
              <div className="flex">
                <div className="w-1/2">
                  <Image className="mx-auto" src={arrowdown} alt="" />
                  <p>Income</p>
                  <p>{`${_renderCurrency(dataUser.income)}`}</p>
                </div>
                <div className="w-1/2">
                  <Image className="mx-auto" src={arrowup} alt="" />
                  <p>Expense</p>
                  <p>{`${_renderCurrency(dataUser.expense)}`}</p>
                </div>
              </div>
              <Image className="pt-[4rem] pl-[2rem]" src={graphic} alt="" />
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-between px-8 pt-8">
                <h1 className="font-bold text-[18px]">Transaction History</h1>
                <Link href='/history' className="font-semibold text-[14px] text-primary">
                  See all
                </Link>
              </div>
              {/* Transaction history start */}
              <div className="flex flex-wrap pb-10">

                <div className="flex items-center py-6 pl-6 pr-6 shadow-lg w-full">
                  <div className="w-[20%]">
                    <Image className="w-[70%]" src={samuel} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Samuel Suhi</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                  <div className="w-[40%]">
                    <h1 className="text-lg font-bold text-end text-[#1EC15F]">
                      {`+${_renderCurrency(50000)}`}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center py-6 pl-6 pr-6 shadow-lg w-full">
                  <div className="w-[20%]">
                    <Image className="w-[70%]" src={spotify} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Spotify</h1>
                    <p className="text-sm font-normal">Subscription</p>
                  </div>
                  <div className="w-[40%]">
                    <h1 className="text-lg font-bold text-end text-[#FF5B37]">
                      {`-${_renderCurrency(49000)}`}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center py-6 pl-6 pr-6 shadow-lg w-full">
                  <div className="w-[20%]">
                    <Image className="w-[70%]" src={netflix} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Netflix</h1>
                    <p className="text-sm font-normal">Subscription</p>
                  </div>
                  <div className="w-[40%]">
                    <h1 className="text-lg font-bold text-end text-[#FF5B37]">
                      {`-${_renderCurrency(149000)}`}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center py-6 pl-6 pr-6 shadow-lg w-full">
                  <div className="w-[20%]">
                    <Image className="w-[70%]" src={boby} alt="" />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                  <div className="w-[40%]">
                    <h1 className="text-lg font-bold text-end text-[#1EC15F]">
                      {`+${_renderCurrency(1150000)}`}
                    </h1>
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
