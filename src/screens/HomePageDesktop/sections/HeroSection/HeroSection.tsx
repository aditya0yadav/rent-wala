import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Data for statistics cards
  const statsData = [
    {
      value: "200+",
      label: "Happy Customers",
    },
    {
      value: "10k+",
      label: "Properties For Clients",
    },
    {
      value: "16+",
      label: "Years of Experience",
    },
  ];

  // Data for feature cards
  const featureCards = [
    {
      icon: "/icon-13.svg",
      title: "Find Your Dream Home",
    },
    {
      icon: "/icon-16.svg",
      title: "Unlock Property Value",
    },
    {
      icon: "/icon-15.svg",
      title: "Effortless Property Management",
    },
    {
      icon: "/icon-10.svg",
      title: "Smart Investments, Informed Decisions",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start relative mt-8 lg:mt-[162px]">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 relative self-stretch w-full">
        {/* Left content area */}
        <div className="flex flex-col items-start justify-center gap-8 lg:gap-[60px] px-4 lg:pl-[162px] lg:pr-0 py-0 relative flex-1 self-stretch z-[1] order-2 lg:order-1">
          {/* Heading and subheading */}
          <div className="flex flex-col items-end gap-6 relative self-stretch w-full">
            <h1 className="font-semibold text-white text-3xl lg:text-6xl leading-[1.2] lg:leading-[72.0px] relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
              Discover Your Dream Property with Estatein
            </h1>

            <p className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            {/* Circular decorative element - Hidden on mobile */}
            <div className="hidden lg:flex w-[175px] h-[175px] items-start gap-[15.91px] p-[47.73px] absolute top-0 left-[742px] bg-grey-08 rounded-[159.09px] overflow-hidden border-[1.59px] border-solid border-neutral-800">
              <div className="relative w-[79.55px] h-[79.55px] bg-grey-10 rounded-[89.09px] border-[1.59px] border-solid border-neutral-800" />

              <img
                className="absolute w-[34px] h-[34px] top-[70px] left-[70px]"
                alt="Icon"
                src="/icon-7.svg"
              />

              <div className="absolute w-[204px] h-36 top-4 left-4">
                <div className="absolute top-[126px] left-[72px] rotate-[172.02deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  ✨
                </div>

                <div className="absolute top-[125px] left-[57px] rotate-[-171.37deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  D
                </div>

                <div className="absolute top-[122px] left-12 rotate-[-160.43deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  i
                </div>

                <div className="absolute w-[50px] h-[130px] top-1.5 left-0">
                  <div className="absolute top-28 left-[38px] rotate-[-151.52deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                    s
                  </div>

                  <div className="absolute w-11 h-[119px] top-[5px] left-0">
                    <div className="absolute top-[100px] left-7 rotate-[-140.17deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                      c
                    </div>

                    <div className="absolute w-9 h-[101px] top-2 left-0">
                      <div className="absolute top-[83px] left-[18px] rotate-[-127.61deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        o
                      </div>

                      <div className="absolute top-[70px] left-2.5 rotate-[-115.06deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        v
                      </div>

                      <div className="absolute top-[58px] left-1.5 rotate-[-102.50deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        e
                      </div>

                      <div className="absolute top-[45px] left-1.5 rotate-[-91.15deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        r
                      </div>

                      <div className="absolute top-9 left-2 rotate-[-82.24deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {""}
                      </div>

                      <div className="absolute top-6 left-[7px] rotate-[-71.30deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Y
                      </div>

                      <div className="absolute top-[11px] left-3.5 rotate-[-57.93deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        o
                      </div>

                      <div className="absolute top-0 left-[23px] rotate-[-45.37deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        u
                      </div>
                    </div>

                    <div className="absolute top-0 left-[33px] rotate-[-34.44deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                      r
                    </div>
                  </div>

                  <div className="absolute top-0 left-[43px] rotate-[-25.52deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {""}
                  </div>
                </div>

                <div className="absolute top-0.5 left-[51px] rotate-[-14.18deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  D
                </div>

                <div className="absolute top-0 left-[67px] rotate-[-2.03deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  r
                </div>

                <div className="absolute top-px left-[77px] rotate-[9.32deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  e
                </div>

                <div className="absolute top-[5px] left-[91px] rotate-[22.28deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  a
                </div>

                <div className="absolute w-[45px] h-[119px] top-[11px] left-[99px]">
                  <div className="absolute top-0.5 left-1 rotate-[37.27deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                    m
                  </div>

                  <div className="absolute w-8 h-24 top-[13px] left-3">
                    <div className="absolute -top-0.5 left-1.5 rotate-[49.83deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                      {""}
                    </div>

                    <div className="absolute w-[27px] h-[78px] top-2 left-[5px]">
                      <div className="absolute -top-px left-1.5 rotate-[59.96deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P
                      </div>

                      <div className="absolute top-2.5 left-3 rotate-[70.90deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        r
                      </div>

                      <div className="absolute top-[22px] left-[13px] rotate-[82.24deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        o
                      </div>

                      <div className="absolute top-[37px] left-[13px] rotate-[95.20deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        p
                      </div>

                      <div className="absolute top-[50px] left-[11px] rotate-[108.17deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        e
                      </div>

                      <div className="absolute top-[62px] left-[7px] rotate-[119.51deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        r
                      </div>
                    </div>

                    <div className="absolute top-[79px] left-1.5 rotate-[129.23deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                      t
                    </div>
                  </div>

                  <div className="absolute top-[101px] left-2 rotate-[140.17deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                    y
                  </div>
                </div>

                <div className="absolute top-[117px] left-[101px] rotate-[150.30deg] [font-family:'Urbanist',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {""}
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 relative self-stretch w-full">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-auto px-6 py-[18px] rounded-[10px] border border-solid border-neutral-800 [font-family:'Urbanist',Helvetica] font-medium text-white text-lg"
            >
              Learn More
            </Button>

            <Link to="/properties" className="w-full sm:w-auto">
              <Button className="w-full h-auto px-6 py-[18px] rounded-[10px] bg-purple-60 [font-family:'Urbanist',Helvetica] font-medium text-white text-lg">
                Browse Properties
              </Button>
            </Link>
          </div>

          {/* Statistics cards */}
          <div className="flex flex-col sm:flex-row items-start gap-5 relative self-stretch w-full">
            {statsData.map((stat, index) => (
              <Card
                key={`stat-${index}`}
                className="w-full sm:flex-1 bg-grey-10 rounded-xl border border-solid border-neutral-800"
              >
                <CardContent className="flex flex-col items-start gap-0.5 px-6 py-4">
                  <h3 className="font-bold text-white text-2xl lg:text-[40px] leading-[1.5] lg:leading-[60px] relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] tracking-[0]">
                    {stat.value}
                  </h3>
                  <p className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right image area */}
        <div className="flex h-[300px] lg:h-[814px] items-start gap-2.5 relative flex-1 z-0 bg-grey-10 overflow-hidden order-1 lg:order-2">
          <div className="absolute w-[1924px] h-[1286px] top-[-237px] left-[-502px]">
            <div className="relative w-[1922px] h-[1283px] top-px left-px">
              <div className="h-[1283px]">
                <div className="relative w-[1922px] h-[1283px]">
                  <img
                    className="absolute w-[920px] h-[814px] top-[236px] left-[501px]"
                    alt="Group"
                    src="/group-10.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            className="relative flex-1 self-stretch object-cover"
            alt="Property image"
            src="/image-3.png"
          />
        </div>
      </div>

      {/* Feature cards section */}
      <div className="flex flex-col lg:flex-row items-center gap-5 p-5 relative self-stretch w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-grey-08 border border-solid border-neutral-800 shadow-[0px_0px_0px_10px_#191919]">
        {featureCards.map((feature, index) => (
          <Card
            key={`feature-${index}`}
            className="w-full lg:flex-1 bg-grey-10 rounded-xl border border-solid border-neutral-800"
          >
            <CardContent className="flex flex-col items-center gap-5 px-5 py-10 relative">
              <div className="inline-flex items-center gap-2.5 p-2.5 relative rounded-[100px]">
                <div className="inline-flex items-center gap-2.5 p-3.5 relative rounded-[100px]">
                  <img
                    className="relative w-[34px] h-[34px]"
                    alt="Icon"
                    src={feature.icon}
                  />
                </div>
              </div>

              <h3 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-white text-lg lg:text-xl text-center tracking-[0] leading-[27px] lg:leading-[30px]">
                {feature.title}
              </h3>

              <img
                className="absolute w-[34px] h-[34px] top-5 right-5 lg:left-[401px]"
                alt="Icon"
                src="/icon-7.svg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};