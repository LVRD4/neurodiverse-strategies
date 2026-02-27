import {
  Target,
  Building2,
  Award,
  Users,
  Globe,
} from "lucide-react";
import { CurvedDivider } from "./CurvedDivider";

export function About() {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Focus",
      description:
        "Evidence-based frameworks grounded in neurodiversity research and organizational development.",
      bgColor: "bg-[#d4e8e8]",
      textColor: "text-[#003333]",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description:
        "Executive coaching and training that builds adaptive, inclusive leadership capacity.",
      bgColor: "bg-[#e8d4d4]",
      textColor: "text-[#330000]",
    },
    {
      icon: Building2,
      title: "Culture Transformation",
      description:
        "Comprehensive audits and implementation strategies for sustainable organizational change.",
      bgColor: "bg-[#c6dfdf]",
      textColor: "text-[#004d4d]",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Serving corporations, educational institutions, nonprofits, and government agencies worldwide.",
      bgColor: "bg-[#dfcece]",
      textColor: "text-[#4d0000]",
    },
  ];

  return (
    <>
      <section id="about" className="py-24 bg-[#f3f6f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6">
              About Neurodiverse Strategies
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-[#5a5a5a] leading-relaxed">
                Neurodiverse Strategies is a specialized consultancy that
                improves organizational performance by redesigning workplace
                systems to fully leverage neurodivergent talent
              </p>
              <p className="text-xl text-[#5a5a5a] leading-relaxed">
                We partner with leaders, HR professionals, and teams to reduce
                ambiguity, remove structural friction, and build environments
                where cognitive diversity strengthens productivity, retention,
                innovation, and measurable results.
              </p>
              <p className="text-xl text-[#5a5a5a] leading-relaxed">
                Inclusive environments, done strategically, are competitive
                advantages.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl text-[#006666] mb-6 font-bold">
                About Dr. Karen Lynne
              </h3>
              <p className="text-[#1a1a1a] text-lg leading-relaxed mb-4">
                Dr. Karen Lynne is an organizational strategist and the founder
                of Neurodiverse Strategies. She holds a Ph.D. in Leadership,
                Culture, and Curriculum and has spent decades leading change
                initiatives and advancing inclusive, performance-driven
                practices within complex institutional environments.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed mb-4">
                Her doctoral research explored how strategy and organizational
                design shape behavior, building on more than 30 years of direct
                experience supporting neurodivergent individuals across
                educational and professional settings. She has dedicated her
                career to strengthening the environments in which people learn
                and work, guided by the belief that capability should never be
                limited by design. An international presenter on institutional
                effectiveness and inclusive systems, she now partners with
                leaders and teams to translate cognitive diversity into
                measurable organizational strength.
              </p>
              <p className="text-[#5a5a5a] leading-relaxed">
                She has developed and implemented highly successful
                neuroinclusive programs that improved retention, clarified
                processes, and strengthened cross-functional collaboration. She
                has also advised senior institutional leaders on accessibility
                and inclusion strategy, bringing regulatory expertise and
                systems-level insight to executive decision-making.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-3xl ${pillar.bgColor} hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div
                    className={`w-14 h-14 ${
                      pillar.bgColor === "bg-[#d4e8e8]" ||
                      pillar.bgColor === "bg-[#c6dfdf]"
                        ? "bg-[#006666]"
                        : "bg-[#660000]"
                    } rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3
                    className={`text-lg ${pillar.textColor} mb-3 font-semibold uppercase tracking-wide`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-[#006666] to-[#005555] rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#660000] rounded-full opacity-10 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Neurodiverse Strategies</h3>
              <p className="text-white/95 leading-relaxed text-lg">
                We strengthen organizational outcomes by helping leaders and
                teams build neuroinclusive environments that improves
                engagement, productivity, and retention.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl text-[#006666] mb-8 text-center font-bold">
              Our Impact
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border-2 border-[#006666]/10 rounded-2xl bg-[#d4e8e8]/30">
                <div className="w-16 h-16 bg-[#006666]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#006666]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#006666] mb-2">
                  Evidence-Based
                </div>
                <p className="text-[#5a5a5a]">
                  Grounded in international accessibility standards,
                  neurodiversity frameworks, and organizational culture theory
                </p>
              </div>
              <div className="text-center p-6 border-2 border-[#660000]/30 rounded-2xl bg-[#e8d4d4]/30">
                <div className="w-16 h-16 bg-[#660000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#660000]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#660000] mb-2">
                  Proven Results
                </div>
                <p className="text-[#5a5a5a]">
                  Demonstrated improvements in employee engagement, retention,
                  and workplace satisfaction
                </p>
              </div>
              <div className="text-center p-6 border-2 border-[#006666]/20 rounded-2xl bg-[#c6dfdf]/30">
                <div className="w-16 h-16 bg-[#006666]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-[#006666]" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#006666] mb-2">
                  Comprehensive Support
                </div>
                <p className="text-[#5a5a5a]">
                  Ongoing consulting, training, and resources to ensure lasting
                  organizational transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider color="#ffffff" />
    </>
  );
}
