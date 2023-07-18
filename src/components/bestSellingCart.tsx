import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const BestSellingCart = ({
    src,
    alt,
    title,
    description,
    price,
    category,
    slug,
    discount,
}:{
    src:string;
    alt:string;
    title:string;
    description:string;
    price:number;
    category:string;
    slug:string;
    discount:number;
}) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}}`}>
      {/* image Div */}
    <div>
        <Image className='block h-[23rem] rounded overflow-hidden'
        src={src}
        alt="Best Selling Product"
        width={400}
        height={400}
        />
    </div>
    {/* Typography Div */}
  <div className="mt-4">
        {title && (
          <h2 className='scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0 text-myBlackHead line-clamp-1'>{title}
          </h2>
        )}
        {description && (
          <p className='mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1'>{description}
          </p>
        )}
        {price && (
          <div className='flex gap-3'>
          <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1 ${discount>0 && "line-through decoration-2 decoration-myOrange/70"}`}
          >
            ${price}
          </p>
          {/* Discounted Value */}
          {discount>0 && <p className='mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1'>
            ${price - ((price*discount)/100)}
          </p>}
          
          </div>
        )}
     </div>
     </Link>
     {/* Buttons Div */}
     <div>
            <Button className='group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2'>
              <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce'/>
              Add to Cart
            </Button>

            <Button className='group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2'>
              <BsFillArrowRightCircleFill className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce'/>
              Buy Now
            </Button>

        </div>
  </div>
  )
}

export default BestSellingCart