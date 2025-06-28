import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const FAQSection = (): JSX.Element => {
  // Footer navigation data
  const footerNavigation = {
    home: {
      title: "Home",
      links: [
        "Hero Section",
        "Features",
        "Properties",
        "Testimonials",
        "FAQ's",
      ],
    },
    aboutUs: {
      title: "About Us",
      links: [
        "Our Story",
        "Our Works",
        "How It Works",
        "Our Team",
        "Our Clients",
      ],
    },
    properties: {
      title: "Properties",
      links: ["Portfolio", "Categories"],
    },
    services: {
      title: "Services",
      links: [
        "Valuation Mastery",
        "Strategic Marketing",
        "Negotiation Wizardry",
        "Closing Success",
        "Property Management",
      ],
    },
    contactUs: {
      title: "Contact Us",
      links: ["Contact Form", "Our Offices"],
    },
  };

  // Social media icons
  const socialIcons = [
    { src: "/icon-5.svg", alt: "Icon" },
    { src: "/icon-6.svg", alt: "Icon" },
    { src: "/icon-12.svg", alt: "Icon" },
    { src: "/icon-17.svg", alt: "Icon" },
  ];

  return (
    <div className="flex flex-col w-full items-end relative">
      {/* CTA Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[250px] px-4 lg:px-[162px] py-12 lg:py-[100px] relative w-full border-t border-b border-neutral-800">
        <img
          className="hidden lg:block absolute w-[633px] h-[331px] top-9 right-0"
          alt="Abstract design"
          src="/abstract-design-1.svg"
        />

        <img
          className="hidden lg:block absolute w-[546px] h-[308px] top-[59px] left-0"
          alt="Abstract design"
          src="/abstract-design.svg"
        />

        <div className="flex flex-col items-start gap-3.5 relative flex-1">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-white text-3xl lg:text-5xl tracking-[0] leading-[1.2] lg:leading-[72px]">
            Start Your Real Estate Journey Today
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-base lg:text-lg leading-[24px] lg:leading-[27px]">
            Your dream property is just a click away. Whether you&#39;re looking
            for a new home, a strategic investment, or expert real estate
            advice, Estatein is here to assist you every step of the way. Take
            the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <Button className="w-full lg:w-auto px-6 py-[18px] h-auto bg-purple-60 rounded-[10px] font-['Urbanist',Helvetica] font-medium text-white text-lg leading-[27px]">
          Explore Properties
        </Button>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col items-start w-full bg-transparent">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20 px-4 lg:px-[162px] py-12 lg:py-[100px] w-full">
          {/* Logo and Newsletter Signup */}
          <div className="flex flex-col w-full lg:w-[538px] items-start gap-6 lg:gap-[30px]">
            <div className="relative w-32 lg:w-40 h-10 lg:h-12">
              <img
                className="absolute w-10 lg:w-12 h-10 lg:h-12 top-0 left-0"
                alt="Symbol"
                src="/symbol.svg"
              />
              <img
                className="absolute w-[82px] lg:w-[102px] h-[17px] lg:h-[21px] top-3 lg:top-[15px] left-12 lg:left-[58px]"
                alt="Text"
                src="/text-1.png"
              />
            </div>

            <Card className="w-full lg:w-[423px] bg-grey-08 rounded-xl border border-solid border-neutral-800">
              <CardContent className="flex items-center gap-2.5 p-4 lg:p-6">
                <img className="w-5 lg:w-6 h-5 lg:h-6" alt="Icon" src="/icon-19.svg" />
                <Input
                  className="flex-1 bg-transparent border-0 font-['Urbanist',Helvetica] font-medium text-grey-60 text-base lg:text-lg tracking-[-0.11px] leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-grey-60"
                  placeholder="Enter Your Email"
                />
                <div className="relative w-6 lg:w-[30px] h-6 lg:h-[30px]">
                  <div className="relative w-5 lg:w-[25px] h-5 lg:h-[25px] top-0.5 left-0.5 bg-[url(/send.png)] bg-[100%_100%]" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row items-start justify-between flex-1 gap-8 lg:gap-0">
            {/* Home Links */}
            <div className="flex flex-col items-start gap-6 lg:gap-[30px]">
              <h3 className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg lg:text-xl tracking-[-0.12px] leading-6">
                {footerNavigation.home.title}
              </h3>
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                {footerNavigation.home.links.map((link, index) => (
                  <a
                    key={`home-link-${index}`}
                    href="#"
                    className="font-['Urbanist',Helvetica] font-medium text-white text-base lg:text-lg tracking-[-0.11px] leading-6"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* About Us Links */}
            <div className="flex flex-col items-start gap-6 lg:gap-[30px]">
              <h3 className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg lg:text-xl tracking-[-0.12px] leading-6">
                {footerNavigation.aboutUs.title}
              </h3>
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                {footerNavigation.aboutUs.links.map((link, index) => (
                  <a
                    key={`about-link-${index}`}
                    href="#"
                    className="font-['Urbanist',Helvetica] font-medium text-white text-base lg:text-lg tracking-[-0.11px] leading-6"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Properties Links */}
            <div className="flex flex-col items-start gap-6 lg:gap-[30px]">
              <h3 className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg lg:text-xl tracking-[-0.12px] leading-6">
                {footerNavigation.properties.title}
              </h3>
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                {footerNavigation.properties.links.map((link, index) => (
                  <a
                    key={`properties-link-${index}`}
                    href="#"
                    className="font-['Urbanist',Helvetica] font-medium text-white text-base lg:text-lg tracking-[-0.11px] leading-6"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="flex flex-col items-start gap-6 lg:gap-[30px]">
              <h3 className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg lg:text-xl tracking-[-0.12px] leading-6">
                {footerNavigation.services.title}
              </h3>
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                {footerNavigation.services.links.map((link, index) => (
                  <a
                    key={`services-link-${index}`}
                    href="#"
                    className="font-['Urbanist',Helvetica] font-medium text-white text-base lg:text-lg tracking-[-0.11px] leading-6"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us Links */}
            <div className="flex flex-col items-start gap-6 lg:gap-[30px]">
              <h3 className="font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg lg:text-xl tracking-[-0.12px] leading-6">
                {footerNavigation.contactUs.title}
              </h3>
              <div className="flex flex-col items-start gap-4 lg:gap-5">
                {footerNavigation.contactUs.links.map((link, index) => (
                  <a
                    key={`contact-link-${index}`}
                    href="#"
                    className="font-['Urbanist',Helvetica] font-medium text-white text-base lg:text-lg tracking-[-0.11px] leading-6"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-[162px] py-4 w-full bg-grey-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-[38px] py-2.5">
            <p className="font-['Urbanist',Helvetica] font-medium text-absolutewhite text-base lg:text-lg tracking-[-0.11px] leading-6">
              @2023 Estatein. All Rights Reserved.
            </p>
            <a
              href="#"
              className="font-['Urbanist',Helvetica] font-medium text-absolutewhite text-base lg:text-lg tracking-[-0.11px] leading-6"
            >
              Terms & Conditions
            </a>
          </div>

          <div className="flex items-center gap-2.5 py-2.5">
            {socialIcons.map((icon, index) => (
              <Button
                key={`social-icon-${index}`}
                variant="ghost"
                size="icon"
                className="p-2.5 lg:p-3.5 bg-grey-08 rounded-[58px] overflow-hidden"
              >
                <img className="w-5 lg:w-6 h-5 lg:h-6" alt={icon.alt} src={icon.src} />
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};