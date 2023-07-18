import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px]">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Our Services
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {/* Delivery */}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <Image 
          src={require("../../public/assets/pictures/van.png")}
          alt="Delivery" 
          width={100} 
          height={100} 
          className="w-20 h-20"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl capitalize">
            Fast & Free Delivery
          </h2>
          <p className="line-clamp-2 scroll-m-20 lg:text-lg text-base text-myBlackHead group-hover:text-myBlackPara/80 font-semibold tracking-tight transition-colors mt-3">
            Fast Delivery within 24-Hrs and Free Delivery on Order Above $1000
          </p>
          
        </div>
      </div>
       {/* 24/7 Services */}
       <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <Image 
          src={require("../../public/assets/pictures/customer-service.png")}
          alt="Delivery" 
          width={100} 
          height={100} 
          className="w-20 h-20"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl capitalize">
            24/7 Customer Services
          </h2>
          <p className="line-clamp-2 scroll-m-20 lg:text-lg text-base text-myBlackHead group-hover:text-myBlackPara/80 font-semibold tracking-tight transition-colors mt-3">
            For Queries Feel Free To Contact
          </p>
          
        </div>
      </div>
      {/* Money Back */}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
          <Image 
          src={require("../../public/assets/pictures/money-back.png")}
          alt="Delivery" 
          width={100} 
          height={100} 
          className="w-20 h-20"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl capitalize">
            Money Back Guarantee
          </h2>
          <p className="line-clamp-2 scroll-m-20 lg:text-lg text-base text-myBlackHead group-hover:text-myBlackPara/80 font-semibold tracking-tight transition-colors mt-3">
            Get Your Money Back On Damage and Torn Products On Delivery, Kindly Check Your Products At The Time Of Receiving, If Find Any Damage Then Take a Picture of a Product Along With Deleivery Man and Send Us.   
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Services