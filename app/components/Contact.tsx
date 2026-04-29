"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "newsletter",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        interest: "newsletter",
      });
    }, 3000);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Opt-In Form
          </h2>
          <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
            Opt in to receive newsletters and the upcoming video series on
            neuroinclusive workplaces, manager development, and practical
            strategies for supporting neurodivergent employees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-[#221da0]/20 shadow-lg rounded-3xl">
            <CardContent className="pt-6">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl text-[#1a1a1a] mb-2">
                    You&apos;re Opted In!
                  </h3>
                  <p className="text-[#5a5a5a]">
                    Thank you for signing up. We&apos;ll send updates as new
                    newsletters and videos are released.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interest">I&apos;m interested in *</Label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-[#221da0]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#221da0] bg-white"
                    >
                      <option value="newsletter">Newsletter</option>
                      <option value="video-series">Video Series</option>
                      <option value="newsletter-and-video-series">
                        Newsletter and Video Series
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="terms" className="cursor-pointer">
                      I agree to receive email updates from Neurodiverse
                      Strategies *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#221da0] hover:bg-[#1b177f] text-white py-6 shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Opt In
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-[#5a5a5a] text-center">
                    Your information will be stored securely and used only to
                    send the updates you request.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
