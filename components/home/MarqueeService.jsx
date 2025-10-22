import React from "react";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const MarqueeService = () => {
  const services = [
    { id: 2, name: "Research and Development Consulting" },
    { id: 3, name: "Financial Strategy and Planning" },
    { id: 4, name: "Business Consultancy" },
    { id: 5, name: "Accounting, Finance and Tax Training" },
    { id: 6, name: "Financial Strategy and Planning" },
    { id: 7, name: "Business Consultancy" },
    { id: 8, name: "Accounting, Finance and Tax Training" },
  ];
  return (
    <section className="mb-24">
      <ul className=" bg-[#009E24] py-7 rounded-full text-white ">
        <Marquee>
          {services.map((service) => {
            return (
              <li className="flex items-center gap-5 pr-10">
                <GoDotFill />
                <p className="text-3xl font-normal">{service?.name}</p>
              </li>
            );
          })}
        </Marquee>
      </ul>
    </section>
  );
};

export default MarqueeService;
