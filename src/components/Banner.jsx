import React from 'react'

export const Banner = () => {
  return (
    <div className='bg-[#F7F5EB] bg-[url(../images/banner.png)] bg-no-repeat bg-size-[50%_auto] pb-10 sm:pb-39.75'>
            <div className='container flex pt-10 sm:pt-15 md:pt-20 lg:pt-29.75'>
            <div className='text-center sm:text-left mt-5 sm:mt-10 md:mt-15 xl:mt-[92.5px] w-133.75'>
                <div className='flex justify-center sm:justify-start gap-2.5 lg:gap-[6.8px] text-sm lg:text-lg font-medium'>
                    <img src="./images/herb.png" alt="" />
                    <p className='font-Nunito  text-lg'>100% genuine Products</p>
                </div>
                <h1 className='ban-head'>Tasty & Healthy
organic Food</h1>
<div>
                <button className='btn'>
                    Explore Products
                </button>
            </div>
            </div>
            <div className='hidden sm:block'>
                <img src="./images/slider.png" alt=""/>
            </div>
        </div>
        
    </div>
  )
}
