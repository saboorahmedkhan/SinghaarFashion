"use client";
import React from 'react';
import BestSellingCart from './bestSellingCart';
import { useAppSelector } from '@/app/store/hooks';

const BestSelling = () => {
  const product = useAppSelector((state)=>state.product);
  const bestSell = product.slice(0 , 3);
//   const bestSell = [
//     {
//         src:"/assets/pictures/bestselling1.jpg",
//         alt:"Green Plain Shirt",
//         title:" Green Plain Shirt",
//         description:"Best Quality Green Plain Shirt",
//         price:12,
//         category:"tops",
//         slug:"Green-Plain-Shirt ",
//     },
//     {
//       src:"/assets/pictures/sneakers1.jpg",
//       alt:"Women Black Sneakers",
//       title:"Women Black Sneakers",
//       description:"Women Top-Notch Black Sneakers",
//       price:120,
//       category:"shoes",
//       slug:"Black-Sneakers ",
//   },
//   {
//     src:"/assets/pictures/maroonbag1.jpg",
//     alt:"Brown Bag",
//     title:"Brown Bag",
//     description:"Best Quality Brown Bag",
//     price:150,
//     category:"bags",
//     slug:"Brown-Bag",
// },
//   ];
  return (
    <div className='mb-[100px] mt-[100px]'>
        <div className="text-center mb-10">
        {/* Heading */}
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Best Selling Products
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
    </div>
    {/* Best Selling Products Starts from here */}
   <div className='flex flex-wrap justify-center gap-5'>
        {
            bestSell.map((items:any ,i)=>(
              <BestSellingCart 
              key={i} 
              src={items.image[0]} 
              alt={items.title} 
              title={items.title} 
              description={items.description} 
              price={items.price} 
              category={items.category} 
              slug={items.slug}
              discount={items.discount}
           
              />
            ))

        }
   </div>
</div>
    
  )
}

export default BestSelling