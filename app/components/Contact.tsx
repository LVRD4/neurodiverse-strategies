"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
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
        phone: "",
        subject: "",
        message: "",
        interest: "general",
      });
    }, 3000);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
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
            Get In Touch
          </h2>
          <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
            Ready to transform your organization? We&apos;d love to discuss how
            we can support your neuroinclusion goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-[#006666]/20 shadow-md rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#006666]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#006666]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] mb-1 font-semibold">
                      Email Us
                    </h3>
                    <p className="text-[#5a5a5a] text-sm mb-2">
                      We&apos;ll respond within 24 hours
                    </p>
                    <a
                      href="mailto:info@neurodiversestrategies.com"
                      className="text-[#006666] hover:text-[#005555] font-medium"
                    >
                      info@neurodiversestrategies.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#660000]/20 shadow-md rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#660000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#660000]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] mb-1 font-semibold">
                      Call Us
                    </h3>
                    <p className="text-[#5a5a5a] text-sm mb-2">
                      Mon-Fri from 9am to 6pm EST
                    </p>
                    <a
                      href="tel:+18005551234"
                      className="text-[#006666] hover:text-[#005555] font-medium"
                    >
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#006666]/20 shadow-md rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4a9999]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#4a9999]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] mb-1 font-semibold">
                      Visit Us
                    </h3>
                    <p className="text-[#5a5a5a] text-sm">
                      123 Business Plaza
                      <br />
                      Suite 400
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-[#006666]/20 shadow-lg rounded-3xl">
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-2xl text-[#1a1a1a] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#5a5a5a]">
                      Thank you for reaching out. We&apos;ll get back to you
                      soon.
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
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="interest">I&apos;m interested in *</Label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-[#006666]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006666] bg-white"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="keynote">Keynote Speaking</option>
                          <option value="environmental-assessments">
                            Environmental Assessments
                          </option>
                          <option value="professional-development">
                            Professional Development
                          </option>
                          <option value="courses">Online Courses Waitlist</option>
                          <option value="strategy-conversation">
                            Strategy Conversation
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor="terms" className="cursor-pointer">
                        I agree to the privacy policy and terms of service *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#006666] hover:bg-[#005555] text-white py-6 shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-[#5a5a5a] text-center">
                      Your information will be stored securely and used only to
                      respond to your inquiry.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
