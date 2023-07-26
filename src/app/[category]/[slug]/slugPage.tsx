"use client";
import { Button } from '@/components/ui/button';
import SlugComponents from '@/components/slugComponents';
import {FaPlus, FaMinus } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import AddToast from '@/components/addToast';

const SlugPage = ({params}:{params: {slug:string}} ) => {
    const product = useAppSelector((state)=>state.product);
    const slug = product.filter((val)=>val.slug == params.slug);
    
    const [cartitem, setCartitem] = useState({
      id:slug[0].id,
    title:slug[0].title,
    image:slug[0]?.image[0],
    slug:slug[0].slug,
    price:slug[0].price,
    discount:slug[0].discount,
    category:slug[0].category,
    size:slug[0].size[0],
    qty:slug[0].qty,
    color:slug[0].color[0],
    
    });
     return (
    <div>
        <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <SlugComponents image={slug[0].image}/>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Category */}
            <h2 className="text-gray-500 scroll-m-20 text-sm font-semibold tracking-tight uppercase">
                {slug[0].category}
                </h2>

            {/* Heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackHead">
            {slug[0].title}
            </h1>
            {/* Rating */}
            <div className="mt-2 rating rating-xs">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange " />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange"  />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" checked/>
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" />
            </div>
                       
            {/* Description */}
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">
            {slug[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex">
                {/* Colors */}
                <span className="mr-3 scroll-m-20 text-myBlackHead font-semibold tracking-tight">Color</span>
                {slug[0].color.map((item, i)=>(
                <button 
                key={i} 
                onClick={()=> setCartitem({...cartitem, color:item})}
                className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" 
                style={{backgroundColor:item}}
                />
                ))}
                
              </div>
              {/* Size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-myBlackHead font-semibold tracking-tight">Size</span>
                  <div className="form-control w-full max-w-xs">
                    <select onChange={(e)=>setCartitem({...cartitem, size:e.target.value})} className="select select-bordered">
                      <option disabled selected>Select Size
                      </option>
                      {slug[0].size.map((item,i)=>(
                        <option key={i}>{item}</option>
                      ))}
                      </select>
                  </div>
                </div>
            </div>
            {/* Quantity */}
            <div className='flex items-center'>
            <span className="mr-3 mt-3 scroll-m-20 text-myBlackHead font-semibold tracking-tight">Quantity</span>
            <Button onClick={()=>
              (setCartitem({
                ...cartitem,
                qty: cartitem.qty <= 1 ? 1 : --cartitem.qty
                }
                ))
                } className='mt-3 group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
              <FaMinus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
              Less
            </Button>
            <div className='mr-2 ml-2 mt-3 scroll-m-20 text-base font-semibold tracking-tight'>
              {cartitem.qty}
            </div>
            <Button onClick={()=>setCartitem({...cartitem,qty:++cartitem.qty})} className='mt-3 group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
              <FaPlus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
              Add
            </Button>
            </div>
            {/* Divider */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* Price */}
              <div>
              <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${
                cartitem.discount !== undefined && 
                "line-through decoration-2 decoration-myOrange/70"
                }`}
                >
                ${cartitem.price * cartitem.qty}
                </span>
                {/* Discounted Value */}
          {cartitem.discount !== undefined  && (
          <span className='ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead'>
            ${(cartitem.price - (cartitem.price * cartitem.discount)/100) * cartitem.qty}
          </span>
          )}
          </div>
              {/* Add to Cart */}
              {/* <Button 
              onClick={()=>dispatch(addToCart(cartitem))}
              className='group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
                Add to Cart
              </Button> */}
              <AddToast cartitem={cartitem}/>

            </div>
            {/* Buy Now */}
            <Button className='mt-3 w-full group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
              <BsFillArrowRightCircleFill className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlugPage