import React from "react";
import {
  RiCalculatorLine,
  RiFileList3Line,
  RiLightbulbLine,
  RiLineChartLine,
  RiBriefcaseLine,
  RiBookOpenLine,
} from "react-icons/ri";

const OurServices = () => {
  const services = [
    {
      icon: RiCalculatorLine,
      title: "Accounting & Bookkeeping",
      description:
        "Accurate, timely, and transparent financial reporting tailored to your business needs and regulatory bodies.",
    },
    {
      icon: RiFileList3Line,
      title: "Tax Advisory & Compliance",
      description:
        "Expert guidance on corporate and personal tax matters, including VAT, PAYE, and HMRC regulations.",
    },
    {
      icon: RiLightbulbLine,
      title: "R&D Tax Credits & Innovation Support",
      description:
        "Helping businesses identify qualifying activities and maximize claims under the UK's R&D tax relief schemes.",
    },
    {
      icon: RiLineChartLine,
      title: "Financial Strategy & Planning",
      description:
        "Strategic insights and forecasting to support long-term growth and operational efficiency.",
    },
    {
      icon: RiBriefcaseLine,
      title: "Business Consultancy",
      description:
        "Bespoke advice to optimize performance, manage risk, and navigate regulatory changes.",
    },
    {
      icon: RiBookOpenLine,
      title: "Accounting, Finance and Tax Training",
      description:
        "In-depth training on IFRS, FRS 102, and other global reporting frameworks, with practical case studies and real-world applications.",
    },
  ];

  return (
    <section className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-[#273E78] text-4xl md:text-[140px] xl:text-[180px] font-semibold md:font-medium mb-3 w-full text-center leading-tight sm:leading-snug md:leading-normal">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-[#0E31AC]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#0E31AC] bg-[#EDEEF1] p-3 rounded-full">
                    <IconComponent size={24} />
                  </span>
                  <h3 className="text-lg lg:text-xl font-semibold text-[#0E31AC]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm lg:text-base text-[#595959] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
