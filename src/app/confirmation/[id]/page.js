'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

import ava from '@/assets/man.png'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SidebarLeft from "@/components/SidebarLeft";
import { redirect, usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RupiahCurrencyInput } from "@/components/RupiahCurrencyInput";
import { _renderCurrency } from "@/utils/Currency/number";

export default function Confirmation() {
  const navbarClass = {
    color: "navbar bg-secondary/80 fixed top-0 left-0 z-50s py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-primary",
    nav: "hidden",
    outline: "outline outline-primary/60 outline-2"
  };
  const sidebarLeftClass = {
    logout: "inline-flex w-full mt-[23rem]",
  }

  // Get id params (sama kaya useParams() di reactJS)
  const path = usePathname();
  const id = path.split('/')[2]
  // console.log(id);

  // GET USER DATA WITH AXIOS
  const url = process.env.NEXT_PUBLIC_API_URL
  const userLogin = Cookies.get('userLogin')
  const router = useRouter();

  const [dataReceiver, setDataReceiver] = useState([])
  const [profileImg, setProfileImg] = useState([])
  const [imageStatus, setImgStatus] = useState([])
  const [getBalance, setGetBalance] = useState([])
  const [senderData, setSenderData] = useState([])
  const [senderName, setSenderName] = useState('')
  const [receiverName, setReceiverName] = useState('')

  // Receiver data load
  useEffect(() => {
    axios.get(`${url}/api/users/${id}`)
      .then(res => {
        setDataReceiver(res.data.data)
        setProfileImg(`${url}/uploads/images/${res.data.data.img_profile}`)
        setImgStatus(res.data.data.img_profile)
        setReceiverName(res.data.data.full_name)
      })
      .catch((err) => console.log(err))
  }, [id, url])
  const isImg = () => {
    if (imageStatus === undefined || imageStatus === null) {
      return (
        <Image className="w-[60%] p-2" width={500} height={500} src={ava} alt="" />
      )
    } else {
      return (
        <Image className="w-[60%] p-2" width={500} height={500} src={profileImg} alt="" />
      )
    }
  }
  // Sender data load (balance)
  useEffect(() => {
    axios.get(`${url}/api/users/${userLogin}`)
      .then(res => {
        setGetBalance(res.data.data.balance)
        setSenderData(res.data.data)
        setSenderName(res.data.data.full_name)
        // setReceiverName(res.data.data.full_name)
      })
      .catch((err) => console.log(err))
  }, [url, userLogin])

  // Get current date local start
  const date = new Date()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear()
  let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  let currentDate = `${day} ${month} ${year} - ${time}`;
  // Get current date local end

  // Update data and sending data transfer
  const [currencyValue, setCurrencyValue] = useState(0)
  const [transferNote, setTransferNote] = useState('')
  const handleTransfer = async (event) => {
    event.preventDefault()
    const dataTransfer = {
      sender_id: userLogin,
      receiver_id: id,
      amount: currencyValue,
      sender_name: senderName,
      receiver_name: receiverName,
      status: 'Transfer',
      time: currentDate,
      note: transferNote,
    }
    return await axios({
      url: `${url}/api/transaction`,
      method: 'POST',
      data: dataTransfer
    }).then((res) => {
      Cookies.set('transfer_note', transferNote)
      toast.success("Please wait, your transaction on progress...", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        router.push(`confirmation/${id}/status`);
      }, 1500);
    }).catch((err) => {
      console.log(err);
      toast.error("Sorry transaction error", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    })
  }

  // Private route
  const isLogin = Cookies.get('userLogin')
  if (!isLogin || isLogin == null || isLogin == undefined) {
    redirect('/login')
  }
  return (
    <>
      <ToastContainer limit={1} />
      <Navbar navbarClass={navbarClass} />

      <div className="container mx-auto mt-[5rem] md:flex md:px-[6rem] md:pb-10">
        {/* Left Side Start */}
        <SidebarLeft sidebarLeftClass={sidebarLeftClass} />
        {/* Left Side End */}

        {/* Right Side Start */}
        <div className="w-full md:w-[70%] mt-[3rem]">
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
            <form onSubmit={handleTransfer} className="md:w-full">
              {/* Transfer detail start */}
              <h1 className="font-bold text-[18px] w-full px-[2.5rem]">
                Transfer to
              </h1>

              <div className="flex flex-wrap pb-[1.5rem] mt-[1.5rem] mx-6">
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    {isImg()}
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">{dataReceiver.full_name}</h1>
                    <p className="text-sm font-normal">{dataReceiver.phone}</p>
                  </div>
                </div>
              </div>

              {/* Details start */}
              <h1 className="font-bold text-[18px] w-full px-[2.5rem]">
                Details
              </h1>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base pb-2">Amount</p>
                <RupiahCurrencyInput
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  value={currencyValue}
                  onChange={(e) => setCurrencyValue(e)}
                />
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base pb-2">
                  Balance Left
                </p>
                <p className="font-medium text-[18px]">{_renderCurrency(getBalance)}</p>
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base pb-2">
                  Date & Time
                </p>
                <div className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]">
                  {currentDate}
                </div>
                {/* <input
                  type="datetime-local"
                  placeholder="Enter date & time"
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  onChange={(e) => setTransferForm({
                    ...transferForm,
                    time: e.target.value
                  })}
                /> */}
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base pb-2">Notes</p>
                {/* <p className="font-medium text-[18px]">For buying some socks</p> */}
                <input
                  type="text"
                  placeholder="Add some note?"
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  onChange={(e) => setTransferNote(e.target.value)}
                />
              </div>
              {/* Details end */}

              <button type="submit" className="btn btn-primary bg-primary normal-case mt-6 flex w-[90%] mb-8 rounded-2xl mx-auto md:ml-[38rem] md:w-1/6 md:mt-12">
                Confirm
              </button>

              {/* Transfer detail end */}
            </form>
            {/* main-center-end */}
          </div>
        </div>
        {/* Right Side End */}
      </div>

      <Footer />
    </>
  );
}
