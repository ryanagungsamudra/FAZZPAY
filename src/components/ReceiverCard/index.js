'use client'
import ava from '@/assets/man.png'

import axios from 'axios'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ReceiverCard() {
    // GET USER DATA WITH AXIOS
    const url = process.env.NEXT_PUBLIC_API_URL
    const userId = Cookies.get('userLogin')
    const [dataReceiver, setDataReceiver] = useState([])
    useEffect(() => {
        axios.get(`${url}/api/users/`)
            .then(res => setDataReceiver(res.data.data))
            .catch((err) => console.log(err))
    }, [url])

    return (
        dataReceiver.map((item) => {
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
                    <div key={item.id} className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                        <div className="w-[20%]">
                            {isImg()}
                            {/* <Image className="w-[60%] p-2" width={500} height={500} src={ava} alt="" /> */}
                        </div>
                        <div className="w-[45%]">
                            <h1 className="text-base font-bold">{item.full_name}</h1>
                            <p className="text-sm font-normal">Transfer</p>
                        </div>
                    </div>
                )
            }
        })
    )
}
