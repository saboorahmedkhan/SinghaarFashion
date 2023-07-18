import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartCard = ({
    src,
    title,
    size,
    price
}:
    {
        src: string;
        title: string;
        size: string;
        price: number;
    }) => {
    return <div className='flex p-10'>
        {/* Image */}
        <Image
            src={src}
            alt={title}
            width={80}
            height={80}
            className='w-[100px] h-[100px]'
        />
        {/* Some Info */}
        <div className='flex px-5 justify-between items-center w-full'>
            <div>
                {/* Title */}
                <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead'>
                    {title}
                </h2>
                {/* Size */}
                <p className='mt-2 text-sm text-myBlackPara/80 font-semibold leading-none line-clamp-1'>
                    size:&nbsp;<span>{size}</span>
                </p>
                {/* Quantity */}
                <div className='mt-2 flex items-center'>
                    <Button className='group hover:bg-myWhite bg-myOrange text-myWhite hover:text-myWhite w-fit h-fit rounded-lg text-xs duration-300'>
                        <FaMinus className='h-2 w-2 group-hover:text-myBlackHead' />
                    </Button>
                    <div className='mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara/80'>
                        1
                    </div>
                    <Button className='group hover:bg-myWhite bg-myOrange text-myWhite hover:text-myWhite w-fit h-fit rounded-lg text-xs duration-300'>
                        <FaPlus className='h-2 w-2 group-hover:text-myBlackHead' />
                    </Button>
                </div>
                {/* Price & Delete */}
                <div className='lg:hidden mt-2 flex flex-col gap-2'>
                    <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead '>
                        <span>Price:&nbsp;</span>
                        &#36;{price}
                    </h3>
                    <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer' />
                </div>
            </div>
        </div>
        {/* Price & delete */}
        <div className='hidden lg:flex flex-col items-end gap-5'>
            <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackHead '>
                <span>Price:&nbsp;</span>
                &#36;{price}
            </h3>
            <FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-500 cursor-pointer' />
        </div>
    </div>
};

export default CartCard;