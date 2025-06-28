import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const statsData = [
    { value: "500+", label: "Happy Customers" },
    { value: "25k+", label: "Properties For Clients" },
    { value: "12+", label: "Years of Experience" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white hero-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-up">
                Discover Your{" "}
                <span className="text-primary-600 animate-pulse-slow">Dream Property</span> with
                Rentwala
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your journey to finding the perfect property begins here. Explore
                our listings to find the home that matches your dreams in India's prime locations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/properties">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 group transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  Browse Properties
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {statsData.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-none bg-white/50 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <CardContent className="p-4">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600 animate-pulse-slow">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern luxury home"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 animate-float">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center animate-pulse-slow">
                    <span className="text-primary-600 font-bold">🏠</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Premium Location</div>
                    <div className="text-sm text-gray-600">Best neighborhoods</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 bg-white shadow-xl border-0 animate-float" style={{ animationDelay: '1s' }}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center animate-wiggle">
                    <span className="text-primary-600 font-bold">⭐</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5.0 Rating</div>
                    <div className="text-sm text-gray-600">Trusted by clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-300 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};