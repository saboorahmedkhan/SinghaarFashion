"use client";
import Image from 'next/image';
import React, {useState} from 'react';

const SlugComponents = () => {
    const [path, setpath] = useState("")
  return (
    <div>
      <Image 
      src={path ? path: "/assets/pictures/bestselling1.jpg"}
      alt="Plain Green Top" 
      height={400} 
      width={400}/>
      <div className='flex items-center justify-evenly mx-auto mt-2'>
        <div>
          <Image className='cursor-pointer width-16 h-16'
          src={"/assets/pictures/teashirt1.jpg"} 
          alt="abc" 
          height={60} 
          width={60}
          onClick={()=>setpath("/assets/pictures/teashirt1.jpg")}
          />
        </div>
        <div>
          <Image className='cursor-pointer width-16 h-16'
          src={"/assets/pictures/bestselling1.jpg"} 
          alt="abc" 
          height={60} 
          width={60}
          onClick={()=>setpath("/assets/pictures/bestselling1.jpg")}
          />
        </div>
        <div>
          <Image className='cursor-pointer width-16 h-16'
          src={"/assets/pictures/Denim Blue faded shirt.jpg"} 
          alt="abc" 
          height={60} 
          width={60}
          onClick={()=>setpath("/assets/pictures/Denim Blue faded shirt.jpg")}
          />
        </div>
        
      </div>
    </div>
  )
}

export default SlugComponents