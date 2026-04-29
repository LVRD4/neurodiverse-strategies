"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b-2 border-[#78D047]/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold text-[#221da0] cursor-pointer decoration-[#78D047] decoration-4 underline-offset-4 hover:underline"
              onClick={() => scrollToSection("home")}
            >
              Neurodiverse Strategies
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-[#1a1a1a] hover:text-[#221da0] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("what-we-offer")}
              className="text-[#1a1a1a] hover:text-[#221da0] transition-colors font-medium"
            >
              What We Offer
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="text-[#1a1a1a] hover:text-[#221da0] transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#1a1a1a] hover:text-[#221da0] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#1a1a1a] hover:text-[#221da0] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-[#221da0] hover:bg-[#1b177f] text-white shadow-md ring-2 ring-[#78D047]/30"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-[#221da0]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#221da0]/15">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#1a1a1a] hover:text-[#221da0] transition-colors text-left font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("what-we-offer")}
                className="text-[#1a1a1a] hover:text-[#221da0] transition-colors text-left font-medium"
              >
                What We Offer
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-[#1a1a1a] hover:text-[#221da0] transition-colors text-left font-medium"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#1a1a1a] hover:text-[#221da0] transition-colors text-left font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#1a1a1a] hover:text-[#221da0] transition-colors text-left font-medium"
              >
                Contact
              </button>
              <Button
                className="bg-[#221da0] hover:bg-[#1b177f] text-white w-full ring-2 ring-[#78D047]/30"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
