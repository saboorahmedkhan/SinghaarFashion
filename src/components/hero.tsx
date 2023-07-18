import React from 'react'
import { Button } from './ui/button'
import {FaBagShopping} from "react-icons/fa6"

const Hero = () => {
  return (
    <div className='mb-[100px]'>
        <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat rounded-2xl">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Futuristic <span className='text-pink-600 animate-bounce'>Clothes</span></h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">Upgrade Your Wardrobe with Sleek & Stylish Apparels and Top-Notch Shoes & Bags.</p>
      <Button className='rounded-md bg-myOrange outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myBlackPara'>
      <FaBagShopping className="text-myWhite mr-2 h-6 w-6 group-hover:text-myBlackHead group-hover:animate-bounce" /> Shop Now
    </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero