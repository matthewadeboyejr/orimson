import Image from "next/image";
import React from "react";
import BookingBtn from "./bookingappointment/BookingBtn";

const ContactHome = () => {
  return (
    <section className="w-full mb-24">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 rounded-3xl p-10 header-overlay ">
        <div className="flex items-center w-full lg:w-1/2 md:mt-12">
          <div className="space-y-4  ">
            <h2 className="text-2xl md:text-5xl font-black text-white md:font-medium w-full ">
              Get A Consultation Now!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-center opacity-80 text-white">
              Our team is here to help you with your financial needs. We are
              available to answer your questions and provide you with the best
              possible service.
            </p>
            <div className="w-full  flex justify-center">
              <BookingBtn title="Contact Us" action="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;
