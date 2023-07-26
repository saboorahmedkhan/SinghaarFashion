"use client";

import { Button } from '@/components/ui/button';
import { useAppSelector } from '../store/hooks';
import CartCard from '@/components/cartCard';

const CartPage = () => {
    const cartArray = useAppSelector((state)=>state.cart);
    const total = cartArray.reduce((total,arr:any) => {
    return total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty;
    }, 0)
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1'>
        {/* Items */}
        <div className='col-span-2'>
            <CartCard />
        </div>
        {/* Summary */}
        <div className='bg-myBlackHead/5 p-5 rounded-xl outline outline-offset-1 outline-myOrange my-auto'>
        {/* Heading */}
        <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead'>Order Summary</h2>
        {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Pricing */}
        <div className='text-sm font-medium tracking-tight text-myBlackPara'>
          {/* Product Pricing */}
          <div className='flex items-center justify-between capitalize'>
          <h2>Sub Total</h2>
          <h2>${total}</h2>
          </div>
         {/* Delivery Charges */}
         <div className='flex items-center justify-between capitalize'>
          <h2>Delivery Charges</h2>
          <h2>TBD</h2>
          </div>
          {/* Service Charges */}
          <div className='flex items-center justify-between capitalize'>
          <h2>Sales Tax</h2>
          <h2>TBD</h2>
          </div>
          </div>
          {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Estimated Total */}
        <div className='flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackHead'>
          <h2>estimated Total</h2>
          <h2>${total}</h2>
          </div>
           {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Checkout Button */}
        <div className='flex items-center justify-center'>
          <Button className='bg-myOrange hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl hover:shadow-md capitalize'>Proceede To Checkout</Button>
        </div>
        {/* Divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* Note */}
        <p className='text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic'>
          {`* Delivery Charges and Sales Tax will be calculated in checkout page`}
        </p>
         </div>
         </div>
  )
}

export default CartPage