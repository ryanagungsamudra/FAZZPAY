'use client'
import Image from 'next/image'
import carousel from '@/assets/landingPage/1.png'
import bgPrimary from '../assets/landingPage/bg-primary.png'
import innerHero from '../assets/landingPage/png-phone.png'
import sponsored from '../assets/landingPage/sponsored.png'
import phone from '../assets/landingPage/phone.png'
import lock from '@/assets/landingPage/lock.png'
import download from '@/assets/landingPage/download.png'
import phone1section3 from '@/assets/landingPage/phone1-section3.png'
import phone2section3 from '@/assets/landingPage/phone2-section3.png'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import './globals.css'

export default function Home() {
  const navbarClass = {
    color: "navbar bg-primary/80 fixed top-0 left-0 z-50 py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-secondary",
    name: "text-secondary",
    phone: "text-secondary",
    outline: "outline outline-secondary/60 outline-2"
  }
  return (
    <>
      <Navbar navbarClass={navbarClass} />
      <div className='container'>
        {/* <Image alt='img' className='md:absolute md:-z-10' src={bgPrimary} /> */}

        {/* Section 1 start */}
        <section className='flex items-center justify-center h-[128vh] w-screen bg-cover landing-hero mt-[-4rem] md:h-[132.5vh] md:w-screen md:mt-0'>
          {/* <div className='flex flex-wrap'> */}

          <div className='md:w-1/2 md:pl-28 md:pb-[4rem]'>
            <h1 className='text-secondary font-extrabold text-[36px] text-center mt-[-15rem] md:mt-0 md:text-left md:text-[60px]'>Awesome App <br />For Saving Time.</h1>
            <p className='text-secondary font-normal pt-8 px-10 hidden md:block md:px-0 md:pt-16 md:text-[18px]'>We bring you a mobile app for banking problems that <br />oftenly wasting much of your times.</p>
            <p className='block md:hidden text-secondary font-normal pt-8 px-14 text-justify'>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
            <div className='flex flex-wrap justify-center items-center w-full md:block'>
              <div className='btn btn-primary bg-secondary text-primary px-12 mt-16'>Try It Free</div>
              <div className='md:hidden mb-[-30rem]'>
                <Image alt='img' src={innerHero} />
              </div>
            </div>
          </div>

          <div className='hidden md:block md:w-1/2 md:mt-[5.5rem]'>
            <Image alt='img' src={innerHero} />
          </div>
          {/* </div> */}
        </section>
        {/* Section 1 end */}

        {/* Section 2 start */}
        <section className='hidden md:flex items-center ml-[2rem] h-[300px] w-full rounded-2xl'>
          <Image alt='img' className='w-full' src={sponsored} />
        </section>
        <div className='md:pl-[3.5rem] bg-[#473AD1]/5 w-[98.9vw] px-[2rem]'>
          <div className="flex flex-wrap text-center pt-[6rem]">
            <h1 className="w-full text-[60px] font-extrabold"><span className="text-primary">About</span> the Application.</h1>
            <p className="w-full text-[18px] font-normal pt-4">We have some great features from the application and it’s totally free <br />to use by all users around the world.</p>
          </div>
          <div className="flex flex-wrap justify-evenly mt-[4rem]">
            <div className="w-[367px] h-[344px] bg-[#fffafa] border-2 rounded-[25px] shadow-xl flex flex-wrap items-center py-[2rem]">
              <Image alt='img' className='mx-auto' src={phone} />
              <h1 className='w-full text-center text-[24px] font-bold'>24/7 Support</h1>
              <p className='w-full text-center text-[18px] font-normal'>We have 24/7 contact support so you <br />can contact us whenever you want <br />and we will respond it.</p>
            </div>
            <div className="w-[367px] h-[344px] bg-[#fffafa] border-2 rounded-[25px] shadow-xl flex flex-wrap items-center py-[2rem]">
              <Image alt='img' className='mx-auto' src={lock} />
              <h1 className='w-full text-center text-[24px] font-bold'>Data Privacy</h1>
              <p className='w-full text-center text-[18px] font-normal'>We make sure your data is safe in our <br />database and we will encrypt any <br />data you submitted to us.</p>
            </div>
            <div className="w-[367px] h-[344px] bg-[#fffafa] border-2 rounded-[25px] shadow-xl flex flex-wrap items-center py-[2rem]">
              <Image alt='img' className='mx-auto' src={download} />
              <h1 className='w-full text-center text-[24px] font-bold'>Easy Download</h1>
              <p className='w-full text-center text-[18px] font-normal'>Zwallet is 100% totally free to use it’s <br />now available on Google Play Store <br />and App Store.</p>
            </div>
          </div>
        </div>
        {/* Section 2 end */}

        {/* Section 3 start */}
        <section className='flex flex-wrap px-[2rem] md:mt-[8rem] md:pl-[3.5rem]'>
          <div className='w-1/2 hidden md:block'>
            <Image alt='img' src={phone1section3} />
            <Image alt='img' className='-mt-[6rem]' src={phone2section3} />
          </div>
          <div className='md:w-1/2 w-full flex flex-wrap justify-center'>
            <h1 className='text-[60px] font-extrabold mt-[7rem]'>All The <span className='text-primary'>Great</span><br />FazzPay Features.</h1>

            <div className='w-full border-2 shadow-lg px-[1rem] py-[2rem] rounded-[25px] mt-[2rem]'>
              <h1 className='text-[20px] font-bold pb-[1rem]'><span className='text-primary'>1.</span> Small Fee</h1>
              <p className='text-[18px] font-normal'>We only charge 5% of every success transaction done in FazzPay app.</p>
            </div>
            <div className='w-full border-2 shadow-lg px-[1rem] py-[2rem] rounded-[25px] my-[2rem]'>
              <h1 className='text-[20px] font-bold pb-[1rem]'><span className='text-primary'>2.</span> Data Secured</h1>
              <p className='text-[18px] font-normal'>All your data is secured properly in our system and it’s encrypted.</p>
            </div>
            <div className='w-full border-2 shadow-lg px-[1rem] py-[2rem] rounded-[25px]'>
              <h1 className='text-[20px] font-bold pb-[1rem]'><span className='text-primary'>3.</span> User Friendly</h1>
              <p className='text-[18px] font-normal'>FazzPay come up with modern and sleek design and not complicated.</p>
            </div>
          </div>
        </section>
        {/* Section 3 end */}

        {/* Section 4 start */}
        <section className='text-center pt-[6rem] md:pl-[4.5rem]'>
          <h1 className='text-[60px] font-extrabold'>What Users are <span className='text-primary'>Saying.</span></h1>
          <p className='text-[18px] font-normal pt-4'>We have some great features from the application and it’s totally free <br />to use by all users around the world.</p>
          {/* Carousel start */}
          <div className="carousel my-[4rem]">
            <div id="slide1" className="carousel-item relative w-full justify-center">
              <div className="card w-[80%] h-full md:w-[55vw] rounded-[30px] bg-base-100 shadow-lg border-2">
                <figure className="px-10 pt-10">
                  <Image src={carousel} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Alex Hansinburg</h2>
                  <p>Designer</p>
                  <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle md:ml-[8rem]">❮</a>
                <a href="#slide2" className="btn btn-circle md:mr-[8rem]">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
              <div className="card w-[80%] h-full md:w-[55vw] rounded-[30px] bg-base-100 shadow-lg border-2">
                <figure className="px-10 pt-10">
                  <Image src={carousel} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Alex Hansinburg</h2>
                  <p>Designer</p>
                  <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle md:ml-[8rem]">❮</a>
                <a href="#slide3" className="btn btn-circle md:mr-[8rem]">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full justify-center">
              <div className="card w-[80%] h-full md:w-[55vw] rounded-[30px] bg-base-100 shadow-lg border-2">
                <figure className="px-10 pt-10">
                  <Image src={carousel} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Alex Hansinburg</h2>
                  <p>Designer</p>
                  <p>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle md:ml-[8rem]">❮</a>
                <a href="#slide1" className="btn btn-circle md:mr-[8rem]">❯</a>
              </div>
            </div>
          </div>
          {/* Carousel end */}
        </section>
        {/* Section 4 end */}

        {/* Footer start */}
        <div className='px-[2rem] md:pl-28 pt-[5rem] bg-primary h-[438px] w-[98.9vw]'>
          <h1 className='text-secondary text-[36px] font-bold'>FazzPay</h1>
          <p className='text-secondary/75 mt-[2rem]'>Simplify financial needs and saving <br />much time in banking needs with <br />one single app.</p>
          <div className='flex justify-between md:pr-[6rem] border-t mt-[4rem]'>
            <p className='text-secondary/90 pt-[2rem]'>2022 FazzPay. All right reserved.</p>
            <p className='text-secondary pt-[2rem]'>+62 8228 4798 890</p>
          </div>
        </div>
        {/* Footer end */}
      </div>
    </>
  )
}
