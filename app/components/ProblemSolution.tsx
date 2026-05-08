import {
  ArrowUpRight,
  Brain,
  Gauge,
  MessageCircleWarning,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";

const painPoints = [
  {
    title: "High employee turnover",
    icon: TrendingDown,
  },
  {
    title: "Underutilized talent",
    icon: Brain,
  },
  {
    title: "Leadership inefficiencies",
    icon: Gauge,
  },
  {
    title: "Missed productivity opportunities",
    icon: Target,
  },
  {
    title: "Preventable communication breakdowns",
    icon: MessageCircleWarning,
  },
];

const benefits = [
  "Increased retention",
  "Improved productivity",
  "Stronger leadership alignment",
  "Better team communication",
];

export function ProblemSection() {
  return (
    <section className="bg-white py-14 sm:py-20" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#221da0]">
            The hidden business cost
          </span>
          <h2
            id="problem-heading"
            className="mt-3 text-3xl leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl"
          >
            What Is This Costing Your Organization?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5a5a5a] sm:text-lg">
            Operational inefficiency can show up as turnover, underperformance,
            slowed decision-making, repeated management intervention, and
            preventable talent loss.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {painPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-[#221da0]/10 bg-[#f7f8ff] p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#221da0] text-white shadow-md ring-4 ring-[#78D047]/20">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-[#1a1a1a]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section
      className="bg-[#f7f8ff] py-14 sm:py-20"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#221da0]">
            The opportunity
          </span>
          <h2
            id="solution-heading"
            className="mt-3 text-3xl leading-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl"
          >
            The Opportunity of Neuroinclusive Workplaces
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5a5a5a] sm:text-lg">
            Organizations that embrace neurodiversity can improve retention,
            strengthen team performance, and build more effective leadership
            practices. By aligning workplace systems with diverse cognitive
            styles, companies unlock productivity, innovation, and long-term
            growth.
          </p>
        </div>

        <div className="rounded-3xl bg-[#221da0] p-5 shadow-xl sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-2xl bg-white/95 p-4 text-[#1a1a1a]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#78D047] text-[#1a1a1a]">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold leading-snug">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/20 bg-white/10 p-5 text-white">
            <Users className="mb-4 text-[#78D047]" size={28} aria-hidden="true" />
            <p className="text-sm leading-7 text-white/85">
              Better workplace systems help managers support people earlier,
              reduce avoidable friction, and make performance easier to sustain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
