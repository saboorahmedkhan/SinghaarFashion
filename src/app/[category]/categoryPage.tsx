"use client";
import BestSellingCart from '@/components/bestSellingCart';
import { useAppSelector } from '../store/hooks';


const CategoryPage = ({params} : {params:{category:string}} ) => {
    const product = useAppSelector((state)=>state.product);
    const bestSell = product.filter((val)=>val.category == params.category);

  return (
    <div>
        <div className="text-center mb-10">
        {/* Heading */}
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl capitalize">
       {params.category}
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
    </div>
    {/* Category page starts here */}
    <div className='flex flex-wrap justify-center gap-5'>
        {
            bestSell.map((items: any ,i)=>(
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

export default CategoryPage