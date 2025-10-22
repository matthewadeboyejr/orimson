import Image from "next/image";

const Why = () => {
  return (
    <section className="mb-24">
      <h2 className="text-6xl text-[#273E78]  md:text-[140px] xl:text-[180px] font-semibold  md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
        Why Us?
      </h2>
      <section className="flex flex-col-reverse lg:flex-row justify-between md:items-center gap-8 lg:gap-12 bg-[#EDEEF1] b-5 rounded-3xl">
        <div className="w-full lg:w-[50%]  ">
          <div className="relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="https://images.pexels.com/photos/6592668/pexels-photo-6592668.jpeg"
              alt="business-meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content - Now takes 60% width on large screens */}
        <div className="flex items-center  w-full lg:w-[50%] pr-10">
          <div className="space-y-4 sm:space-y-6 w-full">
            <div className="flex md:block justify-center ">
              <p className=" bg-white flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
                Orimson Ltd.
              </p>
            </div>
            <h2 className="text-3xl  lg:text-4xl font-semibold text-center md:text-left leading-tight">
              Dedicated to your financial needs
            </h2>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="font-semibold">
                Led by seasoned professionals with global credentials (ACCA,
                ICAN, CITN) and industry experience across manufacturing,
                telecoms, and consulting.
              </span>
            </p>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="font-semibold">
                Expertise You Can Trust – Our team brings years of experience
                and up-to-date knowledge of UK financial regulations.
              </span>
            </p>

            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="font-semibold">
                Tailored Solutions – We understand that no two businesses are
                alike, and we craft solutions that fit your unique goals.
              </span>
            </p>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="font-semibold">
                Innovation-Driven – We champion innovation, helping clients
                leverage R&D incentives to fuel their next breakthrough.
              </span>
            </p>
            <p className="bg-white/50 rounded-b-4xl p-3 flex  items-center gap-3 text-sm sm:text-base md:text-lg  text-[#595959] ">
              <span className="font-semibold">
                Client-Focused – Your success is our priority. We pride
                ourselves on responsiveness, transparency, and long-term
                partnerships.
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Why;
