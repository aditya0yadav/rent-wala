import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedPropertiesSection = (): JSX.Element => {
  // Property data for mapping
  const properties = [
    {
      id: 1,
      image: "/image.png",
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      bedrooms: 4,
      bathrooms: 3,
      type: "Villa",
      price: "$550,000",
    },
    {
      id: 2,
      image: "/image-1.png",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
      bedrooms: 2,
      bathrooms: 2,
      type: "Villa",
      price: "$550,000",
    },
    {
      id: 3,
      image: "/image-2.png",
      title: "Rustic Retreat Cottage",
      description:
        "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      bedrooms: 3,
      bathrooms: 3,
      type: "Villa",
      price: "$550,000",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-12 lg:gap-20 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 w-full">
        <div className="flex flex-col items-start gap-3.5 relative max-w-3xl">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-white text-3xl lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[72px]">
            Featured Properties
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click &#34;View Details&#34; for more
            information.
          </p>

          <div className="hidden lg:block absolute w-[68px] h-[30px] -top-10 -left-5">
            <div className="w-[30px] h-[30px] top-0 left-0 bg-[url(/group-1.png)] absolute bg-[100%_100%]" />
            <div className="w-[18px] h-[18px] top-1.5 left-9 bg-[url(/group-2.png)] absolute bg-[100%_100%]" />
            <div className="w-2 h-2 top-[11px] left-[60px] bg-[url(/group-3.png)] absolute bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full lg:w-auto px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800 text-white font-['Urbanist',Helvetica] font-medium text-lg"
        >
          View All Properties
        </Button>
      </div>

      <div className="flex flex-col items-start gap-8 lg:gap-[50px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px] w-full">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="flex flex-col items-start gap-6 lg:gap-[30px] p-6 lg:p-10 bg-grey-08 rounded-xl overflow-hidden border border-solid border-neutral-800"
            >
              <img
                className="w-full h-[250px] lg:h-[318px] object-cover"
                alt={property.title}
                src={property.image}
              />

              <CardContent className="flex flex-col items-start gap-6 lg:gap-[30px] p-0 w-full">
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <h3 className="font-['Urbanist',Helvetica] font-semibold text-white text-xl lg:text-2xl leading-[1.2] lg:leading-9 w-full mt-[-1.00px]">
                    {property.title}
                  </h3>

                  <p className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-base lg:text-lg leading-[24px] lg:leading-[27px] w-full">
                    <span className="text-[#999999]">
                      {property.description}{" "}
                    </span>
                    <span className="text-white underline cursor-pointer">
                      Read More
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-2.5 w-full">
                  <Badge className="flex items-center gap-1 px-3 lg:px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 font-medium text-white text-base lg:text-lg">
                    <div className="relative w-5 lg:w-6 h-5 lg:h-6">
                      <img
                        className="absolute w-[18px] lg:w-[22px] h-[14px] lg:h-[17px] top-0.5 lg:top-1 left-px"
                        alt="Bedroom icon"
                        src="/background-2-1.svg"
                      />
                    </div>
                    {property.bedrooms}-Bedroom
                  </Badge>

                  <Badge className="flex items-center gap-1 px-3 lg:px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 font-medium text-white text-base lg:text-lg">
                    <div className="relative w-5 lg:w-6 h-5 lg:h-6">
                      <img
                        className="absolute w-[17px] lg:w-[21px] h-[17px] lg:h-[21px] top-0 lg:top-0.5 left-px"
                        alt="Bathroom icon"
                        src="/background-2.svg"
                      />
                    </div>
                    {property.bathrooms}-Bathroom
                  </Badge>

                  <Badge className="flex items-center gap-1 px-3 lg:px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 font-medium text-white text-base lg:text-lg">
                    <div className="relative w-5 lg:w-6 h-5 lg:h-6">
                      <img
                        className="absolute w-[14px] lg:w-[17px] h-[15px] lg:h-[19px] top-0.5 left-0.5 lg:left-1"
                        alt="Property type icon"
                        src="/subtract.svg"
                      />
                    </div>
                    {property.type}
                  </Badge>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4 lg:gap-[50px] w-full">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-base lg:text-lg leading-[24px] lg:leading-[27px] mt-[-1.00px]">
                      Price
                    </span>
                    <span className="font-['Urbanist',Helvetica] font-semibold text-white text-xl lg:text-2xl leading-[1.2] lg:leading-9">
                      {property.price}
                    </span>
                  </div>

                  <Button className="w-full lg:flex-1 items-center justify-center gap-2 px-4 lg:px-6 py-3 lg:py-[18px] bg-purple-60 rounded-[10px] font-['Urbanist',Helvetica] font-medium text-white text-base lg:text-lg">
                    View Property Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-5 w-full border-t border-neutral-800">
          <div className="font-['Urbanist',Helvetica] font-medium text-lg lg:text-xl leading-[27px] lg:leading-[30px]">
            <span className="text-white">01</span>
            <span className="text-grey-60"> of 60</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="icon"
              className="p-3 lg:p-3.5 rounded-[69px] border border-solid border-neutral-800"
            >
              <img
                className="w-6 lg:w-[30px] h-6 lg:h-[30px]"
                alt="Previous page"
                src="/icon-2.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="p-3 lg:p-3.5 bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
            >
              <img
                className="w-6 lg:w-[30px] h-6 lg:h-[30px]"
                alt="Next page"
                src="/icon.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};