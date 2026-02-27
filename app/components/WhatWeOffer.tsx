import {
  Mic,
  FileSearch,
  Users,
  Laptop,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CurvedDivider } from "./CurvedDivider";

interface WhatWeOfferProps {
  onBookingClick: (serviceType: string) => void;
}

export function WhatWeOffer({ onBookingClick }: WhatWeOfferProps) {
  const services = [
    {
      icon: Mic,
      title: "Keynote Speaking",
      description:
        "Engaging, research-informed keynotes that reframe neurodiversity as a strategic advantage rather than a compliance issue.",
      fullDescription:
        "These talks move beyond awareness, equipping leaders and teams with a strategic perspective that strengthens execution, retention, and innovation.",
      features: [
        "Neurodiversity as Competitive Advantage",
        "From Awareness to Organizational Impact",
        "Performance Beyond Uniformity",
        "Leading Across Cognitive Differences",
      ],
      actionText: "Book a Keynote",
      serviceType: "keynote",
    },
    {
      icon: FileSearch,
      title: "Performance & Environment Analysis",
      description:
        "Our assessment evaluates how your organization supports and leverages neurodivergent talent across leadership, systems, and team dynamics.",
      fullDescription:
        "Through structured analysis and data-driven review, we identify barriers limiting performance and provide clear, actionable recommendations within a defined project timeline.",
      features: [
        "Leadership & Management Practices",
        "Performance & Evaluation Systems",
        "Team Collaboration & Peer Dynamics",
        "Workplace & Sensory Environment",
      ],
      actionText: "Request an Assessment",
      serviceType: "audit",
    },
    {
      icon: Users,
      title: "Neurodiversity Professional Development",
      description:
        "Targeted professional development for leaders and teams focused on supporting neurodivergent colleagues, strengthening communication, and improving day-to-day collaboration.",
      fullDescription:
        "Sessions are practical, actionable, and designed to translate directly into measurable workplace improvement.",
      features: [
        "Foundations of Neurodiversity",
        "Leading Neurodivergent Talent for Performance",
        "Designing Inclusive Work Environments",
        "Inclusive communication strategies",
      ],
      actionText: "Explore Professional Development",
      serviceType: "coaching",
    },
    {
      icon: Laptop,
      title: "Online Courses & Toolkits",
      description:
        "Scalable, self-paced digital learning resources that allow organizations to sustain neuroinclusive practices beyond live training engagements.",
      fullDescription:
        "Designed for long-term impact, onboarding, and leadership continuity.",
      features: [
        "Self-paced online modules",
        "Implementation toolkits",
        "Onboarding resources",
        "Leadership continuity support",
      ],
      actionText: "Join Waitlist",
      serviceType: "courses",
      comingSoon: true,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="what-we-offer" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#006666] text-sm font-semibold uppercase tracking-wider mb-3">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6">
              Practical Strategies to Strengthen Operational Performance
            </h2>
            <p className="text-xl text-[#5a5a5a] max-w-4xl mx-auto leading-relaxed">
              We work with leaders and teams to strengthen operational
              performance in neurodiverse environments. Through keynote
              presentations, workplace assessments, professional development,
              and educational programs, we equip organizations to better
              leverage neurodivergent talent and improve measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[#006666]/10 hover:border-[#006666]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden group rounded-3xl"
                >
                  {service.comingSoon && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="bg-[#660000] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                        Coming Soon
                      </div>
                    </div>
                  )}

                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#006666]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative">
                    <div className="w-16 h-16 rounded-xl bg-[#006666] flex items-center justify-center mb-5 shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-[#1a1a1a] text-2xl mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-[#5a5a5a] text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <p className="text-[#5a5a5a] text-sm mt-3 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </CardHeader>

                  <CardContent className="relative">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-[#660000] mr-3 mt-0.5 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-[#1a1a1a]">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() =>
                        service.comingSoon
                          ? scrollToContact()
                          : onBookingClick(service.serviceType)
                      }
                      className="w-full bg-[#006666] hover:bg-[#005555] text-white shadow-md hover:shadow-lg transition-all group/btn"
                    >
                      {service.actionText}
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        size={18}
                      />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-[#006666] to-[#005555] rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#660000] rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4a9999] rounded-full opacity-10 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl mb-4 font-bold">
                Neuroinclusive environments drive measurable results.
              </h3>
              <p className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto">
                Intentional alignment across leadership, teams, and workplace
                systems strengthens execution and organizational outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-white text-[#006666] hover:bg-[#f3f6f4] px-8 py-6 text-lg shadow-lg font-semibold"
                  onClick={() => onBookingClick("consultation")}
                >
                  Request a Strategy Conversation
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider color="#f3f6f4" />
    </>
  );
}
