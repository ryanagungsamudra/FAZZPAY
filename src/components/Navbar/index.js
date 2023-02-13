import Link from 'next/link'
import React from 'react'

export default function Navbar({navbarClass}) {
  return (
    <div className={`${navbarClass.color} md:px-[6rem]`}>
        <div className="flex-1">
          <Link href='/' className={navbarClass.title}>FazzPay</Link>
        </div>
        <div className="flex-none gap-2">
          <Link href='login' className='btn btn-primary bg-primary text-secondary outline outline-1'>Login</Link>
          <Link href='signup' className='btn btn-primary bg-secondary text-primary hover:bg-slate-200 hover:text-primary'>Sign Up</Link>
          {/* Dropdown start */}
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full outline outline-secondary/60 outline-2">
                <Image src={ava} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div> */}
          {/* Dropdown end */}
        </div>
      </div>
  )
}
