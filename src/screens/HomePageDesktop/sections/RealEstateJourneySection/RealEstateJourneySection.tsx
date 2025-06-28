import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const RealEstateJourneySection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      question:
        "What documents do I need to sell my property through Estatein?",
      description:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      question: "How can I contact an Estatein agent?",
      description:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-12 lg:gap-20">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 w-full">
        <div className="flex flex-col items-start gap-3.5 relative max-w-3xl">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-white text-3xl lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[72px]">
            Frequently Asked Questions
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
            Find answers to common questions about Estatein&#39;s services,
            property listings, and the real estate process. We&#39;re here to
            provide clarity and assist you every step of the way.
          </p>

          <div className="hidden lg:block absolute w-[68px] h-[30px] -top-10 -left-5">
            <div className="bg-[url(/group-7.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%]" />
            <div className="bg-[url(/group-8.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%]" />
            <div className="bg-[url(/group-9.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full lg:w-auto px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
        >
          <span className="font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
            View All FAQ&apos;s
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-8 lg:gap-[50px] w-full">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[30px] w-full">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="w-full lg:flex-1 bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="flex flex-col items-start gap-6 lg:gap-[30px] p-6 lg:p-[50px]">
                <h3 className="font-['Urbanist',Helvetica] font-semibold text-white text-xl lg:text-2xl leading-[1.2] lg:leading-9 self-stretch mt-[-1.00px] tracking-[0]">
                  {item.question}
                </h3>

                <p className="font-['Urbanist',Helvetica] font-medium text-grey-60 tracking-[-0.11px] self-stretch text-base lg:text-lg leading-[24px] lg:leading-[27px]">
                  {item.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full lg:w-auto px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
                >
                  <span className="font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-[23.6px]">
                    Read More
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full pt-5 border-t border-neutral-800">
          <div className="font-['Urbanist',Helvetica] font-medium text-lg lg:text-xl tracking-[0] leading-[27px] lg:leading-[30px]">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 10</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="icon"
              className="p-3 lg:p-3.5 h-auto w-auto rounded-[69px] border border-solid border-neutral-800"
            >
              <ChevronLeftIcon className="w-6 lg:w-[30px] h-6 lg:h-[30px]" />
              <span className="sr-only">Previous</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="p-3 lg:p-3.5 h-auto w-auto bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
            >
              <ChevronRightIcon className="w-6 lg:w-[30px] h-6 lg:h-[30px]" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};