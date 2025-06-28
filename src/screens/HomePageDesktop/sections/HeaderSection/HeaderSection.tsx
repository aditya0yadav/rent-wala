import { XIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", active: location.pathname === "/" },
    { name: "About Us", path: "/about", active: location.pathname === "/about" },
    { name: "Properties", path: "/properties", active: location.pathname === "/properties" },
    { name: "Services", path: "/services", active: location.pathname === "/services" },
  ];

  return (
    <header className="flex flex-col w-full border-b border-neutral-800 bg-transparent">
      {/* Notification Banner */}
      <div className="flex items-center justify-center gap-2.5 px-4 lg:px-40 py-[18px] relative w-full bg-grey-10 overflow-hidden border-b border-neutral-800">
        <div className="absolute w-full h-[1282px] top-[-610px] left-0">
          <div className="relative w-full h-[1279px] top-px left-px">
            <div className="h-[1279px]">
              <div className="relative w-full h-[1279px]">
                <img
                  className="absolute w-full h-[63px] top-[609px] left-0"
                  alt="Group"
                  src="/group.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-white text-sm lg:text-lg text-center tracking-[0] leading-[27px]">
          ✨Discover Your Dream Property with Estatein
        </div>

        <div className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-white text-sm lg:text-lg text-center tracking-[0] leading-[27px] underline whitespace-nowrap">
          Learn More
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="inline-flex items-center justify-center p-1 absolute top-[15px] right-4 lg:right-16 bg-[#ffffff1a] rounded-[75px] hover:bg-[#ffffff33]"
        >
          <XIcon className="h-4 w-4 lg:h-6 lg:w-6" />
        </Button>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 lg:px-[162px] py-5 w-full bg-grey-10">
        {/* Logo */}
        <Link to="/" className="relative w-24 lg:w-36 h-8 lg:h-12">
          <img
            className="absolute w-[29px] lg:w-[43px] h-8 lg:h-12 top-0 left-0"
            alt="Symbol"
            src="/symbol.svg"
          />
          <img
            className="absolute w-[52px] lg:w-[77px] h-[14px] lg:h-[21px] top-[10px] lg:top-[15px] left-[35px] lg:left-[52px]"
            alt="Text"
            src="/text.png"
          />
        </Link>

        {/* Navigation Items - Hidden on mobile, shown on desktop */}
        <nav className="hidden lg:flex items-center gap-[30px]">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`${
                item.active
                  ? "inline-flex items-start gap-2.5 px-6 py-3.5 bg-grey-08 rounded-[10px] border border-solid border-neutral-800"
                  : ""
              }`}
            >
              <Link
                to={item.path}
                className="relative w-fit font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden p-2 bg-grey-08 rounded-[10px] border border-solid border-neutral-800"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>

        {/* Contact Button - Hidden on mobile */}
        <Button
          variant="outline"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-4 bg-grey-08 rounded-[10px] border border-solid border-neutral-800 font-['Urbanist',Helvetica] font-medium text-white text-lg hover:bg-grey-15"
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};