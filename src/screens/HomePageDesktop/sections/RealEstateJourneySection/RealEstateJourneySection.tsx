import React from "react";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const RealEstateJourneySection = (): JSX.Element => {
  const faqItems = [
    {
      question: "How do I search for properties on Rentwala?",
      description: "Learn how to use our user-friendly search tools to find properties that match your criteria and preferences across India.",
    },
    {
      question: "What documents do I need to sell my property through Rentwala?",
      description: "Find out about the necessary documentation and requirements for listing your property with our professional team in India.",
    },
    {
      question: "How can I contact a Rentwala agent?",
      description: "Discover the different ways you can get in touch with our experienced agents for personalized assistance across Indian cities.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 space-y-4 lg:space-y-0">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Find answers to common questions about Rentwala's services, property listings, 
              and the real estate process in India. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <Button variant="outline" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            View All FAQ's
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <HelpCircle className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300 animate-pulse-slow" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                  {item.question}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                
                <Button variant="outline" size="sm" className="group/btn transform hover:scale-105 transition-all duration-300">
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};