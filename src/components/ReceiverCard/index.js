'use client'
import ava from '@/assets/man.png'

import axios from 'axios'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function ReceiverCard() {
    // GET USER DATA WITH AXIOS
    const url = process.env.NEXT_PUBLIC_API_URL
    const userId = Cookies.get('userLogin')
    const [dataReceiver, setDataReceiver] = useState([])
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        loadUserData()
    }, [keyword])

    const loadUserData = async () => {
        return axios
            .get(`${url}/api/users?search=${keyword}`)
            .then(res => setDataReceiver(res.data.data))
            .catch((err) => console.log(err))
    }

    return (
        <>
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
                    onChange={(e) => setKeyword(e.target.value)}
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

            <div className="flex flex-wrap">
                {dataReceiver.map((item) => {
                    if (userId !== item.id) {
                        const img = `${url}/uploads/images/${item.img_profile}`
                        const isImg = () => {
                            if (item.img_profile === undefined || item.img_profile === null) {
                                return (
                                    <Image className="w-[60%] p-2" width={500} height={500} src={ava} alt="" />
                                )
                            } else {
                                return (
                                    <Image className="w-[60%] p-2" width={500} height={500} src={img} alt="" />
                                )
                            }
                        }
                        return (
                            <Link href={`/confirmation/${item.id}`} key={item.id} className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 cursor-pointer hover:border-primary/30 hover:shadow-lg hover:border-2 md:shadow-none">
                                <div className="w-[20%]">
                                    {isImg()}
                                    {/* <Image className="w-[60%] p-2" width={500} height={500} src={ava} alt="" /> */}
                                </div>
                                <div className="w-[45%]">
                                    <h1 className="text-base font-bold">{item.full_name}</h1>
                                    <p className="text-sm font-normal">Transfer</p>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </>
    )
}
