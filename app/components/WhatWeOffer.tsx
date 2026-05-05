import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  MessagesSquare,
  Users,
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

const services = [
  {
    icon: MessagesSquare,
    title: "30-Day Coaching Intensive",
    serviceType: "coaching-intensive",
    detailId: "coaching-intensive",
    iconClassName: "bg-[#221da0]",
    description:
      "Focused, expert guidance for one challenge right now. For 30 days, you get direct access by phone, email, or Zoom, focused entirely on your situation.",
    highlights: [
      "Direct access with responses within 24 hours",
      "Practical guidance rooted in real workplace experience",
      "One flat fee. No hourly clock-watching.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Workplace Neurodiversity Assessment & Manager Development",
    serviceType: "assessment-development",
    detailId: "assessment-development",
    iconClassName: "bg-[#2485bd]",
    description:
      "You cannot train your way out of a problem you have not properly diagnosed. We start with assessment, then build workshops your managers actually need.",
    highlights: [
      "Confidential surveys, focus groups, and interviews",
      "Real workplace data, not assumptions",
      "Custom manager development workshops",
    ],
  },
  {
    icon: Users,
    title:
      "Workplace Neurodiversity Assessment, Manager Development & 90-Day Coaching",
    serviceType: "assessment-development-coaching",
    detailId: "assessment-development-coaching",
    iconClassName: "bg-[#f76201]",
    description:
      "The full solution: assessment, custom training, and 90 days of direct coaching support to make sure the change actually sticks.",
    highlights: [
      "Assessment across all key stakeholders",
      "Manager development built from your findings",
      "90 days of follow-up coaching support",
    ],
  },
];

export function WhatWeOffer({ onBookingClick }: WhatWeOfferProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="what-we-offer" className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[#78D047] text-sm font-semibold uppercase tracking-wider mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-5xl text-[#1a1a1a] leading-[1.18] mb-4 sm:mb-6">
              Practical Support for Neuroinclusive Workplaces
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-4xl mx-auto leading-relaxed sm:text-xl">
              Choose the level of support that fits the challenge in front of
              you, from focused coaching to full assessment, manager
              development, and implementation support.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 mb-14 sm:gap-6 sm:mb-20">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.serviceType}
                  className="flex h-full flex-col rounded-2xl border-2 border-[#78D047]/25 bg-[#fbfbff] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#78D047]/70 hover:shadow-xl"
                >
                  <CardHeader>
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${service.iconClassName} shadow-md`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl leading-tight text-[#1a1a1a] sm:text-2xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-[#5a5a5a]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <ul className="mb-8 space-y-3">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle
                            className="mt-0.5 flex-shrink-0 text-[#78D047]"
                            size={18}
                          />
                          <span className="text-sm leading-relaxed text-[#1a1a1a]">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto space-y-3">
                      <Button
                        onClick={() => onBookingClick(service.serviceType)}
                        className="w-full bg-[#221da0] text-white shadow-md ring-2 ring-[#78D047]/30 transition-all hover:bg-[#1b177f] hover:shadow-lg"
                      >
                        Book Discovery Call Now
                        <CalendarCheck className="ml-2" size={18} />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => scrollToSection(service.detailId)}
                        className="w-full border-2 border-[#78D047] text-[#221da0] transition-all hover:bg-[#78D047] hover:text-[#1a1a1a]"
                      >
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="space-y-8">
            <ServiceDetail
              id="coaching-intensive"
              eyebrow="Focused support"
              title="30-Day Coaching Intensive"
              intro="Sometimes you do not need a lengthy engagement, you need focused, expert guidance on one challenge, right now. The 30-Day Coaching Intensive gives you direct, private access to an expert for a full month."
              sections={[
                {
                  title: "How it works",
                  body: "For 30 days, you can reach me by phone, email, or Zoom at mutually convenient times. No waiting weeks for a scheduled appointment. No hourly clock-watching. You have retained my expertise for the full interval, focused entirely on your situation.",
                },
                {
                  title: "What is included",
                  body: "Direct access with responses within 24 hours, candid evidence-based guidance rooted in real workplace experience, a clear focus on your specific challenge, a practical path forward, and complete confidentiality.",
                },
                {
                  title: "Investment",
                  body: "A single flat fee of $3500. Paid in advance. No surprises.",
                },
              ]}
              closing="This is not a webinar. It is not a course. It is one-on-one support with someone who understands neurodiversity in the workplace from the inside out."
              onBookingClick={() => onBookingClick("coaching-intensive")}
            />

            <ServiceDetail
              id="assessment-development"
              eyebrow="Assessment and development"
              title="Workplace Neurodiversity Assessment & Manager Development"
              intro="Most organizations invest in diversity training before they truly understand what is happening in their own workplace. This engagement starts with listening, not assumptions."
              sections={[
                {
                  title: "Phase 1: The Assessment",
                  body: "We go directly to the source. Using confidential surveys, focus groups, and one-on-one interviews with employees, managers, and leadership, we build a clear, honest picture of how your workplace actually exists, not as it is assumed to be.",
                },
                {
                  title: "Phase 2: Custom Manager Development Workshops",
                  body: "Based solely on what the assessment reveals, we design and deliver professional development workshops built for your managers, your culture, and your specific challenges. No off-the-shelf content. No generic sensitivity training.",
                },
                {
                  title: "Investment",
                  body: "Every organization is different in size, complexity, and what the assessment uncovers. Investment is determined by the scope of the assessment, the number of stakeholders involved, and the depth of development work required.",
                },
              ]}
              closing="What I can tell you is this: the cost of doing nothing, in turnover, lost productivity, legal exposure, and missed talent, is almost always far greater than the cost of getting it right."
              onBookingClick={() => onBookingClick("assessment-development")}
            />

            <ServiceDetail
              id="assessment-development-coaching"
              eyebrow="Full engagement"
              title="Workplace Neurodiversity Assessment, Manager Development & 90-Day Coaching"
              intro="Most workplace initiatives fail not because the training was bad, but because nothing reinforced it afterward. This engagement is built differently."
              sections={[
                {
                  title: "Phase 1: The Assessment",
                  body: "We start by listening. Confidential surveys, focus groups, and one-on-one interviews across all stakeholders give us an honest, evidence-based picture of your workplace. Real data. No assumptions.",
                },
                {
                  title: "Phase 2: Custom Manager Development Workshops",
                  body: "Using only what the assessment reveals, we design and deliver professional development workshops built specifically for your managers and your culture. Practical, targeted, and immediately applicable.",
                },
                {
                  title: "Phase 3: 90 Days of Coaching",
                  body: "For 90 days following the workshops, your managers have direct access to me by phone, email, or Zoom. When a real situation arises, they do not have to guess. They have an expert in their corner, when it matters most.",
                },
              ]}
              closing="This is the difference between a training event and lasting organizational change. It is designed for organizations serious about getting this right."
              onBookingClick={() =>
                onBookingClick("assessment-development-coaching")
              }
            />
          </div>
        </div>
      </section>
      <CurvedDivider color="#f7f8ff" />
    </>
  );
}

function ServiceDetail({
  id,
  eyebrow,
  title,
  intro,
  sections,
  closing,
  onBookingClick,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
  closing: string;
  onBookingClick: () => void;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 rounded-2xl border border-[#78D047]/30 bg-gradient-to-br from-[#fbfbff] to-white p-5 shadow-sm sm:scroll-mt-28 sm:p-8 md:p-10"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#78D047]">
        {eyebrow}
      </p>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <h3 className="text-2xl font-semibold leading-tight text-[#1a1a1a] md:text-4xl">
            {title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#5a5a5a] sm:mt-5 sm:text-lg">{intro}</p>
          <Button
            onClick={onBookingClick}
            className="mt-6 w-full bg-[#221da0] px-6 py-5 text-base text-white shadow-md ring-2 ring-[#78D047]/30 hover:bg-[#1b177f] sm:mt-7 sm:w-auto sm:py-6"
          >
            Book Discovery Call Now
            <CalendarCheck className="ml-2" size={18} />
          </Button>
        </div>

        <div className="space-y-5">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-[#1a1a1a]">
                {section.title}
              </h4>
              <p className="mt-1 leading-relaxed text-[#5a5a5a]">
                {section.body}
              </p>
            </div>
          ))}
          <p className="border-l-4 border-[#78D047] pl-4 text-base leading-relaxed text-[#1a1a1a]">
            {closing}
          </p>
        </div>
      </div>
    </article>
  );
}
