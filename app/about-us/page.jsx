import BookingBtn from "@/components/home/bookingappointment/BookingBtn";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { RiHome2Line, RiUserStarLine } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 mt-24 mb-">
        {/* Text Content - Now takes 60% width on large screens */}
        <div className="flex items-center w-full lg:w-[55%]">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center ">
              <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                Orimson Ltd.
              </p>
            </div>

            <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Your trusted financial partner
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-center md:text-left text-[#595959] max-w-[600px] mx-auto md:mx-0">
              Orimson Ltd is a dynamic and forward-thinking firm specializing in
              accounting, tax advisory, and research & development consulting.
              We are committed to empowering businesses with strategic financial
              solutions that drive growth, ensure compliance, and unlock
              innovation. With a client-centric approach and deep industry
              expertise, Orimson Ltd serves startups, SMEs, and established
              enterprises across diverse sectors. Our mission is to simplify
              complexity, deliver clarity, and help our clients make confident
              decisions in an ever-evolving financial landscape.
            </p>
            <div className="flex justify-center md:justify-start">
              <BookingBtn />
            </div>
          </div>
        </div>

        {/* Cards Grid - Now takes 40% width on large screens */}
        <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                alt="discussion-meeting"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-[#0B95C7]/10 p-3 sm:p-4">
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-[#0E31AC] bg-white p-2 rounded-full w-fit">
                  <RiHome2Line size={20} />
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Empowering Businesses
                </h3>
                <p className="text-xs sm:text-sm text-[#595959]">
                  We provide tailored accounting solutions, tax compliance, and
                  strategic advisory to ensure compliance, efficiency, and
                  growth.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="rounded-xl sm:rounded-2xl bg-[#0B95C7]/10 p-3 sm:p-4 order-2 sm:order-1">
              <div className="flex flex-col gap-2 sm:gap-3">
                <span className="text-[#0E31AC] bg-white p-2 rounded-full w-fit">
                  <RiUserStarLine size={20} />
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Client-Centric Approach
                </h3>
                <p className="text-xs sm:text-sm text-[#595959]">
                  We listen, understand, and deliver personalized solutions
                  based on your unique goals and challenges.
                </p>
              </div>
            </div>
            <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
              <Image
                src="https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg"
                alt="conference-room"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-24">
        <Marquee>
          <h2 className=" opacity-50 text-4xl  md:text-[140px] xl:text-[210px] font-semibold  md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
            Mission & Vision
          </h2>
        </Marquee>
        <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 bg-[#EDEEF1] b-5 rounded-3xl">
          <div className="w-full lg:w-[50%]  ">
            <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
              <Image
                src="/group-team.jpg"
                alt="doctor-female"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content - Now takes 60% width on large screens */}
          <div className="flex items-center  w-full lg:w-[50%] pr-10 ">
            <div className="space-y-4 sm:space-y-6 w-full">
              <div className="flex md:block justify-center ">
                <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                  Orimson Ltd.
                </p>
              </div>
              <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
                Our mission and Vision
              </h2>
              <p>
                At Orimson Ltd, our mission is to empower organizations with
                intelligent financial strategies that foster growth, ensure
                compliance, and spark innovation. We deliver expert accounting,
                tax advisory, and R&D consulting services tailored to the
                evolving needs of startups, SMEs, and established enterprises.
                Through a client-centric approach and deep industry expertise,
                we simplify complexity, deliver clarity, and enable confident
                decision-making in a dynamic global economy.
              </p>
              <p className="bg-white/50 rounded-b-4xl p-3 flex flex-col   gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
                <span className="text-[#0E31AC] text-3xl">Vision</span>
                <p className="font-semibold">
                  To be a globally recognized catalyst for financial excellence
                  and innovation — transforming how businesses navigate
                  accounting, tax, and strategic decision-making through
                  insight-driven solutions and cutting-edge research.
                </p>
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className="mb-24">
        <Marquee>
          <h2 className=" opacity-50 text-4xl  md:text-[140px] xl:text-[210px] font-semibold  md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
            Meet Our Founder, Mayokun John Orimoloye.. Mr. Osa Victor Ogunmu
          </h2>
        </Marquee>
        <section className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12 rounded-3xl bg-[#0B95C7]/10 p-5">
          {/* Image Section (50% width on lg screens) */}
          <div className="w-full lg:w-[50%] space-y-5">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/mayokunJohn.png"
                alt="Mayokun John Orimoloye"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/osaVictor.png"
                alt="Mr. Osa Victor Ogunmu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content (50% width on lg screens) */}
          <div className="w-full lg:w-[50%] px-5 md:pr-10 flex items-center">
            <div className="space-y-4 sm:space-y-6 w-full">
              {/* Tagline */}
              <div className="flex justify-center md:block">
                <p className="bg-[#EDEEF1] text-[#0E31AC] text-sm py-2 px-4 rounded-full w-fit">
                  The Founder
                </p>
              </div>

              {/* Name & Bio */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight">
                  Overview of the Founding Partnership
                </h2>
                <p className=" md:text-left text-sm sm:text-base md:text-lg text-[#595959] mt-4">
                  Orimson Ltd was established through the visionary
                  collaboration of <strong>Mayokun John Orimoloye</strong> (CA,
                  ACA, CITN, ACCA) , a distinguished professional accountant
                  with over 15 years of expertise in international accounting,
                  taxation, and auditing, and{" "}
                  <strong>Mr. Osa Victor Ogunmu</strong> (M.Sc, MBA, B.Sc), a
                  seasoned IT strategist and business leader.
                  <br />
                  <br />
                  Their partnership blends deep financial acumen with
                  cutting-edge technological insight, forming the foundation of
                  a consultancy that transcends traditional boundaries. Driven
                  by a shared commitment to excellence, innovation, and client
                  empowerment, Orimson Ltd was born to deliver transformative
                  accounting and tax solutions that are as intelligent as they
                  are impactful.
                  <br />
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:block">
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/isah-usman-651991131/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#EDEEF1] hover:bg-white/90 transition-colors"
                  >
                    <FiLinkedin className="w-5 h-5 text-[#0E31AC] hover:text-[#0E31AC]/80" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#EDEEF1] hover:bg-white/90 transition-colors"
                  >
                    <FiTwitter className="w-5 h-5 text-[#0E31AC] hover:text-[#0E31AC]/80" />
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="flex justify-center md:justify-start pt-4">
                <BookingBtn />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
