import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CurvedDivider } from "./CurvedDivider";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative bg-gradient-to-br from-white to-[#f3f6f4] py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-[#006666]/10 text-[#006666] px-4 py-2 rounded-full text-sm font-semibold border border-[#006666]/30">
                  Workplace Transformation
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl text-[#1a1a1a] leading-tight">
                Stronger Operational Outcomes Through Neuroinclusive
                Environments
              </h1>
              <div className="space-y-3">
                <p className="text-xl text-[#5a5a5a] leading-relaxed">
                  Operational Inefficiency Rarely Looks Obvious.
                </p>
                <p className="text-xl text-[#5a5a5a] leading-relaxed">
                  Operational inefficiency shows up as execution gaps, hidden
                  underperformance, slowed decision-making, preventable talent
                  loss, and repeated management intervention. What appears to be
                  a people problem is often an efficiency problem. And
                  efficiency is fixable.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-[#006666] hover:bg-[#005555] text-white px-8 py-6 text-lg shadow-lg"
                  onClick={() => scrollToSection("what-we-offer")}
                >
                  Explore Our Services
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#006666] text-[#006666] hover:bg-[#006666] hover:text-white px-8 py-6 text-lg"
                  onClick={() => scrollToSection("about")}
                >
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-6 border-t border-[#006666]/10">
                <div>
                  <div className="text-3xl font-bold text-[#006666]">
                    500+
                  </div>
                  <div className="text-[#5a5a5a] text-sm">Organizations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#006666]">
                    50K+
                  </div>
                  <div className="text-[#5a5a5a] text-sm">Leaders Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#006666]">95%</div>
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
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#660000] rounded-full opacity-10 blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#006666] rounded-full opacity-10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider color="#006666" />
    </>
  );
}
