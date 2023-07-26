"use client";
import Image, { StaticImageData } from 'next/image';
import React, {useState} from 'react';

const SlugComponents = ({
  image,
}:string  | string[]  | StaticImageData | any) => {
    const [path, setpath] = useState("");
  return (
    <div>
      <Image 
      src={path ? path: image[0]}
      alt="Plain Green Top" 
      height={400} 
      width={400}
      />
      <div className='flex items-center justify-evenly mx-auto mt-2'>
        {image.map((item:string ,i:number)=>(
          <div key={i} className='cursor-pointer width-16 h-16'>
          <Image 
          src={item} 
          alt="abc" 
          height={60} 
          width={60}
          onClick={()=>setpath(item)}
          />
          </div>
        ))}
            
      </div>
    </div>
    
  )
}

export default SlugComponents