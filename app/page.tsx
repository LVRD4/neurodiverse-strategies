"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection, SolutionSection } from "./components/ProblemSolution";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  const handleBookingClick = (serviceType: string) => {
    const calendlyUrl =
      process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/";
    const url = new URL(calendlyUrl);

    url.searchParams.set("utm_source", "neurodiverse-strategies");
    url.searchParams.set("utm_content", serviceType);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WhatWeOffer onBookingClick={handleBookingClick} />
        <About />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
