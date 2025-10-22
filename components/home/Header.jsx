import React from "react";
import BookingBtn from "./bookingappointment/BookingBtn";

const Header = () => {
  return (
    <header className="w-full mb-24">
      <h1 className=" text-[#273E78] text-4xl md:text-[140px] xl:text-[190px] font-semibold  md:font-medium  w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Orimson Ltd.
      </h1>

      <div className=" border-b-8 border-[#00BBF8] flex flex-col-reverse lg:flex-row justify-between items-center gap-8 rounded-3xl p-10 header-overlay ">
        <div className="flex items- w-full lg:w-1/2 md:mt-12">
          <div className="space-y-4  ">
            <h2 className="md:text-5xl text-3xl font-black text-white md:font-medium w-full ">
              Reliable Solutions for Your Financial Needs
            </h2>
            <p className="text-base sm:text-lg md:text-lg md:text-left opacity-80 text-white">
              A dynamic and forward-thinking firm specializing in accounting,
              tax advisory, and research & development consulting.
            </p>
            <div className="w-full  flex">
              <BookingBtn title="Get in Touch" action="/contact" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
