import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      title: "Exceptional Service!",
      content:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      author: "Wade Warren",
      location: "USA, California",
      profileImage: "/profile.png",
    },
    {
      title: "Efficient and Reliable",
      content:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      author: "Emelie Thomson",
      location: "USA, Florida",
      profileImage: "/profile-1.png",
    },
    {
      title: "Trusted Advisors",
      content:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      author: "John Mans",
      location: "USA, Nevada",
      profileImage: "/profile-2.png",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-12 lg:gap-20 mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 w-full">
        <div className="flex flex-col items-start gap-3.5 relative flex-1">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-white text-3xl lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[72px]">
            What Our Clients Say
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>

          <div className="hidden lg:block absolute w-[68px] h-[30px] -top-10 -left-5">
            <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%]" />
            <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%]" />
            <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full lg:w-auto px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
        >
          <span className="font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
            View All Testimonials
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-8 lg:gap-[50px] w-full">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[30px] w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full lg:flex-1 bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="flex flex-col items-start gap-6 lg:gap-10 p-6 lg:p-[50px]">
                <div className="inline-flex items-start gap-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Badge
                      key={i}
                      className="inline-flex items-start gap-2.5 p-2 lg:p-2.5 bg-grey-10 rounded-[100px] border border-solid border-neutral-800"
                    >
                      <img
                        className="w-[18px] lg:w-[21.31px] h-[17px] lg:h-[20.36px]"
                        alt="Star rating"
                        src="/shape.svg"
                      />
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-3.5 w-full">
                  <h3 className="font-semibold text-white text-xl lg:text-2xl leading-[1.2] lg:leading-9 self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] tracking-[0]">
                    {testimonial.title}
                  </h3>

                  <p className="font-medium text-white tracking-[0] self-stretch font-['Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full">
                  <img
                    className="w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] object-cover rounded-full"
                    alt="Profile"
                    src={testimonial.profileImage}
                  />

                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <h4 className="self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-white text-lg lg:text-xl tracking-[0] leading-[27px] lg:leading-[30px]">
                      {testimonial.author}
                    </h4>

                    <p className="self-stretch font-['Urbanist',Helvetica] font-medium text-grey-60 text-base lg:text-lg tracking-[0] leading-[24px] lg:leading-[27px]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-5 pb-0 px-0 w-full border-t border-neutral-800">
          <div className="mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-lg lg:text-xl tracking-[0] leading-[27px] lg:leading-[30px]">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 10</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="icon"
              className="p-3 lg:p-3.5 rounded-[69px] border border-solid border-neutral-800"
            >
              <img
                className="w-6 lg:w-[30px] h-6 lg:h-[30px]"
                alt="Previous"
                src="/icon-2.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="p-3 lg:p-3.5 bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
            >
              <img className="w-6 lg:w-[30px] h-6 lg:h-[30px]" alt="Next" src="/icon.svg" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};