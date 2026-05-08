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
        className="relative overflow-hidden bg-cover bg-center py-14 sm:py-20 lg:py-32"
        style={{ backgroundImage: "url('/cover-photo.png')" }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221da0]/85 via-[#221da0]/55 to-[#1a1a1a]/35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#78D047] text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-md">
                  Neuroinclusive Workplace Consulting
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Neurodiverse Strategies
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
                We help organizations reduce costly turnover, improve employee
                performance, and build neuroinclusive workplaces that drive
                measurable results.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Neurodiversity consulting for workplace performance, retention,
                and inclusive culture transformation.
              </p>
              <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-4">
                <Button
                  className="bg-[#78D047] hover:bg-[#6abd3f] text-[#1a1a1a] px-6 py-5 text-base shadow-lg sm:px-8 sm:py-6 sm:text-lg"
                  onClick={() => scrollToSection('what-we-offer')}
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#221da0] px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3 border-t border-white/20 pt-5 sm:grid-cols-3 sm:gap-6 sm:pt-6">
                <div>
                  <div className="text-2xl font-bold text-[#78D047] sm:text-3xl">
                    Retention
                  </div>
                  <div className="text-white/80 text-sm">Focused systems</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#78D047] sm:text-3xl">
                    Performance
                  </div>
                  <div className="text-white/80 text-sm">Clearer support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#78D047] sm:text-3xl">
                    Culture
                  </div>
                  <div className="text-white/80 text-sm">Inclusive practice</div>
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
