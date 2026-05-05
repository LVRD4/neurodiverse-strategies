import { Button } from './ui/button';
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
        className="relative overflow-hidden bg-cover bg-center py-20 lg:py-32"
        style={{ backgroundImage: "url('/cover-photo.png')" }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221da0]/85 via-[#221da0]/55 to-[#1a1a1a]/35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#78D047] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-md">
                  Workplace Transformation
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl text-white leading-tight">
                Employee Turnover is Costing You More Than You Think
              </h1>
              <div className="space-y-3">
                <p className="text-xl text-white/90 leading-relaxed">
                  Up to 85% of neurodivergent employees won&apos;t keep their jobs,
                  and their companies are paying the price.
                </p>
                <div className="rounded-2xl border border-[#78D047]/50 bg-white/90 px-6 py-5 text-[#5a5a5a] shadow-xl backdrop-blur-sm">
                  <h2 className="text-center text-xl font-semibold leading-tight text-[#1a1a1a]">
                    Here&apos;s what the research actually shows and what it&apos;s
                    costing companies:
                  </h2>
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed marker:text-[#78D047]">
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
                  className="bg-[#78D047] hover:bg-[#6abd3f] text-[#1a1a1a] px-8 py-6 text-lg shadow-lg"
                  onClick={() => scrollToSection('what-we-offer')}
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#221da0] px-8 py-6 text-lg"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#78D047]">500+</div>
                  <div className="text-white/80 text-sm">Organizations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#78D047]">50K+</div>
                  <div className="text-white/80 text-sm">Leaders Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#78D047]">95%</div>
                  <div className="text-white/80 text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider color="#221da0" />
    </>
  );
}
