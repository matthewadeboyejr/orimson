"use client";
import React from "react";
import { FaAt, FaLocationArrow, FaPhone } from "react-icons/fa";
import Map from "@/components/home/Map";

const ContactUs = () => {
  return (
    <>
      <section className="w-full mb-16 md:mb-24 mt-7 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <h1 className="text-5xl   md:text-[140px] xl:text-[210px] font-semibold  md:font-medium  w-full text-center leading-tight sm:leading-snug md:leading-normal">
          Contact Us
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 w-full max-w-7xl mx-auto mt-8 md:mt-16">
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaAt className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a
                    href="mailto:orimsonltd@gmail.com"
                    className="text-[#0E31AC] hover:text-primary-color transition-colors"
                  >
                    orimsonltd@gmail.com
                  </a>
                  {" , "}
                  <a
                    href="mailto:info@orimsonltd.co.uk"
                    className="text-[#0E31AC] hover:text-primary-color transition-colors"
                  >
                    info@orimsonltd.co.uk
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <a
                    href="tel:+447943914235"
                    className="text-[#0E31AC] hover:text-primary-color transition-colors"
                  >
                    07943914235
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="bg-primary-color flex justify-center items-center w-fit p-3 text-white rounded-full mt-1">
                  <FaLocationArrow className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Address</h3>
                  <p className="text-[#595959]">
                    22 Collochan Drive, Barnhill, Dumfries, DG2 9FH
                    <br />
                    Dumfries, Scotland, DG2 9FH
                    <br />
                    United Kingdom
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
        </div>
      </section>
      <Map />
    </>
  );
};

export default ContactUs;
