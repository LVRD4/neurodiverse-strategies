"use client";

import { useState } from "react";
import {
  X,
  CheckCircle,
  Calendar,
  Building2,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface BookingFormProps {
  serviceType: string;
  onClose: () => void;
}

export function BookingForm({ serviceType, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    preferredDate: "",
    attendees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceLabels: Record<string, string> = {
    keynote: "Keynote Speaking Engagement",
    audit: "Performance & Environment Analysis",
    coaching: "Neurodiversity Professional Development",
    courses: "Online Courses (Coming Soon)",
    consultation: "Strategy Conversation",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Booking submitted:", { serviceType, ...formData });
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      onClose();
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl mx-auto my-2 max-h-[calc(100dvh-1rem)] shadow-2xl border-2 border-[#006666]/30 rounded-3xl overflow-hidden flex flex-col">
        <CardHeader className="relative bg-gradient-to-br from-[#006666] to-[#005555] text-white rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>

          <CardTitle className="text-2xl md:text-3xl pr-10 pb-2">
            {serviceLabels[serviceType] || "Book Our Services"}
          </CardTitle>
          <CardDescription className="text-white/90 text-base">
            Fill out the form below and we&apos;ll reach out to you within 24
            hours to discuss details and availability.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl text-[#1a1a1a] mb-3">
                Request Submitted!
              </h3>
              <p className="text-[#5a5a5a] mb-2">
                Thank you for your interest in our services.
              </p>
              <p className="text-[#5a5a5a]">
                We&apos;ll review your request and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#006666] flex items-center gap-2">
                  <User size={20} />
                  Personal Information
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
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
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="position">Position/Title</Label>
                    <Input
                      id="position"
                      name="position"
                      type="text"
                      placeholder="HR Director"
                      value={formData.position}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#006666] flex items-center gap-2">
                  <Building2 size={20} />
                  Organization Details
                </h4>

                <div>
                  <Label htmlFor="company">Company/Organization Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Corporation"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                {serviceType === "workshop" && (
                  <div>
                    <Label htmlFor="attendees">
                      Expected Number of Attendees
                    </Label>
                    <Input
                      id="attendees"
                      name="attendees"
                      type="text"
                      placeholder="e.g., 20-30 people"
                      value={formData.attendees}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#006666] flex items-center gap-2">
                  <Calendar size={20} />
                  Service Details
                </h4>

                <div>
                  <Label htmlFor="preferredDate">Preferred Date/Timeframe</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="text"
                    placeholder="e.g., March 2026 or Q2 2026"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Please share more about your needs, goals, and any specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#006666]/20">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#006666] hover:bg-[#005555] text-white py-6 text-lg shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Mail size={20} className="mr-2" />
                      Submit Booking Request
                    </>
                  )}
                </Button>

                <p className="text-xs text-[#5a5a5a] text-center mt-4">
                  By submitting this form, you agree to be contacted by our team
                  regarding your inquiry.
                </p>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
