'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dashboard from "../../assets/home/grid.svg";
import transfer from "../../assets/home/arrow-up-side.svg";
import topup from "../../assets/home/plus.png";
import profile from "../../assets/home/user.png";
import logout from "../../assets/home/log-out.png";

import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { RupiahNumericInput } from "../RupiahNumericInput";
import { RupiahCurrencyInput } from "../RupiahCurrencyInput";

export default function SidebarLeft({ sidebarLeftClass }) {
  // USER TOP UP BALANCE WITH AXIOS
  const url = process.env.NEXT_PUBLIC_API_URL
  const userId = Cookies.get('userLogin')
  const router = useRouter();

  const [currencyValue, setCurrencyValue] = useState(0)

  const handleTopUp = async (event) => {
    event.preventDefault()
    const dataTopUp = {
      amount: currencyValue
    }
    return await axios({
      url: `${url}/api/transaction/${userId}`,
      method: 'PATCH',
      data: dataTopUp
    }).then((res) => {
      // console.log(res.data.data);
      toast.success('Top up success!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        // router.push('/home');
        window.location.reload();
      }, 1500);
    }).catch((err) => {
      console.log(err);
      toast.error('Sorry top up failed!', {
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

  return (
    <>
      <ToastContainer transition={Zoom} />
      <div className="hidden md:block md:w-[25%] md:shadow-lg md:pl-[1.5rem] md:pr-4 md:mt-[3.5rem] md:border-2 md:rounded-[20px]">
        <div className="inline-flex w-full mt-[4.5rem]">
          <Image src={dashboard} alt="" />
          <Link href='/home' className="text-lg font-bold ml-8 cursor-pointer hover:text-primary">Dashboard</Link>
        </div>

        <div className="inline-flex w-full py-[2.5rem]">
          <Image src={transfer} alt="" />
          <Link href='/transfer' className="text-lg font-bold ml-8 cursor-pointer hover:text-primary">Transfer</Link>
        </div>

        <div className="inline-flex w-full">
          <Image src={topup} alt="" />
          <label
            htmlFor="my-modal-3"
            className="text-lg font-bold ml-8 cursor-pointer hover:text-primary"
          >
            Top Up
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          {/* Modal start */}
          <form onSubmit={handleTopUp} className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">Top Up</h3>
              <p className="py-4">Enter the amount of money, and click submit</p>
              <RupiahCurrencyInput
                value={currencyValue}
                onChange={(value) => setCurrencyValue(() => value)}
                // className="border rounded-2xl placeholder:px-4 py-4 w-full"
                className="rounded-lg px-3 py-2 shadow text-lg text-primary font-medium"
              />
              <button type="submit" className="btn btn-primary bg-primary px-4 rounded-2xl normal-case ml-[24rem] mt-6">Submit</button>
            </div>
          </form>
          {/* Modal End */}
        </div>

        <div className="inline-flex w-full py-[2.5rem]">
          <Image src={profile} alt="" />
          <Link href='/profile' className="text-lg font-bold ml-8 cursor-pointer hover:text-primary">Profile</Link>
        </div>

      </div>
    </>
  );
}
