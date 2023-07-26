import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-10">
        {/* Heading */}
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Our Categories
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
    </div>
    {/* Categories starts from here */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
    {/* Category 1 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/tops"}>
        <Image 
        src={require("../../public/assets/pictures/top.jpg")}
        alt="Tops" 
        width={350} 
        height={350}
        className='rounded-xl duration-500 group-hover:scale-125'
        />
        <div className='hidden lg:block absolute bottom-20 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Tops</h1>
        </div>
        <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Tops</h1>
        </div>
        </Link>
    </div>
    
    {/* Category 2 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/pants"}>
        <Image 
        src={require("../../public/assets/pictures/pants1.jpg")}
        alt="Pants" 
        width={350} 
        height={350}
        className='rounded-xl duration-500 group-hover:scale-125'
        />
        <div className='hidden lg:block absolute bottom-20 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Pants</h1>
        </div>
        <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Pants</h1>
        </div>
        </Link>
    </div>
    {/* Category 3 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/accessories"}>
        <Image 
        src={require("../../public/assets/pictures/accessories.jpg")}
        alt="Accessaries & Jewellery" 
        width={350} 
        height={350}
        className='rounded-xl duration-500 group-hover:scale-125'
        />
        <div className='hidden lg:block absolute bottom-20 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Accessories & Jewellery</h1>
        </div>
        <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Accessories & Jewellery</h1>
        </div>
        </Link>
    </div>
    {/* Category 4 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/shoes"}>
        <Image 
        src={require("../../public/assets/pictures/Shoes.jpg")}
        alt="Shoes" 
        width={350} 
        height={350}
        className='rounded-xl duration-500 group-hover:scale-125'
        />
        <div className='hidden lg:block absolute bottom-20 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Shoes</h1>
        </div>
        <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Shoes</h1>
        </div>
        </Link>
    </div>
    {/* Category 5 */}
    <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/bags"}>
        <Image 
        src={require("../../public/assets/pictures/bags.jpg")}
        alt="Bags" 
        width={350} 
        height={350}
        className='rounded-xl duration-500 group-hover:scale-125'
        />
        <div className='hidden lg:block absolute bottom-20 group-hover:bottom-2 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Bags</h1>
        </div>
        <div className='block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myOrange/70 text-center text-myWhite w-full'>
            <h1 className='uppercase'>Bags</h1>
        </div>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default Categories