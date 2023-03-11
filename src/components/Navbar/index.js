'use client'
import Image from 'next/image'
import Link from 'next/link'
import ava from '@/assets/man.png'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Navbar({ navbarClass }) {
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_API_URL
  const urlImage = process.env.NEXT_PUBLIC_API_IMG
  const [imgStatus, setImgStatus] = useState([])
  const [imgUser, setImgUser] = useState([])
  const [dataUser, setDataUser] = useState([])
  const id_user = Cookies.get('userLogin')
  const userFullName = Cookies.get('userFullName')
  const userPhoneNumber = Cookies.get('userPhoneNumber')

  // get data user
  useEffect(() => {
    axios.get(`${url}/api/users/${id_user}`)
      .then(res => {
        setDataUser(res.data.data)
        setImgStatus(res.data.data.img_profile)
        setImgUser(`${urlImage}/${res.data.data.img_profile}`);
      })
      .catch((err) => console.log(err))
  }, [url, id_user])

  const isImg = () => {
    if (imgStatus === undefined || imgStatus === null) {
      return (
        <Image width={500} height={500} src={ava} alt="" />
      )
    } else {
      return (
        <Image width={500} height={500} src={imgUser} alt="" />
      )
    }
  }
  return (
    <div className={`${navbarClass.color} md:px-[6rem] drop-shadow-xl z-[9999]`}>
      <div className="flex-1">
        <Link href='/' className={navbarClass.title}>FazzPay</Link>
        <div className={`hidden md:flex ${navbarClass.nav}`}>
          <Link href='/home' className='text-secondary text-base font-semibold pt-2 pl-[1rem] hover:text-gray-700'>Dashboard</Link>
          <Link href='/transfer' className='text-secondary text-base font-semibold pt-2 px-8 hover:text-gray-700'>Transfer</Link>
          <Link href='/history' className='text-secondary text-base font-semibold pt-2 hover:text-gray-700'>History</Link>
        </div>
      </div>
      <div className="flex-none gap-2">
        {Cookies.get('userLogin') ?
          (
            <>
              <div className='flex flex-wrap text-end'>
                <h1 className={`w-full text-lg font-semibold ${navbarClass.name}`}>{dataUser.full_name}</h1>
                <p className={`w-full text-sm font-normal ${navbarClass.phone}`}>{dataUser.phone}</p>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className={`w-10 rounded-full ${navbarClass.outline}`}>
                    {isImg()}
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 menu menu-compact dropdown-content bg-base-100 rounded-box w-40 shadow-lg border-2">
                  <li>
                    <a className="justify-between" onClick={() => {
                      router.push('/profile')
                    }}>
                      Profile
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li>
                    <a onClick={() => {
                      Cookies.remove('userLogin');
                      Cookies.remove('userFullName')
                      Cookies.remove('userPhoneNumber')
                      router.push('/');
                    }}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
          :
          (
            <>
              <Link href='login' className='btn btn-primary bg-primary text-secondary outline outline-1'>Login</Link>
              <Link href='signup' className='btn btn-primary bg-secondary text-primary hover:bg-slate-200 hover:text-primary'>Sign Up</Link>
            </>
          )
        }
      </div>
    </div>
  )
}
