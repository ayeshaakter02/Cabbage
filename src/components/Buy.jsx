import React from "react";

const Buy = () => {
  return (
    <div className="container sm:-mt-8 md:-mt-15 lg:-mt-28.75 sm:flex gap-7.5 mb-20">
      <div className="text-white w-full sm:w-70 md:w-80 lg:w-92.5 flex sm:flex-col-reverse justify-between bg-[#FE9900] lg:relative">
        <div className="lg:py-[46.6px] lg:pl-[28.38px]">
          <p className="text-[12px] font-bold">HOT SALES</p>
          <h2 className="mt-[7.11px] mb-[11.98px] text-sm sm:text-sm md:text-2xl lg:text-[32px] font-normal">
            Big Sale
          </h2>
          <h3 className="text-[26px] sm:text-sm md:text-lg lg:text-[26px]">
            Mango & juci
          </h3>
          <p>Buy Now </p>
        </div>
        <img src="./images/orange.png" alt="" className="sm:w-40 sm:h-40 xl:w-55.25 xl:h-55.25 xl:absolute sm:ml-8 lg:-right-2 lg:top-5" />
      </div>
      <div className="text-white w-full sm:w-70 md:w-80 lg:w-92.5 flex justify-between bg-[#113001]">
        <div className="py-[46.6px] pl-[28.38px]  ">
          <p className="text-[12px] font-bold">HOT SALES</p>
          <h2 className="mt-[7.11px] mb-[11.98px] text-sm sm:text-lg md:text-3xl lg:text-[32px] font-normal">
            Big Sale
          </h2>
          <h3 className="text-[26px] sm:text-sm md:text-lg lg:text-[26px] font-Inter font-normal">
            Every Order
          </h3>
          <p>Buy Now </p>
        </div>
        <img src="./images/mod.png" alt="" className="xl:w-49.75 xl:h-39.5 mt-10.25" />
      </div>
      <div className="text-white w-full sm:w-70 md:w-80 lg:w-92.5 flex justify-between bg-primary">
        <div className="py-[46.6px] pl-[28.38px]  ">
          <p className="text-[12px] font-bold">Save 20%</p>
          <h2 className="mt-[7.11px] mb-[11.98px] text-sm sm:text-lg md:text-3xl lg:text-[32px] font-normal">
            Up to 20%
          </h2>
          <h3 className="text-[26px] sm:text-sm md:text-lg lg:text-[26px]">
            Every Packge
          </h3>
          <p>Buy Now </p>
        </div>
        <img src="./images/ca.png" alt="" className="xl:w-40.5 xl:h-54 mt-1.75" />
      </div>
    </div>
  );
};

export default Buy;
