import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CurvedDivider } from './CurvedDivider';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative bg-gradient-to-br from-white to-[#f7f8ff] py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#221da0]/10 text-[#221da0] px-4 py-2 rounded-full text-sm font-semibold border border-[#221da0]/30">
                  Workplace Transformation
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl text-[#1a1a1a] leading-tight">
                Employee Turnover is Costing You More Than You Think
              </h1>
              <div className="space-y-3">
                <p className="text-xl text-[#5a5a5a] leading-relaxed">
                  Up to 85% of neurodivergent employees won&apos;t keep their jobs,
                  and their companies are paying the price.
                </p>
                <div className="rounded-2xl border border-[#221da0]/15 bg-white/80 px-6 py-5 text-[#5a5a5a] shadow-sm">
                  <h2 className="text-center text-xl font-semibold leading-tight text-[#1a1a1a]">
                    Here&apos;s what the research actually shows and what it&apos;s
                    costing companies:
                  </h2>
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed marker:text-[#221da0]">
                    <li>
                      <strong className="font-semibold text-[#1a1a1a]">
                        $236 million. That&apos;s the annual cost of unaddressed
                        neurodivergent challenges in the U.S.
                      </strong>{' '}
                      — and that doesn&apos;t include lost productivity, missed
                      deadlines, or management friction.
                    </li>
                    <li>
                      <strong className="font-semibold text-[#1a1a1a]">
                        1 in 5 employees is likely neurodivergent
                      </strong>{' '}
                      — yet most organizations have zero formal support systems
                      in place.
                    </li>
                    <li>
                      <strong className="font-semibold text-[#1a1a1a]">
                        100% of HR professionals surveyed reported no formal
                        neurodivergent training for managers
                      </strong>{' '}
                      — leaving leaders without the tools to act.
                    </li>
                    <li>
                      <strong className="font-semibold text-[#1a1a1a]">
                        JPMorgan Chase reported neurodivergent employees were
                        90-140% more productive than their peers.
                      </strong>{' '}
                      The cost of losing them isn&apos;t just replacement, it&apos;s
                      lost performance.
                    </li>
                    <li>
                      <strong className="font-semibold text-[#1a1a1a]">
                        The cost of replacing an employee
                      </strong>{' '}
                      is 50% – 200% of their annual salary
                    </li>
                  </ul>
                  <p className="mt-8 text-sm leading-relaxed text-[#5a5a5a]">
                    Sources: National Institutes of Health | CNBC (Caminiti,
                    2022) | Colorado Neurodiversity Chamber of Commerce |
                    JPMorgan Chase | Rollnik-Sadowska &amp; Grabinska (2024)
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-[#221da0] hover:bg-[#1b177f] text-white px-8 py-6 text-lg shadow-lg"
                  onClick={() => scrollToSection('what-we-offer')}
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#221da0] text-[#221da0] hover:bg-[#221da0] hover:text-white px-8 py-6 text-lg"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-6 border-t border-[#221da0]/10">
                <div>
                  <div className="text-3xl font-bold text-[#221da0]">500+</div>
                  <div className="text-[#5a5a5a] text-sm">Organizations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#221da0]">50K+</div>
                  <div className="text-[#5a5a5a] text-sm">Leaders Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#221da0]">95%</div>
                  <div className="text-[#5a5a5a] text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzM4NTg1MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse team collaboration in modern workspace"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#78D047] rounded-full opacity-10 blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#221da0] rounded-full opacity-10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider color="#221da0" />
    </>
  );
}
