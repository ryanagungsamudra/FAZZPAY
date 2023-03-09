'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SidebarLeft from "@/components/SidebarLeft";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const navbarClass = {
    color: "navbar bg-secondary/80 fixed top-0 left-0 z-50s py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-primary",
    nav: "hidden",
    outline: "outline outline-primary/60 outline-2"
  };
  const sidebarLeftClass = {
    logout: "inline-flex w-full mt-[19rem]",
  }

  // GET USER DATA WITH AXIOS
  const url = process.env.NEXT_PUBLIC_API_URL
  const userLogin = Cookies.get('userLogin')

  const [userData, setUserData] = useState([])
  const [imageCurrent, setImageCurrent] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  const [image, setImage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    axios.get(`${url}/api/users/${userLogin}`)
      .then(res => {
        setUserData(res.data.data)
        setImageCurrent(`https://res.cloudinary.com/deagxiwjt/${res.data.data.img_profile}`)
      })
      .catch((err) => console.log(err))
  }, [])

  const onImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleSubmit = () => {
    const body = new FormData();
    body.append('full_name', `${firstName} ${lastName}`);
    body.append('email', email);
    body.append('phone', phone);
    body.append('img_profile', image);

    axios.patch(`${url}/api/users/${userLogin}`, body, {
      method: 'PATCH',
      headers: {
        'Content-type': 'multipart/form-data',
      }
    })
      .then(res => {
        console.log(res);
        toast.success("Edit profile success!", {
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
          window.location.reload();
        }, 1500);
      })
      .catch(err => {
        console.log(err);
        toast.error("Sorry, something was wrong", {
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
      <ToastContainer />
      <Navbar navbarClass={navbarClass} />

      <div className="container mx-auto mt-[5rem] md:flex md:px-[6rem] md:pb-10">
        {/* Left Side Start */}
        <SidebarLeft sidebarLeftClass={sidebarLeftClass} />
        {/* Left Side End */}

        {/* Right Side Start */}
        <div className="w-full md:w-[70%] mt-[2rem]">
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
          <div className="md:flex md:mt-[4rem]">
            {/* main-center start */}
            <div className="md:w-full">
              {/* Transfer detail start */}
              <div className="flex flex-wrap">
                <div className="w-[65%]">
                  <h1 className="font-bold text-[18px] w-full px-[2.5rem]">
                    Personal Information
                  </h1>
                  <p className="font-normal text-[16px] text-[#7A7886] px-[2.5rem] pt-6">
                    We got your personal information from the sign <br />up proccess. If you want to make changes on <br />your information, contact our support.
                  </p>
                </div>
                <div className="w-[35%] pl-[1rem] mt-[-1.5rem]">
                  <div className="w-full pl-[2rem]">
                    {imagePreview ? <Image src={imagePreview} width={200} height={200} className='w-[100px] h-[100px] rounded-full' alt='profile' /> : <Image src={imageCurrent} width={200} height={200} className='w-[100px] h-[100px] rounded-full' alt='profile' />}
                  </div>
                  <div className="w-full mt-[1rem]">
                    <button
                      className='btn btn-primary normal-case rounded-2xl'
                      type='file'
                      onClick={() => document.querySelector(".input-field").click()}>
                      Choose from gallery
                    </button>
                    <input type='file' className='input-field' multiple hidden onChange={(e) => onImageUpload(e)} />
                  </div>
                </div>
              </div>

              {/* Details start */}
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">First Name</p>
                <input
                  type="text"
                  placeholder="Enter your firstname here"
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  onChange={(e) => setFirstName(e.target.value)}
                  defaultValue={userData.full_name}
                />
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">
                  Last Name
                </p>
                <input
                  type="text"
                  placeholder="Enter your lastname here"
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">
                  Verified E-mail
                </p>
                <input
                  type="email"
                  defaultValue={userData.email}
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="px-[1.5rem] mx-6 py-4 mt-6 border-2 rounded-[10px]">
                <p className="text-[#7A7886] font-normal text-base">Phone Number</p>
                <input
                  type="number"
                  defaultValue={userData.phone}
                  className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full font-medium text-[18px]"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Details end */}

              <button
                className="btn btn-primary bg-primary normal-case mt-6 flex w-[90%] mb-8 rounded-2xl mx-auto md:ml-[38rem] md:w-1/6 md:mt-12"
                onClick={handleSubmit}>
                Save
              </button>

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
