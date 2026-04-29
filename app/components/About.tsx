import Image from 'next/image';
import { Award, Building2, Users } from 'lucide-react';
import { CurvedDivider } from './CurvedDivider';

export function About() {
  return (
    <>
      <section id="about" className="py-24 bg-[#f7f8ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#221da0] text-sm font-semibold uppercase tracking-wider mb-3">
              About
            </p>
            <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6">
              About Neurodiverse Strategies
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-[#221da0]/15 bg-white p-8 shadow-sm lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#221da0] shadow-md">
                <Building2 className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-semibold text-[#1a1a1a]">
                What We Do
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-[#5a5a5a]">
                We help organizations reduce costly turnover, equip managers
                with the skills they&apos;re missing, and build the kind of
                inclusive workplace where neurodivergent employees, who make up
                1 in 5 of your workforce, can deliver at their full potential.
              </p>
            </div>

            <div className="rounded-2xl border border-[#221da0]/15 bg-white p-8 shadow-sm lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
                <div>
                  <div className="mb-4 flex flex-wrap gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#221da0]/10">
                      <Users className="text-[#221da0]" size={24} />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#78D047]/10">
                      <Award className="text-[#78D047]" size={24} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-semibold text-[#1a1a1a]">
                    Meet Dr. Karen Lynne, CEO and Founder
                  </h3>
                  <div className="mt-5 space-y-4 text-lg leading-relaxed text-[#5a5a5a]">
                    <p>
                      With over 30 years of experience, Dr. Karen Lynne is an
                      organizational strategist and founder of Neurodiverse
                      Strategies who understands the real challenges
                      organizations face, and the hidden barriers holding people
                      back. Her work is grounded in a Ph.D. in Leadership,
                      Culture, and Curriculum and decades of experience
                      supporting neurodivergent individuals across educational
                      and professional settings, giving her a rare ability to
                      see beneath the surface and identify the root issues
                      others miss.
                    </p>
                    <p>
                      An international presenter on institutional effectiveness
                      and inclusive systems, she has partnered with leaders to
                      translate cognitive diversity into measurable
                      organizational strength. She has developed and implemented
                      high-impact neuroinclusive programs that improve
                      retention, clarify processes, and strengthen
                      collaboration, while advising senior leaders on
                      accessibility and inclusion strategy with both regulatory
                      expertise and systems-level insight.
                    </p>
                  </div>
                </div>
                <div className="relative mx-auto aspect-4/5 w-full max-w-[380px] overflow-hidden rounded-2xl border-4 border-[#78D047]/40 shadow-xl lg:mx-0">
                  <Image
                    src="/dr-karen-lynne-headshot.png"
                    alt="Dr. Karen Lynne"
                    width={760}
                    height={950}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider color="#ffffff" />
    </>
  );
}
