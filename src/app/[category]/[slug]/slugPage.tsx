"use client";
import { Button } from '@/components/ui/button';
import SlugComponents from '@/components/slugComponents';
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useAppSelector } from '../../store/hooks';

const SlugPage = ({params}:{params: {slug:string}} ) => {
    const product = useAppSelector((state)=>state.product);
    const slug = product.filter((val)=>val.slug == params.slug);
    console.log("abc", slug);
  return (
    <div>
        <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          {/* <img 
          alt="ecommerce" 
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" 
          /> */}
          <SlugComponents/>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Category */}
            <h2 className="text-gray-500 scroll-m-20 text-sm font-semibold tracking-tight uppercase">
                {slug[0].category}
                </h2>

            {/* Heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackHead">
              Plain Green Shirt
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
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">Best Quality Green Plain Shirt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium illum reprehenderit vitae laudantium recusandae exercitationem error iusto quas, repellendus in dolorem, soluta est deserunt vel! Architecto voluptate eaque fugit beatae?</p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex">
                {/* Colors */}
                <span className="mr-3 scroll-m-20 text-myBlackHead font-semibold tracking-tight">Color</span>

                <button className="border-2 border-gray-300 mr-1 bg-white rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 mr-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 mr-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 mr-1 bg-black rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />

              </div>
              {/* Size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-myBlackHead font-semibold tracking-tight">Size</span>
                  <div className="form-control w-full max-w-xs">
                    <select className="select select-bordered">
                      <option disabled selected>Select Size</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                  </div>
                </div>
            </div>
            {/* Quantity */}
            <div className='flex items-center'>
            <span className="mr-3 mt-3 scroll-m-20 text-myBlackHead font-semibold tracking-tight">Quantity</span>
            <Button className='mt-3 group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
              <FaMinus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
              Less
            </Button>
            <div className='mr-2 ml-2 mt-3 scroll-m-20 text-base font-semibold tracking-tight'>1</div>
            <Button className='mt-3 group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
              <FaPlus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
              Add
            </Button>
            </div>
            {/* Divider */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* Price */}
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">$12.00</span>
              {/* Add to Cart */}
              <Button className='group bg-myOrange hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 group-hover:animate-bounce' />
                Add to Cart
              </Button>

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