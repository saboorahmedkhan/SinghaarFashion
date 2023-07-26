import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
    <div className="text-center mb-10">
        {/* Heading */}
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Our Promotions
      </h1>
      <div className="flex mt-2 justify-center mb-10">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
        {/* Promotion starts here */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* 1st Child */}
        <div className="hero h-[25rem] promo-1 rounded-xl">
  <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get Upto <span className='text-pink-600 text-6xl animate-bounce'>50%</span> off</h1>
      <p className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">Flash Sale, Get Upto 50% off on the Season Variant </p>
    </div>
  </div>
</div>
        {/* 2nd Child */}
        <div className="hero h-[25rem] promo-2 rounded-xl">
  <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">Get Upto <span className='text-pink-600 text-6xl animate-bounce'>30%</span> off</h1>
      <p className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">Flash Sale, Get Upto 30% off on the New Arrival </p>
    </div>
  </div>
</div>
        </div>
        </div>
    </div>
    
    
  )
}

export default Promotion