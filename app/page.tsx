"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingForm } from "./components/BookingForm";

export default function Home() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookingClick = (serviceType: string) => {
    setSelectedService(serviceType);
    setShowBookingForm(true);
  };

  const handleCloseBooking = () => {
    setShowBookingForm(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatWeOffer onBookingClick={handleBookingClick} />
        <Blog />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {showBookingForm && (
        <BookingForm
          serviceType={selectedService}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  );
}

